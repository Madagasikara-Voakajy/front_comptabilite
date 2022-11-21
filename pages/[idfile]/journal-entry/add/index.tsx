import React from "react";
import JournalEntryForm from "../../../../components/journalEntry/add/journalForm";
import BackOfficeLayout from "../../../../layouts/backOffice";

const index = () => {
  return (
    <BackOfficeLayout>
      <JournalEntryForm />
    </BackOfficeLayout>
  );
};

export default index;
