import React from "react";
import BackOfficeLayout from "../../layouts/backOffice";
import ListJournaux from "../../components/journaleDeSaisie/ListJournaux";

const JournalSaisie = () => {
	return (
		<BackOfficeLayout>
			<ListJournaux />
		</BackOfficeLayout>
	);
};

export default JournalSaisie;
