import {
  Stack,
  styled,
  Typography,
  TextField,
  Button,
  FormControlLabel,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAppSelector, useAppDispatch } from "../../../../hooks/reduxHooks";
import {
  createJournalType,
  updateJournalType,
} from "../../../../redux/features/journalType";
import { cancelEdit } from "../../../../redux/features/journalType/journalTypeSlice";
import OSTextField from "../../../shared/input/OSTextField";
import OSSelectField from "../../../shared/select/OSSelectField";
import useFetchTypeJournal from "../hooks/useFetchTypeJournal";
const nature = [
  { name: "CA", id: 1 },
  { name: "PA", id: 2 },
  { name: "AA", id: 3 },
];

const TypeJournalForm = () => {
  const { isEditing, journalType } = useAppSelector(
    (state) => state.journalType
  );
  const { pcgList } = useAppSelector((state) => state.pcg);
  const dispatch = useAppDispatch();
  const fetchJournalTypes = useFetchTypeJournal();

  const handleSubmint = async (values: any) => {
    try {
      if (isEditing) {
        delete values.id;
        await dispatch(
          updateJournalType({
            id: journalType.id!,
            journalType: values,
          })
        );
      } else {
        await dispatch(createJournalType(values));
      }
      fetchJournalTypes();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer>
      <Formik
        enableReinitialize
        initialValues={
          isEditing
            ? journalType
            : {
                type: "",
                defaultAccountId: 0,
              }
        }
        validationSchema={Yup.object({
          type: Yup.string().required("Champ obligatoire"),
          defaultAccountId: Yup.number().required("Champ obligatoire"),
        })}
        onSubmit={async (value: any, action) => {
          await handleSubmint(value);
          action.resetForm();
        }}
      >
        {(formikProps) => (
          <Form>
            <Stack spacing={4}>
              <Typography variant="h5" color="initial">
                Formulaire (Créer/Modifier)
              </Typography>
              <OSTextField label="Type" name="type"></OSTextField>
              <OSSelectField
                id="defaultAccountId"
                name="defaultAccountId"
                label="Compte par defaut"
                options={pcgList}
                dataKey="code"
                valueKey="id"
              />
              <BtnContainer
                direction="row"
                spacing={2}
                justifyContent="flex-end"
              >
                <Button
                  size="medium"
                  color="warning"
                  variant="text"
                  onClick={() => {
                    formikProps.resetForm();
                    dispatch(cancelEdit());
                  }}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  size="medium"
                  color="primary"
                  variant="contained"
                >
                  Enregistrer
                </Button>
              </BtnContainer>
            </Stack>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

const BtnContainer = styled(Stack)(({ theme }) => ({}));

const FormContainer = styled("div")(({ theme }) => ({
  borderRadius: 20,
  padding: theme.spacing(2),
  marginBlock: theme.spacing(2),
  background: "#fff",
}));

export default TypeJournalForm;
