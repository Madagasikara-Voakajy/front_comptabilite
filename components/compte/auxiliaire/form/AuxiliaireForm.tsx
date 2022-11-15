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

const AuxiliaireForm = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const { idfile }: any = router.query;
  const dispatch = useAppDispatch();
  const { isEditing, auxiliaryAccount } = useAppSelector(
    (state) => state.auxiliaryAccount
  );
  const type = [
    { id: "CUSTOMER", name: "CLIENT" },
    { id: "SUPPLIER", name: "FOURNISSEUR" },
    { id: "EMPLOYEE", name: "EMPLOYÉ" },
    { id: "OTHER", name: "AUTRE" },
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
      router.push(`/${idfile}/open-file/comptes/auxiliaire`);
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
          NIF: isEditing ? auxiliaryAccount.NIF : "",
          STAT: isEditing ? auxiliaryAccount.STAT : "",
          RCS: isEditing ? auxiliaryAccount.RCS : "",
          coutnry: isEditing ? auxiliaryAccount.coutnry : "",
          phone: isEditing ? auxiliaryAccount.phone : "",
          address: isEditing ? auxiliaryAccount.address : "",
          email: isEditing ? auxiliaryAccount.email : "",
          postalCode: isEditing ? auxiliaryAccount.postalCode : "",
          // defaultAccountId: isEditing ? auxiliaryAccount.defaultAccountId : "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Champs obligatoire"),
          type: Yup.string().required("Champs obligatoire"),
          activity: Yup.string().nullable(),
          NIF: Yup.string().nullable(),
          STAT: Yup.string().nullable(),
          RCS: Yup.string().nullable(),
          coutnry: Yup.string().nullable(),
          phone: Yup.string().nullable(),
          address: Yup.string().nullable(),
          email: Yup.string().email().nullable(),
          postalCode: Yup.string().nullable(),
          // defaultAccountId: Yup.string().required("Champs obligatoire"),
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
                    <Link href={`/${idfile}/open-file/comptes/auxiliaire`}>
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
                    Formulaire compte auxiliaire{" "}
                  </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>

              <FormContainer spacing={2}>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="name" label="Nom" name="name" />
                  <OSSelectField
                    id="type"
                    label="Type"
                    name="type"
                    options={type}
                    dataKey={"name"}
                    valueKey="id"
                  />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="activity" label="Activity" name="activity" />
                  <OSTextField id="NIF" label="NIF" name="NIF" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="STAT" label="STAT" name="STAT" />
                  <OSTextField id="RCS" label="RCS" name="RCS" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="coutnry" label="Pays" name="coutnry" />
                  <OSTextField id="phone" label="telephone" name="phone" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField id="address" label="Adresse" name="address" />
                  <OSTextField id="email" label="Email" name="email" />
                </CustomStack>
                <CustomStack direction={"row"} spacing={2}>
                  <OSTextField
                    id="postalCode"
                    label="Code Postale"
                    name="postalCode"
                  />
                  <OSTextField
                    id="defaultAccountId"
                    label="Compte par defaut"
                    name="defaultAccountId"
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
