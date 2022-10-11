import React from "react";
import Container from "@mui/material/Container";
import {
	Button,
	Grid,
	Stack,
	Divider,
	Typography,
	styled,
	Box,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Link from "next/link";
import useBasePath from "../../hooks/useBasePath";
import KeyValue from "../shared/keyValue";

const FichierComptable = () => {
	const basePath = useBasePath();
	return (
		<Container maxWidth="xl">
			<Stack>
				<SectionNavigation
					direction="row"
					justifyContent="space-between"
					mb={1}
				>
					<Link href={"/fichier/create"}>
						<Button variant="contained" startIcon={<Add />} size="small">
							Créer fichier comptable
						</Button>
					</Link>
					<Typography variant="h4">Fichiers comptables</Typography>
				</SectionNavigation>
				<Divider />
			</Stack>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<SectionBtnAdd>
						<Typography variant="h4" color="black" mb={2}>
							Créer nouveau fichier
						</Typography>
						<ImageBtnAdd src={`${basePath}/images/add.png`} />
					</SectionBtnAdd>
				</Grid>
				<Grid item xs={12} md={6} mb={3}>
					<SectionDetails>
						<SectionDetailsTitle>
							<Typography variant="h5" color="black">
								Fichier comptable Madagasikara Voakajy
							</Typography>
						</SectionDetailsTitle>
						<SectionDetailsContent spacing={2} my={2}>
							<KeyValue
								keyName="Numéro d’Identification Fiscale (NIF)"
								value="1227373"
							/>
							<KeyValue keyName="Numéro Statistique (STAT)" value="676798" />
							<KeyValue
								keyName="RCS (Registre du Commerce et de Société)"
								value="167282"
							/>
							<KeyValue keyName="Pays" value="Madagascar" />
							<KeyValue keyName="Téléphone" value="0342866256" />
							<KeyValue keyName="Adresse" value="Andraisoro" />
							<KeyValue keyName="Email" value="email@gmail.com" />
							<KeyValue keyName="Code Postale" value="10000" />
						</SectionDetailsContent>
						<SectionDetailsFooter spacing={2} direction="row">
							<Link href={"/configurations/fichier-comptable/1"}>
								<Button variant="text" color="primary">
									Détails
								</Button>
							</Link>
							<Link href={"/fichier/1/annee-exercice"}>
								<Button variant="contained" color="primary">
									Ouvrir
								</Button>
							</Link>
						</SectionDetailsFooter>
					</SectionDetails>
				</Grid>
			</Grid>
		</Container>
	);
};

export default FichierComptable;

const SectionBtnAdd = styled(Box)(({ theme }) => ({
	padding: 30,
	marginBlock: 15,
	background: theme.palette.common.white,
	borderRadius: 20,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}));

const SectionDetails = styled(Box)(({ theme }) => ({
	padding: 30,
	marginBlock: 15,
	background: theme.palette.common.white,
	borderRadius: 20,
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
}));

const SectionDetailsTitle = styled(Box)(({ theme }) => ({}));
const SectionDetailsContent = styled(Stack)(({ theme }) => ({}));
const SectionDetailsFooter = styled(Stack)(({ theme }) => ({}));

const ImageBtnAdd = styled("img")(({ theme, src }) => ({
	src: `url(${src})`,
	width: "40%",
	height: "40%",
	marginBottom: theme.spacing(2),
}));

export const SectionNavigation = styled(Stack)(({}) => ({}));
