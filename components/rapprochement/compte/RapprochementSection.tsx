import React from "react";
import Container from "@mui/material/Container";
import {
	Button,
	Stack,
	Divider,
	Grid,
	Typography,
	styled,
	Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Add from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SectionRight from "./sectionRight/Right";
import SectionLeft from "./sectionLeft/Left";
import { useRouter } from "next/router";

const SectionRapprochement = () => {
	const router = useRouter();
	const { idfile }: any = router.query;
	return (
		<Container maxWidth="xl">
			<SectionNavigation direction="row" justifyContent="space-between" mb={2}>
				<Stack direction="row" spacing={2}>
					<Link href={`/${idfile}/open-file/rapprochement`}>
						<Button variant="text" color="info" startIcon={<ArrowBackIcon />}>
							retour
						</Button>
					</Link>

					<Link href={`/${idfile}/open-file/rapprochement/etat`}>
						<Button variant="text" startIcon={<Add />}>
							Générer Etat De Rapprochement
						</Button>
					</Link>
					<Button
						color="info"
						variant="contained"
						startIcon={<FileDownloadIcon />}
					>
						Excel
					</Button>
					<Button
						color="info"
						variant="contained"
						startIcon={<FileDownloadIcon />}
					>
						Pdf
					</Button>
				</Stack>
				<Typography variant="h4" color="GrayText">
					Rapprochement
				</Typography>
			</SectionNavigation>
			<Divider />
			<BodySection>
				{/* <BodySectionHeader> */}
				<Grid container spacing={1}>
					<SectionNavigation
						direction="row"
						justifyContent="space-between"
						sx={{ marginInline: 2 }}
					>
						<Stack flexDirection="row">
							<Typography variant="h4" color="skyblue">
								Compte 512 001
							</Typography>
							<Grid>
								{/* <TextField
                  id="outlined-basic"
                  label="Date début"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-basic"
                  label="Date de Fin"
                  variant="outlined"
                  size="small"
                /> */}
							</Grid>
						</Stack>
					</SectionNavigation>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<SectionLeft />
						</Grid>
						<Grid item xs={12} md={6}>
							<SectionRight />
						</Grid>
					</Grid>
				</Grid>
				{/* </BodySectionHeader> */}
			</BodySection>
		</Container>
	);
};

export default SectionRapprochement;

export const SectionNavigation = styled(Stack)(({ theme }) => ({}));

const TableSection = styled("div")(({ theme }) => ({
	paddingBlock: theme.spacing(2),
	paddingLeft: theme.spacing(2),
}));
export const BodySection = styled(Box)(({}) => ({
	borderRadius: 20,
	backgroundColor: "white",
	padding: "16px 32px",
	marginBlock: 16,
}));
export const BodySectionHeader = styled(Box)(({ theme }) => ({
	marginBlock: 15,
}));
