import React from "react";
import BackOfficeLayout from "../../../../../layouts/backOffice";
import JournalEntryForm from "../../../../../components/journalEntry/add/journalForm";

const index = () => {
  return (
    <BackOfficeLayout>
      <JournalEntryForm />
    </BackOfficeLayout>
  );
};

export default index;
