import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Check from "@mui/icons-material/Check";
import { styled } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import OSTextField from "../../shared/input/OSTextField";
import {
	createPcgGlobal,
	updatePcgGlobal,
} from "../../../redux/features/pcgGlobal";

const AuxiliaireForm = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { isEditing, pcg } = useAppSelector((state) => state.pcgGlobal);

	console.log("pcg", isEditing, pcg);

	const handleSubmit = async (values: any) => {
		try {
			if (isEditing) {
				dispatch(updatePcgGlobal({ id: pcg?.id!, pcg: values }));
			} else {
				dispatch(createPcgGlobal(values));
			}
			router.push(`/pcg`);
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<Formik
			enableReinitialize
			initialValues={{
				name: isEditing ? pcg.name : "",
				description: isEditing ? pcg.description : "",
			}}
			validationSchema={Yup.object({
				name: Yup.string().required("Champs obligatoire"),
				description: Yup.string(),
			})}
			onSubmit={(value: any, action: any) => {
				handleSubmit(value);
				action.resetForm();
			}}
		>
			{(formikProps) => {
				return (
					<Form>
						<FormContainer spacing={2}>
							<Typography variant="h5">Créer/modifier PCG</Typography>
							<OSTextField id="name" label="Nom" name="name" />
							<OSTextField
								id="description"
								label="Description"
								name="description"
							/>{" "}
							<Stack flexDirection={"row"} justifyContent="right">
								<Button
									variant="text"
									color="warning"
									size="medium"
									onClick={(action: any) => {
										action.resetForm();
									}}
								>
									Annuler
								</Button>
								<Button
									variant="contained"
									color="primary"
									size="medium"
									startIcon={<Check />}
									sx={{ marginLeft: 3 }}
									type="submit"
								>
									Enregistrer
								</Button>
							</Stack>
						</FormContainer>
					</Form>
				);
			}}
		</Formik>
	);
};

export default AuxiliaireForm;

export const CustomStack = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flexWrap: "wrap",
	},
}));

const FormContainer = styled(Stack)(({ theme }) => ({
	paddingInline: theme.spacing(4),
	paddingBlock: theme.spacing(2),
	borderRadius: 20,
	background: "#fff",
}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
	flexDirection: "column",
	marginBottom: theme.spacing(2),
	flex: 1,
	width: "100%",
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	justifyContent: "space-between",
	paddingBottom: "5px",
}));
