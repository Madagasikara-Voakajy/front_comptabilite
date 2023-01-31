import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import PlanComptableList from "./planComptable/organism/table/PlanComptableList";
import { useRouter } from "next/router";
import PlanComptableForm from "./planComptable/organism/PlanComptableForm";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getPcgGlobal } from "../../../../redux/features/pcgGlobal";

const PcgGlobalDetailsComponent = () => {
	const router = useRouter();

	const { id } = router.query;

	const { pcg } = useAppSelector((state) => state.pcgGlobal);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(getPcgGlobal({ id: String(id) }));
	}, [id]);

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
						<Link href={`/pcg`}>
							<Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
								Retour
							</Button>
						</Link>
					</Stack>
					<Typography variant="h4">Details PCG {pcg.name}</Typography>
				</Stack>
				<Divider />
			</Stack>
			<Grid container spacing={2} py={2}>
				<Grid item xs={12} md={4}>
					<PlanComptableForm pcgGlob={pcg} />
				</Grid>
				<Grid item xs={12} md={8} mb={3}>
					<PlanComptableList />
				</Grid>
			</Grid>
		</Container>
	);
};

export default PcgGlobalDetailsComponent;
