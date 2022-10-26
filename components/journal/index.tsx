import {
  Button,
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { defaultLabelDisplayedRows,getComparator, labelRowsPerPage } from "../../config/table.config";
import { useRouter } from "next/router";
import { useConfirm } from "material-ui-confirm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useFetchJournalListe from "./hooks/useFetchJournalListe";
import { JournalItem } from "../../redux/features/journal/journalSlice.interface";
import JournalTableHeader from "./organism/table/JournalTableHeader";
import JournalTableToolbar from "./organism/table/JournalToolbar";
import { Visibility } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { deletejournal } from "../../redux/features/journal";



const ListJournal = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch: any = useAppDispatch();
  const { journalListe } = useAppSelector((state) => state.journal);
  const router = useRouter();
  const confirm = useConfirm();

  const fetchJournalListe = useFetchJournalListe();

  useEffect(() => {
    fetchJournalListe();
  }, [router.query]);


  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer Journal",
      description: "Voulez-vous vraiment supprimer ce Journal ?",
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
        await dispatch(deletejournal({ id }));
        fetchJournalListe();
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - journalListe.length) : 0;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Stack direction="row" spacing={2}>
          <Link href="/">
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Link href="/journal/add">
            <Button variant="contained" size="small" startIcon={<Add />}>
              Créer
            </Button>
          </Link>
        </Stack>
        <Typography variant="h4">journal</Typography>
      </SectionNavigation>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            {/* <CurrencyTableToolbar /> */}
            <JournalTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                {/* <CurrencyTableHeader /> */}
                <JournalTableHeader />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
                  {journalListe
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: JournalItem, index: any) => {
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
                            {row.code}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.fileId}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.typeId}
                          </TableCell>
                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="center"
                            >
															<Link href="/journal/pieceComptable">
																<Button
																	sx={{ mr: 1 }}
																	color="accent"
																	variant="outlined"
																	size="small"
																>
																	<AddIcon />
																	Piéce Comptable
																</Button>
															</Link>
															<Link href={`/journal/${row.id}`}>
																<IconButton
																	color="info"
																	aria-label="Modifier"
																	size="small"
																	component="span"
																>
																	<Visibility />
																</IconButton>
															</Link>
                              <IconButton
                                color="warning"
                                aria-label="Supprimer"
                                component="span"
                                onClick={() => handleclickDelete(row.id)}
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
              count={journalListe.length}
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

export default ListJournal;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
