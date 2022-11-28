import React from "react";
import BackOfficeLayout from "../../../../layouts/backOffice";
import ListAmortissement from "../../../../components/amortissement/ListAmortissement";

const JournalSaisieRapprochement = () => {
  return (
    <BackOfficeLayout>
      <ListAmortissement />
    </BackOfficeLayout>
  );
};

export default JournalSaisieRapprochement;
