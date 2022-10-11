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
  createGrant,
  updateGrant,
  editGrant,
} from "../../../../redux/features/grant";
import { cancelEdit } from "../../../../redux/features/grant/grantSlice";
import { useRouter } from "next/router";
import OSTextField from "../../../shared/input/OSTextField";
import OSSelectField from "../../../shared/select/OSSelectField";
import KeyValue from "../../../shared/keyValue";
import useFetchPostAnalytique from "../../post-analytique/hooks/useFetchPostAnalytique";

const GrantForm = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  const { isEditing, grant } = useAppSelector((state) => state.grant);
  const { postAnalyticList } = useAppSelector((state) => state.postAnalytic);

  const fetchPostAnalytique = useFetchPostAnalytique();

  React.useEffect(() => {
    if (id) {
      dispatch(editGrant({ id }));
    }
  }, [id]);

  React.useEffect(() => {
    fetchPostAnalytique();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updateGrant({
            id: grant.id!,
            grant: values,
          })
        );
      } else {
        await dispatch(createGrant(values));
      }
      router.push("/configurations/grant");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          code: isEditing ? grant.code : "",
          postAnalyticId: isEditing ? grant.postAnalyticId : "",
        }}
        validationSchema={Yup.object({
          code: Yup.string().required("Champs obligatoire"),
          postAnalyticId: Yup.number().required("Champs obligatoire"),
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
                    <Link href="/configurations/grant">
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
                  <Typography variant="h4"> Formulaire GRANT </Typography>
                </SectionNavigation>
                <Divider />
              </NavigationContainer>

              <FormContainer spacing={2}>
                <OSTextField id="code" label="Code Grant" name="code" />
                <OSSelectField
                  id="type"
                  label="Post Analytique"
                  name="postAnalyticId"
                  options={postAnalyticList}
                  dataKey={"name"}
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

export default GrantForm;

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
