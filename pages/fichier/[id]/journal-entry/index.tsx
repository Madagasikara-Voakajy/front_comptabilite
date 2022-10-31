import React from "react";
import BackOfficeLayout from "../../../../layouts/backOffice";
import ListJournalEntry from "../../../../components/journalEntry";

const index = () => {
  return (
    <BackOfficeLayout>
      <ListJournalEntry />
    </BackOfficeLayout>
  );
};

export default index;
