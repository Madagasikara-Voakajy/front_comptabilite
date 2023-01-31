import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Button, Typography, TextField, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UploadFileIcon from "@mui/icons-material/UploadFile";
//import XLSX from 'xlsx';
import { read, utils, writeFileXLSX } from "xlsx";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { createPcg } from "../../../../../../redux/features/pcg";
import { PcgItem } from "../../../../../../redux/features/pcg/pcg.interface";
import useFetchPlanComptable from "../hooks/useFetchPlanComptable";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Skeleton from "@mui/material/Skeleton";
import CancelIcon from "@mui/icons-material/Cancel";

const ImportPgc = () => {
	const [colDefs, setColDefs] = useState();
	const [data, setData] = useState<any>();
	const [open, setOpen] = React.useState(false);
	const dispatch = useAppDispatch();
	const fetchListPcg = useFetchPlanComptable();
	const [isLoading, setIsLoading] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const convertToJson = (headers: any, data: any) => {
		const rows: any = [];
		data.forEach((row: any) => {
			let rowData: any = {};
			row.forEach((element: any, index: any) => {
				rowData[headers[index]] = element;
				//rowData = element;
			});
			rows.push(rowData);
		});
		return rows;
	};

	const importExcel = (e: any) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			//parse data;
			const bstr = event.target?.result;
			const workBook = read(bstr, { type: "binary" });
			//const workBook=XLSX.read(bstr,{type:"binary"});
			//get first sheet
			const workSheetName = workBook.SheetNames[0];
			const workSheet = workBook.Sheets[workSheetName];

			// //convert to array
			const fileData = utils.sheet_to_json(workSheet, { header: 1 });
			const headers = fileData[0];
			// const heads = headers.map(head =>({title:head,field:head}));
			// setData(heads);

			fileData.splice(0, 1);
			//console.log(convertToJson(headers,fileData));
			setData(convertToJson(headers, fileData));
		};

		reader.readAsBinaryString(file);
	};

	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	const handleClickSave = async () => {
		setIsLoading(true);
		await Promise.all(
			data?.map(async (item: any, i: number) => {
				if (
					item["PLAN COMPTABLE GÉNÉRAL 2005"] !== undefined &&
					item["PLAN COMPTABLE GÉNÉRAL 2005"].length > 0
				) {
					await sleep(2000 * i);
					await dispatch(
						createPcg({
							code: item["undefined"].toString(),
							name: item["PLAN COMPTABLE GÉNÉRAL 2005"].toString(),
						})
					);
				}
			})
		);
		fetchListPcg();
		setOpen(false);
		setIsLoading(false);
	};

	return (
		<Container maxWidth="xl">
			<Button
				onClick={handleClickOpen}
				variant="contained"
				size="small"
				startIcon={<UploadFileIcon />}
			>
				Import PGC
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Importation PGC</DialogTitle>
				<DialogContent>
					<Typography variant="body1">
						Choisir un fichier(*csc,xlsx) :{" "}
					</Typography>
					{isLoading ? (
						<Typography variant="h2" color="initial">
							<Skeleton animation="wave" />
						</Typography>
					) : (
						<Box>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								type="file"
								fullWidth
								variant="outlined"
								onChange={importExcel}
							/>
						</Box>
					)}
				</DialogContent>
				<DialogActions>
					<LoadingButton
						loading={isLoading}
						variant="outlined"
						color="warning"
						onClick={handleClose}
						loadingPosition="start"
						startIcon={<CancelIcon />}
					>
						Annuler
					</LoadingButton>
					<Button></Button>
					<LoadingButton
						loading={isLoading}
						variant="contained"
						onClick={handleClickSave}
						loadingPosition="start"
						startIcon={<SaveIcon />}
					>
						Enregistrer
					</LoadingButton>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default ImportPgc;
