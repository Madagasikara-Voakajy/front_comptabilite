import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ModeDePaiementForm from "./ModeDepaiementForm";
import ListModeDePaiement from "./table/ListModeDepaiement";

const ModeDePaiementSection = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ModeDePaiementForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <ListModeDePaiement />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ModeDePaiementSection;
