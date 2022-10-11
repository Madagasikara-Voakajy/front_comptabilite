import { Box, Stack, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import React from "react";
import { Visibility } from "@mui/icons-material";
import Link from "next/link";

const OneAnneeExercice = ({ annee, dateDebut, dateFin }: any) => {
	return (
		<OneContainer>
			<Typography variant="h4" color="initial">
				{annee}
			</Typography>
			<Stack>
				<Typography variant="body2" color="gray">
					{`${dateDebut} au ${dateFin}`}
				</Typography>
			</Stack>
			<Stack direction={"row"} justifyContent={"center"}>
				<Link href={"/journals-de-saisie"}>
					<IconButton
						aria-label="open"
						component="button"
						sx={{ color: "#ddd" }}
					>
						<Visibility />
					</IconButton>
				</Link>
				<IconButton aria-label="edit" component="button" sx={{ color: "#ddd" }}>
					<Edit />
				</IconButton>
				<IconButton
					aria-label="delete"
					component="button"
					sx={{ color: "#ddd" }}
				>
					<Delete />
				</IconButton>
			</Stack>
		</OneContainer>
	);
};

export default OneAnneeExercice;

const OneContainer = styled(Box)(({ theme }) => ({
	background: "white",
	textAlign: "center",
	borderRadius: 20,
	paddingBlock: theme.spacing(2),
}));
