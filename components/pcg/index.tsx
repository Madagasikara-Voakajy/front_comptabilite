import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import PcgForm from "./organism/PcgForm";
import PcgList from "./organism/PcgList";

const PcgGlobalComponent = () => {
	return (
		<Container maxWidth="xl">
			<Stack>
				<Stack direction="row" justifyContent="space-between" mb={1}>
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="flex-start"
						spacing={2}
					>
						<Link href={`/`}>
							<Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
								Retour
							</Button>
						</Link>
					</Stack>
					<Typography variant="h4">Compte</Typography>
				</Stack>
				<Divider />
			</Stack>
			<Grid container spacing={2} py={2}>
				<Grid item xs={12} md={4}>
					<PcgForm />
				</Grid>
				<Grid item xs={12} md={8} mb={3}>
					<PcgList />
				</Grid>
			</Grid>
		</Container>
	);
};

export default PcgGlobalComponent;
