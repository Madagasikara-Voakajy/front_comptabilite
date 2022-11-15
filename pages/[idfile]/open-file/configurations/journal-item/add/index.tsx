import { Container } from "@mui/material";
import React from "react";
import JournalItemForm from "../../../../../../components/configurations/JournalItem/form/  JournalItemForm";
import BackOfficeLayout from "../../../../../../layouts/backOffice";

const index = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <JournalItemForm />
      </Container>
    </BackOfficeLayout>
  );
};

export default index;
