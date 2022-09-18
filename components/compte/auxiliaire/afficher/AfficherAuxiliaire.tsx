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
import KeyValue from "../../../shared/keyValue";
import { Form, Formik } from "formik";
import * as Yup from "yup";
// import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
// import { createRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
// import { updateRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import { useRouter } from "next/router";
// import OSTextField from "../../shared/input/OSTextField";
// import OSSelectField from "../../shared/select/OSSelectField";
// import { editRecruitmentRequest } from "../../../redux/features/recruitmentRequest";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ErrorMessage, Field } from "formik";

const AfficherAuxiliaire = () => {
  const router = useRouter();
  const { id }: any = router.query;
  // const dispatch = useAppDispatch();
  // const { isEditing, recruitmentRequest } = useAppSelector(
  //   (state) => state.recruitmentRequest
  // );

  const handleSubmit = async (values: any) => {
    // try {
    //   if (isEditing) {
    //     values.validatedByDE = values.validatedByDE === "true" ? true : false;
    //     values.validatedByCA = values.validatedByCA === "true" ? true : false;
    //     await dispatch(
    //       updateRecruitmentRequest({
    //         id: recruitmentRequest.id!,
    //         recruitmentRequest: values,
    //       })
    //     );
    //   } else {
    //     // await dispatch(createRecruitmentRequest(values));
    //   }
    //   router.push("/");
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  React.useEffect(() => {
    // if (id) {
    //   const args = {
    //     include: {
    //       program: true,
    //       applicant: true,
    //     },
    //   };
    //   dispatch(editRecruitmentRequest({ id, args }));
    // }
  }, [id]);

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      {/* <Formik
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
          reasonOfRefusal: Yup.string().required("Champs obligatoire"),
          validatedByDE: Yup.boolean().required("Champs obligatoire"),
          validatedByCA: Yup.boolean().required("Champs obligatoire"),
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
            <Form> */}
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href="/comptes/auxiliaire/">
              <Button color="info" variant="text" startIcon={<ArrowBack />}>
                Retour
              </Button>
            </Link>
            {/* <Button
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
                    </Button> */}
          </Stack>
          <Typography variant="h4">Details compte auxiliaire</Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>
      <CardContainer spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Nom ou raison sociale" value={"Atélier mv"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Numéro compte générale" value={"40001"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Type" value={"Entreprise"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Activé" value={"Menuserie"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Numéro d’identification fiscale (NIF)"
              value={"908-98039"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Numéro statistique (STAT)"
              value={"8970879807"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Rgistre de commerce et de sociétéRCS"
              value={"89078798"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Pays" value={"Madagascar"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Téléphone" value={"0323203232"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Adresse" value={"Antananarivo"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Email" value={"email@gmail.com"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Code  postale" value={"101"} />
          </Grid>
        </Grid>
      </CardContainer>
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
    </Container>
  );
};

export default AfficherAuxiliaire;

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
}));

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
