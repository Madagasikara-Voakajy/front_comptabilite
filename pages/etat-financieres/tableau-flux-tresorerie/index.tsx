import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import TableauFluxTresorerie from "../../../components/etatFinanciers/tableauFluxTresorerie/TableauFluxTresorerie";

const index = () => {
  return (
    <BackOfficeLayout>
      <TableauFluxTresorerie />
    </BackOfficeLayout>
  );
};

export default index;
