import React from "react";
import BackOfficeLayout from "../../../../../../../../layouts/backOffice";
import DetailsJournal from "../../../../../../../../components/journal/[id]/DetailsJournal";

const index = () => {
  return (
    <BackOfficeLayout>
      <DetailsJournal />
    </BackOfficeLayout>
  );
};

export default index;
