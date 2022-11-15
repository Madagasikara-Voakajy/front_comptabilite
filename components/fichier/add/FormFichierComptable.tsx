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
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
// import useFetchComptaFileListe from "../hooks/useFetchComptaFile";
import {
  createComptaFile,
  editComptaFile,
  updateComptaFile,
} from "../../../redux/features/comptaFile";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { cancelEdit } from "../../../redux/features/comptaFile/comptaFileSlice";
import OSSelectField from "../../shared/select/OSSelectField";
import OSTextField from "../../shared/input/OSTextField";
import useFetchCurrencyListe from "../../configurations/currency/hooks/useFetchCurrency";

const FormFichierComptable = () => {
  const route = useRouter();
  const { idfile }: any = route.query;
  const { currencyListe }: any = useAppSelector((state) => state.currency);

  const { isEditing, comptaFile }: any = useAppSelector(
    (state) => state.comptaFile
  );

  const dispatch = useAppDispatch();

  const fetchAllCurrency = useFetchCurrencyListe();

  useEffect(() => {
    fetchAllCurrency();
  }, []);

  useEffect(() => {
    if (idfile) {
      dispatch(editComptaFile({ id: idfile }));
    }
  }, [route.query]);

  //   const fetchComptaFileListe = useFetchComptaFileListe();

  const typeFiscale = [
    { id: "CY", name: "CY", desc: "CY" },
    { id: "SY", name: "SY", desc: "SY" },
  ];

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateComptaFile({
            id: comptaFile.id!,
            comptaFile: values,
          })
        );
      } else {
        await dispatch(createComptaFile(values));
      }
      route.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl">
      <Formik
        enableReinitialize
        initialValues={
          isEditing
            ? comptaFile
            : {
                companyName: isEditing ? comptaFile?.companyName : "",
                activity: isEditing ? comptaFile?.activity : "",
                NIF: isEditing ? comptaFile?.NIF : "",
                STAT: isEditing ? comptaFile?.STAT : "",
                RCS: isEditing ? comptaFile?.RCS : "",
                country: isEditing ? comptaFile?.country : "",
                phone: isEditing ? comptaFile?.phone : "",
                address: isEditing ? comptaFile?.address : "",
                email: isEditing ? comptaFile?.email : "",
                postalCode: isEditing ? comptaFile?.postalCode : "",
                fiscalYearType: isEditing ? comptaFile?.fiscalYearType : "CY",
                currencyId: isEditing ? comptaFile?.currencyId : "",
              }
        }
        validationSchema={Yup.object({
          companyName: Yup.string().required("Champ obligatoire"),
          activity: Yup.string().required("Champ obligatoire"),
          NIF: Yup.string().required("Champ obligatoire"),
          STAT: Yup.string().required("Champ obligatoire"),
          RCS: Yup.string().required("Champ obligatoire"),
          country: Yup.string().required("Champ obligatoire"),
          phone: Yup.string().required("Champ obligatoire"),
          address: Yup.string().required("Champ obligatoire"),
          email: Yup.string().required("Champ obligatoire"),
          postalCode: Yup.string().required("Champ obligatoire"),
          fiscalYearType: Yup.string().required("Champ obligatoire"),
          currencyId: Yup.string().required("Champ obligatoire"),
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
                    <Link href="/">
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
                      size="small"
                      startIcon={<Check />}
                      sx={{ marginInline: 3 }}
                      type="submit"
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
                  <Typography variant="h4">
                    {/* {" "}
                  Formulaire fichier comptable{" "} */}
                    {isEditing ? "Modifier" : "Formulaire"} Fichier comptable
                  </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>
              <FormContainer spacing={2}>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="outlined-basic"
                    label="Nom de l'entreprise"
                    name="companyName"
                  />
                  <OSTextField
                    id="outlined-basic"
                    label="Activité"
                    name="activity"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="outlined-basic"
                    label="Numéro d’Identification Fiscale (NIF)"
                    name="NIF"
                  />
                  <OSTextField
                    id="outlined-basic"
                    label="Numéro Statistique (STAT)"
                    name="STAT"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="outlined-basic"
                    label="RCS (Registre du Commerce et de Société)"
                    name="RCS"
                  />
                  <OSTextField
                    id="outlined-basic"
                    label="Pays"
                    name="country"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="outlined-basic"
                    label="Téléphone"
                    name="phone"
                  />
                  <OSTextField
                    id="outlined-basic"
                    label="Adresse"
                    name="address"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="outlined-basic" label="Email" name="email" />
                  <OSTextField
                    id="outlined-basic"
                    label="Code Postale"
                    name="postalCode"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSSelectField
                    id="outlined-basic"
                    label="Type d'année fiscale"
                    name="fiscalYearType"
                    options={typeFiscale}
                    dataKey="name"
                    valueKey="id"
                    // type="string"
                  />
                  <OSSelectField
                    id="outlined-basic"
                    label="Devise"
                    name="currencyId"
                    options={currencyListe}
                    dataKey="name"
                    valueKey="id"
                    // type="string"
                  />
                </CustomStack>
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default FormFichierComptable;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

export const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
}));

export const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  flex: 1,
  width: "100%",
}));

export const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));
