import { styled } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SettingsInputComponent from "@mui/icons-material/SettingsInputComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
	defaultLabelDisplayedRows,
	labelRowsPerPage,
} from "../../../config/table.config";
import { useRouter } from "next/router";
import { useConfirm } from "material-ui-confirm";
import PcgTableToolbar from "./table/PcgTableToolbar";
import PcgTableHead from "./table/PcgTableHead";
import useFetchPcgGlobal from "./hooks/useFetchPcgGlobal";
import {
	deletePcgGlobal,
	editPcgGlobal,
} from "../../../redux/features/pcgGlobal";
import { PcgGlobalItem } from "../../../redux/features/pcgGlobal/pcg.interface";

const PcgList = () => {
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const dispatch: any = useAppDispatch();
	const { pcgList } = useAppSelector((state) => state.pcgGlobal);
	const router = useRouter();
	const confirm = useConfirm();

	const fetchPcgGlobalList = useFetchPcgGlobal();

	useEffect(() => {
		fetchPcgGlobalList();
	}, [router.query]);

	const handleClickEdit = async (id: any) => {
		await dispatch(editPcgGlobal({ id }));
	};

	const handleclickDelete = async (id: any) => {
		confirm({
			title: "Supprimer ce ligne ",
			description: "Voulez-vous vraiment supprimer ce ligne ?",
			cancellationText: "Annuler",
			confirmationText: "Supprimer",
			cancellationButtonProps: {
				color: "warning",
			},
			confirmationButtonProps: {
				color: "error",
			},
		})
			.then(async () => {
				await dispatch(deletePcgGlobal({ id }));
				fetchPcgGlobalList();
			})
			.catch(() => {});
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pcgList.length) : 0;

	return (
		<SectionTable>
			<Box sx={{ width: "100%" }}>
				<Paper sx={{ width: "100%", mb: 2 }}>
					<PcgTableToolbar />
					<TableContainer>
						<Table
							sx={{ minWidth: 750 }}
							aria-labelledby="tableTitle"
							size="small"
						>
							<PcgTableHead />
							<TableBody>
								{pcgList
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row: PcgGlobalItem, index: any) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow hover tabIndex={-1} key={row.id}>
												<TableCell
													component="th"
													id={labelId}
													scope="row"
													padding="normal"
													align="left"
												>
													{row.name}
												</TableCell>
												<TableCell
													component="th"
													id={labelId}
													scope="row"
													padding="normal"
													align="left"
												>
													{row?.description}
												</TableCell>

												<TableCell align="right">
													<BtnActionContainer
														direction="row"
														justifyContent="right"
													>
														<Link href={`/pcg/${row.id}/details`}>
															<IconButton
																color="accent"
																aria-label="Details"
																component="span"
																size="small"
															>
																<SettingsInputComponent />
															</IconButton>
														</Link>
														<IconButton
															color="primary"
															aria-label="Modifier"
															size="small"
															component="span"
															onClick={() => handleClickEdit(row.id)}
														>
															<Edit />
														</IconButton>
														<IconButton
															color="warning"
															aria-label="Supprimer"
															size="small"
															component="span"
															onClick={() => {
																handleclickDelete(row.id);
															}}
														>
															<DeleteIcon />
														</IconButton>
													</BtnActionContainer>
												</TableCell>
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow
										style={{
											height: (dense ? 33 : 53) * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={pcgList.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						labelDisplayedRows={defaultLabelDisplayedRows}
						labelRowsPerPage={labelRowsPerPage}
					/>
				</Paper>
			</Box>
		</SectionTable>
	);
};

export default PcgList;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
