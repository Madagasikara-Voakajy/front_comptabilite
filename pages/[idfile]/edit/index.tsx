import React from "react";
import FormFichierComptable from "../../../components/fichier/add/FormFichierComptable";
import IndexComptaFile from "../../../components/fichier/edit/Index";
import BackOfficeLayout from "../../../layouts/backOffice";

const index = () => {
  return (
    <BackOfficeLayout>
      <FormFichierComptable />
    </BackOfficeLayout>
  );
};

export default index;
