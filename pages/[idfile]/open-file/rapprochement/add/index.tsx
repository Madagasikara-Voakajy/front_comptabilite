import React from "react";
// import AddJournalDeSaisiRapprochement from "../../../components/rapprochement/add/addJournalDeSaisieRapprochement";
import AddJournalDeSaisiRapprochement from "../../../../../components/rapprochement/add/addJournalDeSaisieRapprochement";
// import BackOfficeLayout from "../../../layouts/backOffice";
import BackOfficeLayout from "../../../../../layouts/backOffice";

const JournalSaisie = () => {
  return (
    <BackOfficeLayout>
      <AddJournalDeSaisiRapprochement />
    </BackOfficeLayout>
  );
};

export default JournalSaisie;
