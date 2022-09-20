import { Box, Stack, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import React from "react";

const OneAnneeExercice = ({ annee, dateDebut, dateFin }: any) => {
  return (
    <OneContainer>
      <Typography variant="h2" color="initial">
        {annee}
      </Typography>
      <Stack>
        <Typography variant="body2" color="initial">
          {dateDebut}
        </Typography>
        <Typography variant="body2" color="initial">
          au
        </Typography>
        <Typography variant="body2" color="initial">
          {dateFin}
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}>
        <IconButton color="secondary" aria-label="edit" component="button">
          <Edit />
        </IconButton>
        <IconButton color="secondary" aria-label="delete" component="button">
          <Delete />
        </IconButton>
      </Stack>
    </OneContainer>
  );
};

export default OneAnneeExercice;

const OneContainer = styled(Box)(({ theme }) => ({
  background: "white",
  width: 300,
  textAlign: "center",
  borderRadius: 20,
  margin: 5,
}));
