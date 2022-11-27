import React from "react";
import ListTableauAmorti from "../../../../../components/amortissement/TableauAmorti/ListTableauAmorti";
import BackOfficeLayout from "../../../../../layouts/backOffice";

const JournalSaisieRapprochement = () => {
  return (
    <BackOfficeLayout>
      <ListTableauAmorti />
    </BackOfficeLayout>
  );
};

export default JournalSaisieRapprochement;
