import { InfoSharp } from "@mui/icons-material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Stack, styled, Typography, Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../../../../hooks/reduxHooks";
import { createPcg, updatePcg } from "../../../../../../redux/features/pcg";
import { cancelEdit } from "../../../../../../redux/features/pcg/pcgSlice";
import OSTextField from "../../../../../shared/input/OSTextField";
import { PcgGlobalItem } from "../../../table/pcg.interface";
import useFetchPlanComptable from "../hooks/useFetchPlanComptable";

type PcgGlobalProps = { pcgGlob: PcgGlobalItem };

const PlanComptableForm = ({ pcgGlob }: any) => {
	const { isEditing, pcg } = useAppSelector((state) => state.pcg);
	const dispatch = useAppDispatch();
	const fetchListPcg = useFetchPlanComptable();

	const handleSubmint = async (values: any) => {
		try {
			if (isEditing) {
				delete values.id;
				await dispatch(
					updatePcg({
						id: pcg.id!,
						pcg: values,
					})
				);
			} else {
				await dispatch(createPcg(values));
			}
			fetchListPcg();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<FormContainer>
			<Formik
				enableReinitialize
				initialValues={
					isEditing
						? pcg
						: {
								code: "",
								name: "",
								// pcgGlobalId: pcgGlob.id!
						  }
				}
				validationSchema={Yup.object({
					code: Yup.string().min(6).required("Champ obligatoire"),
					name: Yup.string().required("Champ obligatoire"),
				})}
				onSubmit={async (value: any, action) => {
					await handleSubmint(value);
					action.resetForm();
				}}
			>
				{(formikProps) => (
					<Form>
						<Stack spacing={4}>
							<Stack>
								<Typography variant="h5" color="initial">
									Formulaire (Créer/Modifier)
								</Typography>
								<Stack justifyContent="left" flexDirection="row">
									<InfoOutlined fontSize="small" />
									Chaque compte créer ici sera liée au {pcgGlob?.name}
								</Stack>
							</Stack>
							<OSTextField label="Code" name="code"></OSTextField>
							<OSTextField label="Nom" name="name"></OSTextField>
							<BtnContainer
								direction="row"
								spacing={2}
								justifyContent="flex-end"
							>
								<Button
									size="medium"
									color="warning"
									variant="text"
									onClick={() => {
										formikProps.resetForm();
										dispatch(cancelEdit());
									}}
								>
									Annuler
								</Button>
								<Button
									type="submit"
									size="medium"
									color="primary"
									variant="contained"
								>
									Enregistrer
								</Button>
							</BtnContainer>
						</Stack>
					</Form>
				)}
			</Formik>
		</FormContainer>
	);
};

const BtnContainer = styled(Stack)(({ theme }) => ({}));

const FormContainer = styled("div")(({ theme }) => ({
	borderRadius: 20,
	padding: theme.spacing(2),
	marginBlock: theme.spacing(2),
	background: "#fff",
}));

export default PlanComptableForm;
