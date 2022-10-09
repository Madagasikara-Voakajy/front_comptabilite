import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import ListAuxiliaire from "../../../components/compte/auxiliaire/ListAuxiliaire";

const AuxilaryAccount = () => {
	return (
		<BackOfficeLayout>
			<ListAuxiliaire />
		</BackOfficeLayout>
	);
};

export default AuxilaryAccount;
