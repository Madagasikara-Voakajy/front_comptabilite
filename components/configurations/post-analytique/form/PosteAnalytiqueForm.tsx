import {
  Button,
  Container,
  styled,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  createAuxiliairyAccount,
  updateAuxiliairyAccount,
  editAuxiliairyAccount,
} from "../../../../redux/features/auxiliairyAccount";
import { cancelEdit } from "../../../../redux/features/auxiliairyAccount/auxiliairyAccountSlice";
import { useRouter } from "next/router";
import OSTextField from "../../../shared/input/OSTextField";
import OSSelectField from "../../../shared/select/OSSelectField";
import KeyValue from "../../../shared/keyValue";

const PosteAnalytiqueForm = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  const { isEditing, auxiliaryAccount } = useAppSelector(
    (state) => state.auxiliaryAccount
  );
  const type = [
    { id: "CUSTOMER", name: "Post Analytique 1" },
    { id: "SUPPLIER", name: "Post Analytique 2" },
    { id: "EMPLOYEE", name: "Post Analytique 3" },
    { id: "OTHER", name: "Post Analytique 4" },
  ];

  React.useEffect(() => {
    if (id) {
      dispatch(editAuxiliairyAccount({ id }));
    }
  }, [id]);

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateAuxiliairyAccount({
            id: auxiliaryAccount.id!,
            auxiliairyAccount: values,
          })
        );
      } else {
        await dispatch(createAuxiliairyAccount(values));
      }
      router.push("/comptes/auxiliaire");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          name: isEditing ? auxiliaryAccount.name : "",
          type: isEditing ? auxiliaryAccount.type : "",
          activity: isEditing ? auxiliaryAccount.activity : "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Champs obligatoire"),
          type: Yup.string().required("Champs obligatoire"),
          activity: Yup.string().nullable(),
        })}
        onSubmit={(value: any, action: any) => {
          handleSubmit(value);
          action.resetForm();
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <NavigationContainer>
                <SectionNavigation>
                  <Stack flexDirection={"row"}>
                    <Link href="/grant">
                      <Button
                        color="info"
                        variant="text"
                        startIcon={<ArrowBack />}
                      >
                        Retour
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<Check />}
                      sx={{ marginInline: 3 }}
                      type="submit"
                      disabled
                    >
                      Enregistrer
                    </Button>
                    <Button
                      variant="text"
                      color="warning"
                      size="small"
                      startIcon={<Close />}
                      onClick={() => {
                        formikProps.resetForm();
                        dispatch(cancelEdit());
                      }}
                    >
                      Annuler
                    </Button>
                  </Stack>
                  <Typography variant="h4"> Formulaire GRANT </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>

              <FormContainer spacing={2}>
                <OSTextField id="name" label="Numero" name="name" />
                <OSTextField id="activity" label="Nom" name="activity" />
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default PosteAnalytiqueForm;

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
