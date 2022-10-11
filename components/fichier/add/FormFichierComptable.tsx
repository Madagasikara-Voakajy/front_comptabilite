import {
	Button,
	Container,
	styled,
	Typography,
	Stack,
	Divider,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";

const FormFichierComptable = () => {
	return (
		<Container maxWidth="xl">
			<NavigationContainer>
				<SectionNavigation>
					<Stack flexDirection={"row"}>
						<Link href="/fichier">
							<Button color="info" variant="text" startIcon={<ArrowBack />}>
								Retour
							</Button>
						</Link>
						<Button
							variant="contained"
							color="primary"
							size="small"
							startIcon={<Check />}
							sx={{ marginInline: 3 }}
							type="submit"
						>
							Enregistrer
						</Button>
						<Button
							variant="text"
							color="warning"
							size="small"
							startIcon={<Close />}
						>
							Annuler
						</Button>
					</Stack>
					<Typography variant="h4"> Formulaire fichier comptable </Typography>
				</SectionNavigation>
				<Divider />
			</NavigationContainer>
			<FormContainer spacing={2}>
				<CustomStack direction={"row"} spacing={2}>
					<TextField fullWidth id="positionProfile" label="Raison sociale" />
					<TextField id="projectName" label="Activité" fullWidth />
				</CustomStack>
				<CustomStack direction={"row"} spacing={2}>
					<TextField
						fullWidth
						id="positionProfile"
						label="Numéro d’Identification Fiscale (NIF)"
					/>
					<TextField
						id="projectName"
						label="Numéro Statistique (STAT)"
						fullWidth
					/>
				</CustomStack>
				<CustomStack direction={"row"} spacing={2}>
					<TextField
						fullWidth
						id="positionProfile"
						label="RCS (Registre du Commerce et de Société)"
					/>
					<TextField id="projectName" label="Pays" fullWidth />
				</CustomStack>
				<CustomStack direction={"row"} spacing={2}>
					<TextField fullWidth id="positionProfile" label="Téléphone" />
					<TextField id="projectName" label="Adresse" fullWidth />
				</CustomStack>
				<CustomStack direction={"row"} spacing={2}>
					<TextField fullWidth id="positionProfile" label="Email" />
					<TextField id="projectName" label="Code Postale" fullWidth />
				</CustomStack>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">GRANT</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Type de congé"
					>
						<MenuItem value={11}>Année en cheval </MenuItem>
						<MenuItem value={11}>Année </MenuItem>
					</Select>
				</FormControl>
			</FormContainer>
		</Container>
	);
};

export default FormFichierComptable;

export const CustomStack = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flexWrap: "wrap",
	},
}));

export const FormContainer = styled(Stack)(({ theme }) => ({
	padding: 30,
	// border: "1px solid #E0E0E0",
	borderRadius: 20,
	background: "#fff",
}));

export const NavigationContainer = styled(Stack)(({ theme }) => ({
	flexDirection: "column",
	marginBottom: theme.spacing(2),
	flex: 1,
	width: "100%",
}));

export const SectionNavigation = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	justifyContent: "space-between",
	paddingBottom: theme.spacing(1),
	marginBottom: theme.spacing(1),
}));
