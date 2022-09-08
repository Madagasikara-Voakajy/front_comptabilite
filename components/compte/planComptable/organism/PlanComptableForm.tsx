import {
  Stack,
  styled,
  Typography,
  TextField,
  Button,
  FormControlLabel,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
// import {
//   useAppSelector,
//   useAppDispatch,
// } from "../../../../../hooks/reduxHooks";
// import {
//   cancelEdit,
//   createLeaveType,
//   updateLeaveType,
// } from "../../../../../redux/features/leaveType/leaveTypeSlice";

import OSTextField from "../../../shared/input/OSTextField";
import OSSelectField from "../../../shared/select/OSSelectField";
import useFetchPlanComptable from "../hooks/useFetchPlanComptable";


const nature = [
  { name: "CA", id: "CA" },
  { name: "PA", id: "PA" },
  { name: "AA", id: "AA" },
];

const PlanComptableForm = () => {
  // const { isEditing, leaveType } = useAppSelector(
  //   (state) => state.leaveType
  // );
  // const dispatch = useAppDispatch();
  // const fetchLeaveTypes = useFetchLeaveTypes();

  const handleSubmint = async (values: any) => {
    try {
      // if (isEditing) {
      //   delete values.id;
      //   await dispatch(
      //     updateLeaveType({
      //       id: leaveType.id!,
      //       leaveType: values,
      //     })
      //   );
      // } else {
      //   await dispatch(createLeaveType(values));
      // }
      // fetchLeaveTypes();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer>
      <Formik
        enableReinitialize
        initialValues={
          {
            name: "",
          }
          // isEditing
          //   ? leaveType
          //   : {
          //       reference: "",
          //       name: "",
          //       nature: "",
          //       duration: 0,
          //       requireAnAllocation: false,
          //     }
        }
        validationSchema={Yup.object({
          // reference: Yup.string().required("Champ obligatoire"),
          // requireAnAllocation: Yup.boolean().required(
          //   "Champ obligatoire"
          // ),
        })}
        onSubmit={async (value: any, action) => {
          // await handleSubmint(value);
          // action.resetForm();
        }}
      >
        {(formikProps) => (
          <Form>
            <Stack spacing={4}>
              <Typography variant="h5" color="initial">
                Formulaire (Créer/Modifier)
              </Typography>
              <OSTextField
                label="Code"
                name="code"
              ></OSTextField>
              <OSTextField label="Nom" name="name"></OSTextField>
              <OSSelectField
                id="type"
                name="type"
                label="Type"
                options={nature}
                dataKey="name"
                valueKey="id"
              />
              <BtnContainer
                direction="row"
                spacing={2}
                justifyContent="flex-end"
              >
                <Button
                  size="medium"
                  color="warning"
                  variant="text"
                // onClick={() => {
                //   formikProps.resetForm();
                //   dispatch(cancelEdit());
                // }}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  size="medium"
                  color="primary"
                  variant="contained"
                >
                  Enregistrer
                </Button>
              </BtnContainer>
            </Stack>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

const BtnContainer = styled(Stack)(({ theme }) => ({}));

const FormContainer = styled("div")(({ theme }) => ({
  borderRadius: 20,
  padding: theme.spacing(2),
  marginBlock: theme.spacing(2),
  background: "#fff",
}));

export default PlanComptableForm;
