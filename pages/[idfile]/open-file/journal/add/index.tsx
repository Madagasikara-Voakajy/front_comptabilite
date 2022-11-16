import React from "react";
import BackOfficeLayout from "../../../../../layouts/backOffice";
// import { Container } from "@mui/material";
// import AddJournal from "../../../components/journaleDeSaisie/add/addJournal";
import JournalForm from "../../../../../components/journal/add/journalForm";

const Index = () => {
  return (
    <BackOfficeLayout>
      {/* <AddJournal /> */}
      <JournalForm />
    </BackOfficeLayout>
  );
};

export default Index;
