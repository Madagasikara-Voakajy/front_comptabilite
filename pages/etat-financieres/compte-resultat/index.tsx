import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import CompteResultat from "../../../components/etatFinanciers/compteResultat/CompteResultat";

const index = () => {
  return (
    <BackOfficeLayout>
      <CompteResultat />
    </BackOfficeLayout>
  );
};

export default index;
