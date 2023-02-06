import React from "react";
import FormFichierComptable from "../../components/fichier/add/FormFichierComptable";
import BackOfficeLayout from "../../layouts/backOffice";

const index = () => {
	return (
		<BackOfficeLayout>
			<FormFichierComptable />
		</BackOfficeLayout>
	);
};

export default index;
