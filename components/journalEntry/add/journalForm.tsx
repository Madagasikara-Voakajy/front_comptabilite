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
import { cancelEdit } from "../../../redux/features/journal-entry/JournalEntrySlice";
import OSSelectField from "../../shared/select/OSSelectField";
import OSTextField from "../../shared/input/OSTextField";
import {
  createJournalEntry,
  getJournalEntry,
  editJournalEntry,
  updateJournalEntry,
} from "../../../redux/features/journal-entry";
import OSDatePicker from "../../shared/date/OSDatePicker";
import useFetchFiscalListe from "../../anneeExercice/hooks/useFetchFiscalListe";
import useFetchJournalListe from "../../journal/hooks/useFetchJournalListe";

const JournalEntryForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id, idje }: any = router.query;
  const { isEditing, journalEntry } = useAppSelector(
    (state) => state.journalEntry
  );
  const { fiscalListe } = useAppSelector((state) => state.fiscal);
  const { journalListe } = useAppSelector((state) => state.journal);
  const fetchJournalListe = useFetchJournalListe();
  const fetchfiscalListe = useFetchFiscalListe();

  useEffect(() => {
    if (idje) {
      dispatch(editJournalEntry({ id: idje }));
    }
  }, [router.query]);

  useEffect(() => {
    fetchJournalListe();
    fetchfiscalListe();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      values.number = +values.number;
      if (isEditing) {
        await dispatch(
          updateJournalEntry({
            id: journalEntry.id!,
            journalEntry: values,
          })
        );
      } else {
        await dispatch(createJournalEntry(values));
      }
      router.push(`/fichier/${id}/journal-entry`);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          number: isEditing ? journalEntry?.number : "",
          date: isEditing ? journalEntry.date : "",
          reference: isEditing ? journalEntry?.reference : "",
          journalId: isEditing ? journalEntry?.journalId : "",
          fiscalYearId: isEditing ? journalEntry?.fiscalYearId : "",
        }}
        validationSchema={Yup.object({
          number: Yup.number().required("Champ obligatoire"),
          date: Yup.date().required("Champ obligatoire"),
          reference: Yup.string().required("Champ obligatoire"),
          journalId: Yup.string().required("champ obligatoire"),
          fiscalYearId: Yup.string().required("champ obligatoire"),
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
                  <Link href={`/fichier/${id}/journal-entry`}>
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
                  {isEditing ? "Modifier" : "Ajouter"} Journal de saisie
                </Typography>
              </SectionNavigation>
              <Divider />
            </NavigationContainer>

            <FormContainer spacing={2}>
              <OSTextField
                fullWidth
                id="outlined-basic"
                label="Numéro"
                name="number"
                type="number"
              />
              <OSDatePicker
                fullWidth
                label="Date"
                value={formikProps.values.date}
                onChange={(value: any) =>
                  formikProps.setFieldValue("date", value)
                }
              />
              <OSTextField
                id="outlined-basic"
                label="Reference"
                name="reference"
              />
              <OSSelectField
                id="outlined-basic"
                label="Journal"
                name="journalId"
                options={journalListe}
                dataKey="name"
                valueKey="id"
              />
              <OSSelectField
                id="outlined-basic"
                name="fiscalYearId"
                label="Année"
                options={fiscalListe}
                dataKey="year"
                valueKey="id"
              />
            </FormContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default JournalEntryForm;

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
