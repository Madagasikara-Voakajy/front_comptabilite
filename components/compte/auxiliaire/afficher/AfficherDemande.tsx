import {
  Button,
  Container,
  styled,
  Typography,
  TextField,
  FormControl,
  Stack,
  Grid,
  Divider,
  FormHelperText,
} from "@mui/material";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import KeyValue from "../../shared/keyValue";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { createRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import { updateRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import { useRouter } from "next/router";
import OSTextField from "../../shared/input/OSTextField";
import OSSelectField from "../../shared/select/OSSelectField";
import { editRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ErrorMessage, Field } from "formik";

const AfficherDemande = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  const { isEditing, recruitmentRequest } = useAppSelector(
    (state) => state.recruitmentRequest
  );

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        values.validatedByDE = values.validatedByDE === "true" ? true : false;
        values.validatedByCA = values.validatedByCA === "true" ? true : false;
        await dispatch(
          updateRecruitmentRequest({
            id: recruitmentRequest.id!,
            recruitmentRequest: values,
          })
        );
      } else {
        // await dispatch(createRecruitmentRequest(values));
      }
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    if (id) {
      const args = {
        include: {
          program: true,
          applicant: true,
        },
      };
      dispatch(editRecruitmentRequest({ id, args }));
    }
  }, [id]);

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
                      type="submit"
                      sx={{ marginInline: 3 }}
                    >
                      Enregistrer
                    </Button>
                    <Button
                      variant="text"
                      color="warning"
                      size="small"
                      startIcon={<Close />}
                    >
                      Annuler
                    </Button>
                  </Stack>
                  <Typography variant="h4">
                    Validation demande de recrutement
                  </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardContainer spacing={2}>
                    <KeyValue
                      keyName="Poste"
                      value={recruitmentRequest.position}
                    />
                    <KeyValue
                      keyName="Profil du poste"
                      value={recruitmentRequest.positionProfile}
                    />
                    <KeyValue
                      keyName="Nom du projet"
                      value={recruitmentRequest.projectName}
                    />
                    <KeyValue
                      keyName="Demandeur"
                      value={recruitmentRequest?.applicant?.name}
                    />
                    <KeyValue
                      keyName="Département  du poste"
                      value={recruitmentRequest?.program?.name}
                    />
                    <KeyValue
                      keyName="Nombre de personne à recruter"
                      value={recruitmentRequest?.numberOfPressoneToRecruit}
                    />
                    <KeyValue
                      keyName="Type de recrutement"
                      value={recruitmentRequest.typeOfRecruitment}
                    />
                  </CardContainer>
                </Grid>
                <Grid item xs={6}>
                  <CardContainer>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Stack>
                        <FormControl>
                          <Field
                            as={RadioGroup}
                            row
                            aria-labelledby="validatedByDE-aria-label"
                            name="validatedByDE"
                          >
                            <FormControlLabel
                              value={true}
                              control={<Radio />}
                              label="Validé par le DE"
                              name="validatedByDE"
                            />
                            <FormControlLabel
                              value={false}
                              control={<Radio />}
                              label="Refusé par le DE"
                              name="validatedByDE"
                            />
                          </Field>
                        </FormControl>
                        <FormHelperText sx={{ color: "red" }}>
                          <ErrorMessage name="validatedByDE" />
                        </FormHelperText>
                      </Stack>
                      <Stack>
                        <FormControl>
                          <Field
                            as={RadioGroup}
                            row
                            aria-labelledby="validatedByCA-aria-label"
                            name="validatedByCA"
                          >
                            <FormControlLabel
                              value={true}
                              control={<Radio />}
                              label="Validé par le CA"
                              name="validatedByCA"
                            />
                            <FormControlLabel
                              value={false}
                              control={<Radio />}
                              label="Refusé par le CA"
                              name="validatedByCA"
                            />
                          </Field>
                        </FormControl>
                        <FormHelperText sx={{ color: "red" }}>
                          <ErrorMessage name="validatedByCA" />
                        </FormHelperText>
                      </Stack>
                    </Stack>
                    <Stack p={1}>
                      <OSTextField
                        id="reasonOfRefusal"
                        label="Motif si refusé"
                        name="reasonOfRefusal"
                      />
                    </Stack>
                  </CardContainer>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default AfficherDemande;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const CardContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
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
