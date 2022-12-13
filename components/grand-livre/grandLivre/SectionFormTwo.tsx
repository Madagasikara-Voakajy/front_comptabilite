import { Stack, styled, TextField } from "@mui/material";
import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useFetchEmployes from "../Livre/hooks/useFetchEmployees";
import { useAppSelector } from "../../../hooks/reduxHooks";
import OSSelectField from "../../shared/select/OSSelectField";
import OSDatePicker from "../../shared/date/OSDatePicker";

const SectionFormTwo = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const { isEditing, employeeList, journalItem } = useAppSelector(
    (state) => state.journalItem
  );
  const fetchEmployees = useFetchEmployes();

  useEffect(() => {
    fetchEmployees();
  }, []);

  // {
  //   (formikProps: {
  //     values: { deliveryDate: any };
  //     setFieldValue: (arg0: string, arg1: any) => any;
  //   }) => {
  return (
    <FormContainer spacing={2}>
      <CustomStack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 2, sm: 2, md: 1 }}
      >
        <TextField
          id="outlined-basic"
          fullWidth
          label="Date début"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          label="Date fin"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fournisseur</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Fournisseur"
            onChange={handleChange}
          >
            <MenuItem value={10}>Fournisseur_1</MenuItem>
            <MenuItem value={20}>Fournisseur_2</MenuItem>
            <MenuItem value={30}>Fournisseur_3</MenuItem>
          </Select>
        </FormControl>
        {/* <OSDatePicker
              fullWidth
              label="Date début"
              value={formikProps.values.deliveryDate}
              onChange={(value: any) =>
                formikProps.setFieldValue("dateDebut", value)
              }
            />
            <OSDatePicker
              fullWidth
              label="Date fin"
              value={formikProps.values.deliveryDate}
              onChange={(value: any) =>
                formikProps.setFieldValue("dateFin", value)
              }
            />
            <OSSelectField
              id="fournisseur"
              label="fournisseur"
              name="fournisseur"
              options={employeeList}
              dataKey={"name"}
              valueKey="id"
            /> */}
      </CustomStack>
    </FormContainer>
  );
};
//   }
// };

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
  marginTop: theme.spacing(2),
}));

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexwrap: "wrap",
  },
}));

export default SectionFormTwo;
