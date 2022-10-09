import {
	Button,
	Container,
	styled,
	Typography,
	Stack,
	Divider,
	TextField,
	Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close, Edit, Event } from "@mui/icons-material";
import { SectionNavigation } from "../FichierComptable";
import { NavigationContainer } from "../add/FormFichierComptable";
import KeyValue from "../../../shared/keyValue";

const DetailsFichierComptable = () => {
	return (
		<Container maxWidth="xl">
			<Stack>
				<SectionNavigation
					direction="row"
					justifyContent="space-between"
					mb={1}
				>
					<Stack flexDirection={"row"}>
						<Link href="/configurations/fichier-comptable">
							<Button color="info" variant="text" startIcon={<ArrowBack />}>
								Retour
							</Button>
						</Link>
						<Button
							variant="contained"
							color="primary"
							size="small"
							startIcon={<Edit />}
							sx={{ marginInline: 3 }}
							type="submit"
						>
							Modifier
						</Button>
					</Stack>
					<Typography variant="h4">Détails fichier comptable</Typography>
				</SectionNavigation>
				<Divider />
			</Stack>
			<SectionDetails>
				<Grid container spacing={6}>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Raison Sociale" value="Madagasikara Voakajy" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Activité" value="Association" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue
							keyName="Numéro d’Identification Fiscale (NIF)"
							value="1227373"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Numéro Statistique (STAT)" value="676798" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue
							keyName="RCS (Registre du Commerce et de Société)"
							value="167282"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Pays" value="Madagascar" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Téléphone" value="0342866256" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Adresse" value="Andraisoro" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Email" value="email@gmail.com" />
					</Grid>
					<Grid item xs={12} md={6}>
						<KeyValue keyName="Code Postale" value="Code Postale" />
					</Grid>
				</Grid>
			</SectionDetails>
		</Container>
	);
};

export default DetailsFichierComptable;

const SectionDetails = styled(Box)(({ theme }) => ({
	padding: 30,
	marginBlock: 15,
	background: theme.palette.common.white,
	borderRadius: 20,
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
}));
