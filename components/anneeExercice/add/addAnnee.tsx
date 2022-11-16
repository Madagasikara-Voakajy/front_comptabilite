import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import * as Yup from "yup";
import {
  createFiscal,
  updateFiscal,
} from "../../../redux/features/fiscal-year";
import OSTextField from "../../shared/input/OSTextField";
import { cancelEdit } from "../../../redux/features/fiscal-year/fiscalSlice";
import useFetchComptaFileListe from "../../fichier/hooks/useFetchComptaFile";
import OSSelectField from "../../shared/select/OSSelectField";
import useFetchFiscalListe from "../hooks/useFetchFiscalListe";

const FiscalForm = ({ handleClose }: any) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const fileIdQ: any = router.query.id;
  const { idfile }: any = router.query;

  const route = useRouter();

  const dispatch = useAppDispatch();

  const { isEditing, fiscal }: any = useAppSelector((state) => state.fiscal);

  const { comptaFileListe } = useAppSelector((state) => state.comptaFile);

  const fetchComptaFileListe = useFetchComptaFileListe();

  const fetchFiscalListe = useFetchFiscalListe();

  useEffect(() => {
    fetchComptaFileListe();
  }, []);

  useEffect(() => {
    fetchFiscalListe();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateFiscal({
            id: fiscal.id!,
            fiscal: values,
          })
        );
      } else {
        await dispatch(createFiscal(values));
      }
      fetchFiscalListe();
      handleClose();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={
          isEditing
            ? fiscal
            : {
                year: isEditing ? fiscal?.year : "",
                locked: isEditing ? fiscal?.locked : false,
                fileId: +idfile,
              }
        }
        validationSchema={Yup.object({
          year: Yup.string().required("Champ obligatoire"),
          // locked: Yup.string().required("Champ obligatoire"),
          // fileId: Yup.string().required("Champ obligatoire"),
        })}
        onSubmit={(value: any, action: any) => {
          handleSubmit(value);
          action.resetForm();
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <DialogTitle>
                {/* Formulaire (Créer/Modifier) */}
                {isEditing ? "Modifier" : "Formulaire"} Année d'exercice
              </DialogTitle>
              <DialogContent>
                <FormContainer spacing={2} mt={2}>
                  <OSTextField
                    id="outlined-basic"
                    label="Année d'exercice"
                    name="year"
                    type="number"
                  />
                  {/* <OSSelectField
                  id="outlined-basic"
                  name="fileId"
                  label="file"
                  options={comptaFileListe}
                  dataKey="NIF"
                  valueKey="id"
                  /> */}
                </FormContainer>
              </DialogContent>
              <DialogActions>
                <Button
                  color="warning"
                  onClick={() => {
                    formikProps.resetForm();
                    dispatch(cancelEdit());
                    handleClose();
                  }}
                >
                  Annuler
                </Button>
                <Button variant="contained" type="submit">
                  Enregistrer
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FiscalForm;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  // padding: 30,
  // borderRadius: 20,
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
