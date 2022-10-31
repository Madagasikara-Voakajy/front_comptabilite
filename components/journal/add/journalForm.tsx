import {
  Button,
  Container,
  styled,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { cancelEdit } from "../../../redux/features/journal/journalSlice";
import OSSelectField from "../../shared/select/OSSelectField";
import OSTextField from "../../shared/input/OSTextField";
import { createJournal, updateJournal } from "../../../redux/features/journal";

const JournalForm = () => {
  const router = useRouter();
  const { id, idae }: any = router.query;
  const { isEditing, journal }: any = useAppSelector((state) => state.journal);

  const { comptaFileListe } = useAppSelector((state) => state.comptaFile);

  const { journalTypeList } = useAppSelector((state) => state.journalType);

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateJournal({
            id: journal.id!,
            journal: values,
          })
        );
      } else {
        await dispatch(createJournal(values));
      }
      router.push(`/fichier/${id}/annee-exercice/${idae}/journal`);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={
          isEditing
            ? journal
            : {
                name: isEditing ? journal?.name : "",
                code: isEditing ? journal?.code : "",
                fileId: +id,
                typeId: isEditing ? journal?.typeId : "",
              }
        }
        validationSchema={Yup.object({
          name: Yup.string().required("Champ obligatoire"),
          code: Yup.string().required("Champ obligatoire"),
          fileId: Yup.string().required("Champ obligatoire"),
          typeId: Yup.number().required("champ obligatoire"),
        })}
        onSubmit={async (value: any, action) => {
          await handleSubmit(value);
          action.resetForm();
        }}
      >
        {(formikProps) => (
          <Form>
            <NavigationContainer>
              <SectionNavigation>
                <Stack flexDirection={"row"}>
                  <Link href="/journal">
                    <Button
                      color="info"
                      variant="text"
                      startIcon={<ArrowBack />}
                      onClick={() => {
                        formikProps.resetForm();
                        dispatch(cancelEdit());
                      }}
                    >
                      Retour
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="small"
                    startIcon={<Check />}
                    sx={{ marginInline: 3 }}
                  >
                    Enregistrer
                  </Button>
                  <Button
                    variant="text"
                    color="warning"
                    size="small"
                    type="reset"
                    startIcon={<Close />}
                    sx={{ marginInline: 3 }}
                    onClick={() => {
                      formikProps.resetForm();
                      dispatch(cancelEdit());
                    }}
                  >
                    Annuler
                  </Button>
                </Stack>
                <Typography variant="h4">
                  {isEditing ? "Modifier" : "Ajouter"} Journal
                </Typography>
              </SectionNavigation>
              <Divider />
            </NavigationContainer>

            <FormContainer spacing={2}>
              <OSTextField
                fullWidth
                id="name"
                label="Nom"
                variant="outlined"
                name="name"
              />
              <OSTextField
                fullWidth
                id="code"
                label="Code"
                variant="outlined"
                name="code"
              />
              <OSSelectField
                id="outlined-basic"
                label="File"
                disabled
                name="fileId"
                options={comptaFileListe}
                dataKey="companyName"
                valueKey="id"
              />
              <OSSelectField
                id="outlined-basic"
                name="typeId"
                label="Type"
                options={journalTypeList}
                dataKey="type"
                valueKey="id"
              />
            </FormContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default JournalForm;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  flex: 1,
  width: "100%",
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "5px",
}));
