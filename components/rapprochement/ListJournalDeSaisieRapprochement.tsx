import { Button, Container, Stack, styled, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Data, { Order } from "./table/type-variable";
import { rows } from "./table/constante";
import EnhancedTableToolbar from "./table/EnhancedTableToolbar";
import EnhancedTableHead from "./table/EnhancedTableHead";
import { getComparator, stableSort } from "./table/function";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Add from "@mui/icons-material/Add";
import {
	defaultLabelDisplayedRows,
	labelRowsPerPage,
} from "../../config/table.config";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useRouter } from "next/router";

const ListJournalDeSaisieRapprochement = () => {
	const [order, setOrder] = React.useState<Order>("asc");
	const [orderBy, setOrderBy] = React.useState<keyof Data>("date");
	const [selected, setSelected] = React.useState<readonly string[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const router = useRouter();
	const { idfile }: any = router.query;

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.date);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
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

	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};

	const isSelected = (name: string) => selected.indexOf(name) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Container maxWidth="xl">
			<SectionNavigation direction="row" justifyContent="space-between" mb={2}>
				<Stack direction="row" spacing={2}>
					<Link href={`/${idfile}/open-file`}>
						<Button variant="text" color="info" startIcon={<ArrowBackIcon />}>
							retour
						</Button>
					</Link>
					<Link href={`/${idfile}/open-file/rapprochement/add`}>
						<Button variant="contained" startIcon={<Add />}>
							Ajouter
						</Button>
					</Link>
					<Link href={`/${idfile}/open-file/rapprochement/compte`}>
						<Button
							variant="text"
							color="warning"
							startIcon={<CompareArrowsIcon />}
						>
							Rapprochement
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
					Journal de saisie
				</Typography>
			</SectionNavigation>
			<SectionTable>
				<Box sx={{ width: "100%" }}>
					<Paper sx={{ width: "100%", mb: 2 }}>
						<EnhancedTableToolbar numSelected={selected.length} />
						<TableContainer>
							<Table
								sx={{ minWidth: 750 }}
								aria-labelledby="tableTitle"
								size={"medium"}
							>
								<EnhancedTableHead
									numSelected={selected.length}
									order={order}
									orderBy={orderBy}
									onSelectAllClick={handleSelectAllClick}
									onRequestSort={handleRequestSort}
									rowCount={rows.length}
								/>
								<TableBody>
									{/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
									{stableSort(rows, getComparator(order, orderBy))
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((row, index) => {
											const isItemSelected = isSelected(row.date);
											const labelId = `enhanced-table-checkbox-${index}`;

											return (
												<TableRow
													hover
													//   onClick={(event) => handleClick(event, row.reference)}
													role="checkbox"
													aria-checked={isItemSelected}
													tabIndex={-1}
													key={row.date}
													selected={isItemSelected}
												>
													<TableCell id={labelId} scope="row" padding="normal">
														{row.date}
													</TableCell>
													<TableCell align="right">{row.numero}</TableCell>
													<TableCell align="right">{row.numeroPiece}</TableCell>
													<TableCell align="right">{row.journal}</TableCell>
													<TableCell align="right">{row.total}</TableCell>

													<TableCell align="right">
														<BtnActionContainer
															direction="row"
															justifyContent="center"
														>
															<IconButton
																color="primary"
																aria-label="Modifier"
																component="span"
															>
																<EditIcon />
															</IconButton>
															<IconButton
																color="warning"
																aria-label="Supprimer"
																component="span"
																size="small"
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
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							labelRowsPerPage={labelRowsPerPage}
							labelDisplayedRows={defaultLabelDisplayedRows}
						/>
					</Paper>
					{/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
				</Box>
			</SectionTable>
		</Container>
	);
};

export default ListJournalDeSaisieRapprochement;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
