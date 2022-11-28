import React from "react";
import ListAmortissement from "../../components/amortissement/ListAmortissement";
import BackOfficeLayout from "../../layouts/backOffice";

const JournalSaisieRapprochement = () => {
  return (
    <BackOfficeLayout>
      <ListAmortissement />
    </BackOfficeLayout>
  );
};

export default JournalSaisieRapprochement;
