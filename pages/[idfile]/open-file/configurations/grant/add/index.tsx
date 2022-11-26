import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../../../../layouts/backOffice";
import GrantForm from "../../../../../../components/configurations/grant/form/GrantForm";

const index = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <GrantForm />
      </Container>
    </BackOfficeLayout>
  );
};

export default index;
