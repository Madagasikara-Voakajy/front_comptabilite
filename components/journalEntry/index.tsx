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
import {
  defaultLabelDisplayedRows,
  getComparator,
  labelRowsPerPage,
} from "../../config/table.config";
import { useRouter } from "next/router";
import { useConfirm } from "material-ui-confirm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Visibility } from "@mui/icons-material";
import useFetchJournalEntryListe from "./hooks/useFetchJournalListe";
import {
  deleteJournalEntry,
  getJournalEntry,
} from "../../redux/features/journal-entry";
import { JournalEntryItem } from "../../redux/features/journal-entry/JournalEntrySlice.interface";
import JournalEntryTableToolbar from "./organism/table/JournalToolbar";
import JournalEntryTableHeader from "./organism/table/JournalTableHeader";
import Moment from "react-moment";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import useFetchJournalListe from "../journal/hooks/useFetchJournalListe";
import useFetchFiscalListe from "../anneeExercice/hooks/useFetchFiscalListe";

const ListJournalEntry = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useAppDispatch();
  const { journalEntryListe } = useAppSelector((state) => state.journalEntry);
  const router = useRouter();
  const confirm = useConfirm();

  const idFile: any = router.query.id;
  const { idfile }: any = router.query;

  const fetchJournalEntryListe = useFetchJournalEntryListe();

  useEffect(() => {
    fetchJournalEntryListe();
  }, [router.query]);

  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer Journal de saisie",
      description: "Voulez-vous vraiment supprimer ce Journal de saisie ?",
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
        await dispatch(deleteJournalEntry({ id }));
        fetchJournalEntryListe();
      })
      .catch(() => {});
  };

  const handleClickEdit = async (id: any) => {
    router.push(`/fichier/${idFile}/journal-entry/${id}/edit`);
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
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - journalEntryListe.length)
      : 0;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Stack direction="row" spacing={2}>
          <Link href="/fichier">
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Link href={`/${idfile}/journal-entry/add`}>
            <Button variant="contained" size="small" startIcon={<Add />}>
              Ajouter
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
        <Typography variant="h4">journal</Typography>
      </SectionNavigation>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <JournalEntryTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <JournalEntryTableHeader />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
                  {journalEntryListe
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: JournalEntryItem, index: any) => {
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
                            {row.number}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            <Moment format="DD/MM/YYYY">{row.date}</Moment>
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.reference}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row?.journal?.name}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row?.fiscalYear?.year}
                            {/* { row.fiscal?.year} */}
                          </TableCell>
                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="center"
                            >
                              <Link
                                href={`/${idfile}/journal-entry/${row.id}/edit`}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="Modifier"
                                  component="span"
                                  // onClick={() => handleClickEdit(row.id)}
                                >
                                  <EditIcon />
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
              count={journalEntryListe.length}
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

export default ListJournalEntry;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
