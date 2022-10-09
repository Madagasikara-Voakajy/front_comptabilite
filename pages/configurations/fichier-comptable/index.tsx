import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../layouts/backOffice";
import FichierComptable from "../../../components/configurations/fichier-comptable/FichierComptable";

const AccountingFile = () => {
	return (
		<BackOfficeLayout>
			<FichierComptable />
		</BackOfficeLayout>
	);
};

export default AccountingFile;
