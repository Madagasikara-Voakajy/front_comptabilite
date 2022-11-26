import React from "react";
import DetailsFichierComptable from "../../../components/fichier/details/DetailsFichierComptable";
import BackOfficeLayout from "../../../layouts/backOffice";

const index = () => {
  return (
    <BackOfficeLayout>
      <DetailsFichierComptable />
    </BackOfficeLayout>
  );
};

export default index;
