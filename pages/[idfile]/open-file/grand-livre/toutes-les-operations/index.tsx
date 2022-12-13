import React from "react";
import { Container } from "@mui/material";
import BackOfficeLayout from "../../../../../layouts/backOffice";
import ToutesLesOperations from "../../../../../components/grand-livre/Livre/toutesLesOperation";
// import ToutesLesOperations from "../../../../../components/grand-livre/grandLivre/toutesLesOperation";

const Index = () => {
  return (
    <BackOfficeLayout>
      {/* <ToutesLesOperations /> */}
      <ToutesLesOperations />
    </BackOfficeLayout>
  );
};

export default Index;
