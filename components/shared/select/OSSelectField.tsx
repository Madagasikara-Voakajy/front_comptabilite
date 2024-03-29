import React from "react";
import { useField, useFormikContext } from "formik";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const OSSelectField = ({
  name,
  valueKey,
  dataKey,
  options,
  ...otherProps
}: {
  name: string;
  valueKey: string;
  dataKey: string;
  options: any[];
  [key: string]: any;
}) => {
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(name);

  const handleChange = (event: any) => {
    const { value } = event.target;
    console.log("selected value : ", value);
    setFieldValue(name, value);
  };

  const configSelect: any = {
    variant: "outlined",
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((option: any, index: any) => (
        <MenuItem key={index} value={option[valueKey]}>
          {option[dataKey]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default OSSelectField;
