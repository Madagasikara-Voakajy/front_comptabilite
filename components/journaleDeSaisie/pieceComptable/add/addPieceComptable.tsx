import * as React from "react";
import Stack from "@mui/material/Stack";
import AddFormPieceComptable from "./form/AddFormPieceComptable";
import ListeEcriture from "./table/ListeEcriture";

const AddPieceComptable = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <AddFormPieceComptable />
      <ListeEcriture />
    </Stack>
  );
};

export default AddPieceComptable;
