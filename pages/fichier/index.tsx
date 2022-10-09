import React from "react";
import BackOfficeLayout from "../../layouts/backOffice";
import FichierComptable from "../../components/fichier/FichierComptable";

const AccountingFile = () => {
	return (
		<BackOfficeLayout>
			<FichierComptable />
		</BackOfficeLayout>
	);
};

export default AccountingFile;
