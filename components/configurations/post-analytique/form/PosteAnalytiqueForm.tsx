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
  createPostAnalytic,
  updatePostAnalytic,
  editPostAnalytic,
} from "../../../../redux/features/postAnalytic";
import { cancelEdit } from "../../../../redux/features/postAnalytic/postAnalyticSlice";
import { useRouter } from "next/router";
import OSTextField from "../../../shared/input/OSTextField";
import OSSelectField from "../../../shared/select/OSSelectField";
import KeyValue from "../../../shared/keyValue";

const PosteAnalytiqueForm = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  const { isEditing, postAnalytic } = useAppSelector(
    (state) => state.postAnalytic
  );

  React.useEffect(() => {
    if (id) {
      dispatch(editPostAnalytic({ id }));
    }
  }, [id]);

  const handleSubmit = async (values: any) => {
    try {
      if (isEditing) {
        await dispatch(
          updatePostAnalytic({
            id: postAnalytic.id!,
            postAnalytic: values,
          })
        );
      } else {
        await dispatch(createPostAnalytic(values));
      }
      router.push("/configurations/post-analytique");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Formik
        enableReinitialize
        initialValues={{
          name: isEditing ? postAnalytic.name : "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Champs obligatoire"),
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
                    <Link href="/grant">
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
                <OSTextField id="name" label="Nom" name="name" />
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default PosteAnalytiqueForm;

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
