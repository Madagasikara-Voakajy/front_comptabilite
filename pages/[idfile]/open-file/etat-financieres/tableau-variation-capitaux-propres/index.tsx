import React from "react";
import BackOfficeLayout from "../../../../../layouts/backOffice";
import TableauVariationCapitauxPropres from "../../../../../components/etatFinanciers/tableauVariationCapitauxPropres/TableauVariationCapitauxPropres";

const ChangeInEquityTable = () => {
  return (
    <BackOfficeLayout>
      <TableauVariationCapitauxPropres />
    </BackOfficeLayout>
  );
};

export default ChangeInEquityTable;
