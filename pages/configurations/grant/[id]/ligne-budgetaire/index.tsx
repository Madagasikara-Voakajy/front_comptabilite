import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../../../layouts/backOffice";
import ListLigneBudgetaire from "../../../../../components/configurations/grant/ligne-budgetaire/ListLigneBudgetaire";

const index = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <ListLigneBudgetaire />
      </Container>
    </BackOfficeLayout>
  );
};

export default index;
