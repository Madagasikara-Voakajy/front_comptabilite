import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../../../../layouts/backOffice";
import LigneBudgetaireForm from "../../../../../../components/configurations/grant/ligne-budgetaire/form/LigneBudgetaireForm";

const index = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <LigneBudgetaireForm />
      </Container>
    </BackOfficeLayout>
  );
};

export default index;
