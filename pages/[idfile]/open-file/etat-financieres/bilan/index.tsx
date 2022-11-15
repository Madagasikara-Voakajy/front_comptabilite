import React from "react";
import BackOfficeLayout from "../../../../../layouts/backOffice";
import EtatFinancier from "../../../../../components/etatFinanciers/bilan/EtatFinancier";

const FinancialStatement = () => {
  return (
    <BackOfficeLayout>
      <EtatFinancier />
    </BackOfficeLayout>
  );
};

export default FinancialStatement;
