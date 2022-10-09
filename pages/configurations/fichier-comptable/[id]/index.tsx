import React from "react";
import BackOfficeLayout from "../../../../layouts/backOffice";
import DetailsFichierComptable from "../../../../components/configurations/fichier-comptable/details/DetailsFichierComptable";

const DetailAccountFile = () => {
	return (
		<BackOfficeLayout>
			<DetailsFichierComptable />
		</BackOfficeLayout>
	);
};

export default DetailAccountFile;
