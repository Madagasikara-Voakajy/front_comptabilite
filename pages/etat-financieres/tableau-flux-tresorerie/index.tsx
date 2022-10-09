import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import TableauFluxTresorerie from "../../../components/etatFinanciers/tableauFluxTresorerie/TableauFluxTresorerie";

const CashFlowStatement = () => {
	return (
		<BackOfficeLayout>
			<TableauFluxTresorerie />
		</BackOfficeLayout>
	);
};

export default CashFlowStatement;
