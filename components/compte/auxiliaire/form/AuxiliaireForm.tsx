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
// import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
// import useFetchEmployes from "../hooks/useFetchAuxiliaire";
// import useFetchPrograms from "../hooks/useFetchPrograms";
// import { createRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
// import { updateRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
// import { cancelEdit } from "../../../redux/features/recruitmentRequest/recruitmentRequestSlice";
import { useRouter } from "next/router";
import OSTextField from "../../../shared/input/OSTextField";
import OSSelectField from "../../../shared/select/OSSelectField";
import KeyValue from "../../../shared/keyValue";
// import { editRecruitmentRequest } from "../../../redux/features/recruitmentRequest";

const AuxiliaireForm = () => {
  const router = useRouter();
  const { id }: any = router.query;
  // const dispatch = useAppDispatch();
  // const fetchPrograms = useFetchPrograms();
  // const fetchEmployees = useFetchEmployes();
  // const { programs, employees, isEditing, recruitmentRequest } = useAppSelector(
  //   (state) => state.recruitmentRequest
  // );
  const typeOfRecruitment = [
    { id: "EXTERNAL", name: "EXTERNAL" },
    { id: "INTERNAL", name: "INTERNAL" },
  ];
  const status = [
    { id: "PENDING", name: "PENDING" },
    { id: "APPROVED", name: "APPROVED" },
    { id: "REJECTED", name: "REJECTED" },
  ];

  React.useEffect(() => {
    // if (id) {
    //   dispatch(editRecruitmentRequest({ id }));
    // }
  }, [id]);

  React.useEffect(() => {
    // fetchPrograms();
    // fetchEmployees();
  }, []);

  const handleSubmit = async (values: any) => {
    // try {
    //   if (isEditing) {
    //     await dispatch(
    //       updateRecruitmentRequest({
    //         id: recruitmentRequest.id!,
    //         recruitmentRequest: values,
    //       })
    //     );
    //   } else {
    //     await dispatch(createRecruitmentRequest(values));
    //   }
    //   router.push("/");
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          test: "",
          // reference: isEditing ? recruitmentRequest.reference : "",
          // position: isEditing ? recruitmentRequest.position : "",
          // positionProfile: isEditing ? recruitmentRequest.positionProfile : "",
          // projectName: isEditing ? recruitmentRequest.projectName : "",
          // numberOfPressoneToRecruit: isEditing
          //   ? recruitmentRequest.numberOfPressoneToRecruit
          //   : 0,
          // typeOfRecruitment: isEditing
          //   ? recruitmentRequest.typeOfRecruitment
          //   : "",
          // status: isEditing ? recruitmentRequest.status : "PENDING",
          // reasonOfRefusal: isEditing ? recruitmentRequest.reasonOfRefusal : "",
          // validatedByDE: isEditing ? recruitmentRequest.validatedByDE : false,
          // validatedByCA: isEditing ? recruitmentRequest.validatedByCA : false,
          // programId: isEditing ? recruitmentRequest.programId : "",
          // applicantId: isEditing ? recruitmentRequest.applicantId : "",
        }}
        validationSchema={Yup.object({
          // reference: Yup.string().required("Champs obligatoire"),
          // position: Yup.string().required("Champs obligatoire"),
          // positionProfile: Yup.string().required("Champs obligatoire"),
          // projectName: Yup.string().required("Champs obligatoire"),
          // numberOfPressoneToRecruit:
          //   Yup.number().required("Champs obligatoire"),
          // typeOfRecruitment: Yup.string().required("Champs obligatoire"),
          // status: Yup.string().required("Champs obligatoire"),
          // reasonOfRefusal: Yup.string().required("Champs obligatoire"),
          // validatedByDE: Yup.boolean().required("Champs obligatoire"),
          // validatedByCA: Yup.boolean().required("Champs obligatoire"),
          // programId: Yup.string().required("Champs obligatoire"),
          // applicantId: Yup.string().required("Champs obligatoire"),
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
                    <Link href="/comptes/auxiliaire/">
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
                    >
                      Enregistrer
                    </Button>
                    <Button
                      variant="text"
                      color="warning"
                      size="small"
                      startIcon={<Close />}
                      // onClick={() => {
                      //   formikProps.resetForm();
                      //   dispatch(cancelEdit());
                      // }}
                    >
                      Annuler
                    </Button>
                  </Stack>
                  <Typography variant="h4">
                    {" "}
                    Formulaire compte auxiliaire{" "}
                  </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>

              <FormContainer spacing={2}>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="reference"
                    label="Nom ou raison sociale"
                    name="reference"
                  />
                  <OSTextField
                    id="Numéro de Compte générale "
                    label="Numéro de Compte générale "
                    name="Numéro de Compte générale "
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="Type" label="Type" name="Type" />
                  <OSTextField
                    id="Numéro Statistique (STAT)"
                    label="Activité"
                    name="Activité"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="Numéro d’Identification Fiscale (NIF)"
                    label="Numéro d’Identification Fiscale (NIF)"
                    name="Numéro d’Identification Fiscale (NIF)"
                  />
                  <OSTextField
                    id="Numéro Statistique (STAT)"
                    label="Numéro Statistique (STAT)"
                    name="Numéro Statistique (STAT)"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="RCS (Registre du Commerce et de Société)"
                    label="RCS (Registre du Commerce et de Société)"
                    name="RCS (Registre du Commerce et de Société)"
                  />
                  <OSTextField id="Pays" label="Pays" name="Pays" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="Téléphone"
                    label="Téléphone"
                    name="Téléphone"
                  />
                  <OSTextField id="Adresse" label="Adresse" name="Adresse" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="Email" label="Email" name="Email" />
                  <OSTextField
                    id="Code Postale"
                    label="Code Postale"
                    name="Code Postale"
                  />
                </CustomStack>
              </FormContainer>
              <FormContainer mt={2} spacing={2}>
                <Typography variant="h6" color="initial">
                  Solvabilités
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <KeyValue keyName="Numéro du pièces" value={"12211"} />
                  <KeyValue keyName="Débits" value={"30000"} />
                  <KeyValue keyName="Crédits" value={"20000"} />
                  <KeyValue keyName="Solde" value={"10000"} />
                </Stack>
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default AuxiliaireForm;

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
