import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import TableauVariationCapitauxPropres from "../../../components/etatFinanciers/tableauVariationCapitauxPropres/TableauVariationCapitauxPropres";

const index = () => {
  return (
    <BackOfficeLayout>
      <TableauVariationCapitauxPropres />
    </BackOfficeLayout>
  );
};

export default index;
