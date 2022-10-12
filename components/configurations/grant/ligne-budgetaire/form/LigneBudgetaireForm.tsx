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
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import {
  createBudgetLine,
  updateBudgetLine,
  editBudgetLine,
} from "../../../../../redux/features/budgetLine";
import { cancelEdit } from "../../../../../redux/features/budgetLine/budgetLineSlice";
import { useRouter } from "next/router";
import OSTextField from "../../../../shared/input/OSTextField";
import OSSelectField from "../../../../shared/select/OSSelectField";
import KeyValue from "../../../../shared/keyValue";
import useFetchGrants from "../../hooks/useFetchGrants";

const LigneBudgetaireForm = () => {
  const router = useRouter();
  const { idlb }: any = router.query;
  const { idlball }: any = router.query;
  const idGrant: any = router?.query?.id;
  const useFetchAllGrant = useFetchGrants();
  const dispatch = useAppDispatch();
  const { isEditing, budgetLine } = useAppSelector((state) => state.budgetLine);
  const { grantList } = useAppSelector((state) => state.grant);

  React.useEffect(() => {
    if (idlb) {
      dispatch(editBudgetLine({ id: idlb }));
    }
  }, [idlb]);

  React.useEffect(() => {
    if (idlball) {
      dispatch(editBudgetLine({ id: idlball }));
    }
  }, [idlball]);

  React.useEffect(() => {
    useFetchAllGrant();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateBudgetLine({
            id: budgetLine.id!,
            budgetLine: values,
          })
        );
      } else {
        await dispatch(createBudgetLine(values));
      }
      router.push(
        idGrant
          ? `/configurations/grant/${idGrant}/ligne-budgetaire`
          : `/configurations/ligne-budgetaire`
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          code: isEditing ? budgetLine.code : "",
          grantId: isEditing
            ? budgetLine.grantId
            : router?.query?.id
            ? parseInt(idGrant)
            : "",
        }}
        validationSchema={Yup.object({
          code: Yup.string().required("Champs obligatoire"),
          grantId: Yup.number().required("Champs obligatoire"),
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
                    <Link
                      href={
                        idGrant
                          ? `/configurations/grant/${idGrant}/ligne-budgetaire`
                          : `/configurations/ligne-budgetaire`
                      }
                    >
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
                    Formulaire Ligne Budgetaire{" "}
                  </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>

              <FormContainer spacing={2}>
                <OSTextField id="code" label="Code Budgetaire" name="code" />
                <OSSelectField
                  id="type"
                  disabled={idGrant ? true : false}
                  label="Grant"
                  name="grantId"
                  options={grantList}
                  dataKey={"code"}
                  valueKey="id"
                />
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default LigneBudgetaireForm;

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
