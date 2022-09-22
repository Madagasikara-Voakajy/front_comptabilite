import React from "react";
import BackOfficeLayout from "../../../../layouts/backOffice";
import AfficherAuxiliaire from "../../../../components/compte/auxiliaire/afficher/AfficherAuxiliaire";

const index = () => {
  return (
    <BackOfficeLayout>
      <AfficherAuxiliaire />
    </BackOfficeLayout>
  );
};

export default index;
