import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../layouts/backOffice";
import ListGrant from "../../../components/configurations/grant/ListGrant";

const index = () => {
	return (
		<BackOfficeLayout>
			<Container maxWidth="xl">
				<ListGrant />
			</Container>
		</BackOfficeLayout>
	);
};

export default index;
