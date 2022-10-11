import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import LinkOutlined from "@mui/icons-material/LinkOutlined";
import Info from "@mui/icons-material/Info";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

const HomeComptabilite = () => {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} lg={4}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<LinkContainer>
								<Typography sx={{ mb: 2 }} variant="h5" color="initial">
									Gérer fichier comptable
								</Typography>
								<Typography color="GrayText" mb={2}>
									<InfoOutlined fontSize="inherit" /> Pour gérer les fichiers,
									journals et les pièces comptables, accéder à la page fichier
									comptable
								</Typography>
								<Link href="/fichier">
									<Button
										variant="contained"
										color="primary"
										startIcon={<LinkOutlined />}
									>
										fichier comptable
									</Button>
								</Link>
							</LinkContainer>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={12} lg={8}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<LinkContainer>
								<Typography sx={{ mb: 2 }} variant="h5" color="initial">
									Configuration de base
								</Typography>
								<Box>
									<Link href="/comptes/general">
										<Button variant="text" color="info">
											Compte générale (PCG)
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/comptes/auxiliaire">
										<Button variant="text" color="info">
											Compte Auxiliaire (compte tiers)
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/configurations/devise">
										<Button variant="text" color="info">
											Liste des dévises
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/configurations/type-journal">
										<Button variant="text" color="info">
											Types de journals
										</Button>
									</Link>
								</Box>
								{/* <Box>
							<Button variant="text" color="info">
								Types de mode de paiements
							</Button>
						</Box> */}
							</LinkContainer>
						</Grid>

						<Grid item xs={12} md={6}>
							<LinkContainer>
								<Typography sx={{ mb: 2 }} variant="h5" color="initial">
									Configuration états financières
								</Typography>
								<Box>
									<Link href="/etat-financieres/bilan">
										<Button variant="text" color="info">
											Bilan passif/actif
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/etat-financieres/compte-resultat">
										<Button variant="text" color="info">
											Compte de résiltats par nature / par fonction
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/etat-financieres/tableau-flux-tresorerie">
										<Button variant="text" color="info">
											Tableau de flux de trésorerie
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/etat-financieres/tableau-variation-capitaux-propres">
										<Button variant="text" color="info">
											Variation des capitaux propres
										</Button>
									</Link>
								</Box>
							</LinkContainer>
						</Grid>

						<Grid item xs={12} md={6}>
							<LinkContainer>
								<Typography sx={{ mb: 2 }} variant="h5" color="initial">
									Gérer GRANT
								</Typography>
								<Box>
									<Link href="/configurations/post-analytique">
										<Button variant="text" color="info">
											Tous les postes Analytiques
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/configurations/grant">
										<Button variant="text" color="info">
											Tous les GRANTS
										</Button>
									</Link>
								</Box>
								<Box>
									<Link href="/configurations/grant/1/ligne-budgetaire">
										<Button variant="text" color="info">
											Toustes les lignes budgétaires
										</Button>
									</Link>
								</Box>
							</LinkContainer>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomeComptabilite;

const LinkContainer = styled(Box)(({ theme }) => ({
	padding: 30,
	borderRadius: 20,
	background: "#fff",
}));
