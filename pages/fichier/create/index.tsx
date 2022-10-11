import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../layouts/backOffice";
import FormFichierComptable from "../../../components/fichier/add/FormFichierComptable";

const AccountingFileForm = () => {
  return (
    <BackOfficeLayout>
      <FormFichierComptable />
    </BackOfficeLayout>
  );
};

export default AccountingFileForm;
