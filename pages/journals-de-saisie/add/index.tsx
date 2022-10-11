import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import { Container } from "@mui/material";
import AddJournal from "../../../components/journaleDeSaisie/add/addJournal";

const Index = () => {
	return (
		<BackOfficeLayout>
			<AddJournal />
		</BackOfficeLayout>
	);
};

export default Index;
