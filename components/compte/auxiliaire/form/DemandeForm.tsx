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
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import useFetchEmployes from "../hooks/useFetchAuxiliaire";
import useFetchPrograms from "../hooks/useFetchPrograms";
import { createRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import { updateRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import { cancelEdit } from "../../../redux/features/recruitmentRequest/recruitmentRequestSlice";
import { useRouter } from "next/router";
import OSTextField from "../../shared/input/OSTextField";
import OSSelectField from "../../shared/select/OSSelectField";
import { editRecruitmentRequest } from "../../../redux/features/recruitmentRequest";

const DemandeForm = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  const fetchPrograms = useFetchPrograms();
  const fetchEmployees = useFetchEmployes();
  const { programs, employees, isEditing, recruitmentRequest } = useAppSelector(
    (state) => state.recruitmentRequest
  );
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
    if (id) {
      dispatch(editRecruitmentRequest({ id }));
    }
  }, [id]);

  React.useEffect(() => {
    fetchPrograms();
    fetchEmployees();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateRecruitmentRequest({
            id: recruitmentRequest.id!,
            recruitmentRequest: values,
          })
        );
      } else {
        await dispatch(createRecruitmentRequest(values));
      }
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          reference: isEditing ? recruitmentRequest.reference : "",
          position: isEditing ? recruitmentRequest.position : "",
          positionProfile: isEditing ? recruitmentRequest.positionProfile : "",
          projectName: isEditing ? recruitmentRequest.projectName : "",
          numberOfPressoneToRecruit: isEditing
            ? recruitmentRequest.numberOfPressoneToRecruit
            : 0,
          typeOfRecruitment: isEditing
            ? recruitmentRequest.typeOfRecruitment
            : "",
          status: isEditing ? recruitmentRequest.status : "PENDING",
          reasonOfRefusal: isEditing ? recruitmentRequest.reasonOfRefusal : "",
          validatedByDE: isEditing ? recruitmentRequest.validatedByDE : false,
          validatedByCA: isEditing ? recruitmentRequest.validatedByCA : false,
          programId: isEditing ? recruitmentRequest.programId : "",
          applicantId: isEditing ? recruitmentRequest.applicantId : "",
        }}
        validationSchema={Yup.object({
          reference: Yup.string().required("Champs obligatoire"),
          position: Yup.string().required("Champs obligatoire"),
          positionProfile: Yup.string().required("Champs obligatoire"),
          projectName: Yup.string().required("Champs obligatoire"),
          numberOfPressoneToRecruit:
            Yup.number().required("Champs obligatoire"),
          typeOfRecruitment: Yup.string().required("Champs obligatoire"),
          status: Yup.string().required("Champs obligatoire"),
          // reasonOfRefusal: Yup.string().required("Champs obligatoire"),
          // validatedByDE: Yup.boolean().required("Champs obligatoire"),
          // validatedByCA: Yup.boolean().required("Champs obligatoire"),
          programId: Yup.string().required("Champs obligatoire"),
          applicantId: Yup.string().required("Champs obligatoire"),
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
                    {" "}
                    Créer demande de recrutement{" "}
                  </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>

              <FormContainer spacing={2}>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="reference"
                    label="Reference"
                    name="reference"
                  />
                  <OSTextField id="position" label="Poste" name="position" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="positionProfile"
                    label="Profil du poste"
                    name="positionProfile"
                  />
                  <OSTextField
                    id="projectName"
                    label="Nom du Projet"
                    name="projectName"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSSelectField
                    id="applicantId"
                    label="Demandeur"
                    name="applicantId"
                    options={employees}
                    dataKey={"name"}
                    valueKey="id"
                  />
                  <OSSelectField
                    id="programId"
                    label="Programme du poste"
                    name="programId"
                    options={programs}
                    dataKey={"name"}
                    valueKey="id"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSSelectField
                    id="typeOfRecruitment"
                    label="Type de recrutement"
                    name="typeOfRecruitment"
                    options={typeOfRecruitment}
                    dataKey={"name"}
                    valueKey="id"
                  />
                  <OSSelectField
                    id="status"
                    label="Status"
                    name="status"
                    options={status}
                    dataKey={"name"}
                    valueKey="id"
                    disabled={isEditing ? false : true}
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="numberOfPressoneToRecruit"
                    label="Nombre de personne à recruter"
                    name="numberOfPressoneToRecruit"
                    type="number"
                  />
                  {isEditing && formikProps.values.status === "REJECTED" ? (
                    <OSTextField
                      id="reasonOfRefusal"
                      label="Motif de refus"
                      name="reasonOfRefusal"
                    />
                  ) : (
                    <span></span>
                  )}
                </CustomStack>
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default DemandeForm;

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
