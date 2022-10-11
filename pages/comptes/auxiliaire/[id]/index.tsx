import React from "react";
import BackOfficeLayout from "../../../../layouts/backOffice";
import AfficherAuxiliaire from "../../../../components/compte/auxiliaire/afficher/AfficherAuxiliaire";

const AuxilaryAccountDetails = () => {
	return (
		<BackOfficeLayout>
			<AfficherAuxiliaire />
		</BackOfficeLayout>
	);
};

export default AuxilaryAccountDetails;
