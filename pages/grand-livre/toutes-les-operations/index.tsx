import React from "react";
<<<<<<< pages/grand-livre/toutes-les-operations/index.tsx
import BackOfficeLayout from "../../../layouts/backOffice";
import { Container } from "@mui/material";
=======
import { Container } from "@mui/material";
import BackOfficeLayout from "../../../layouts/backOffice";
>>>>>>> pages/grand-livre/toutes-les-operations/index.tsx
import ToutesLesOperations from "../../../components/grand-livre/grandLivre/toutesLesOperation";

const Index = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <ToutesLesOperations />
      </Container>
    </BackOfficeLayout>
  );
};

export default Index;
