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
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  defaultLabelDisplayedRows,
  getComparator,
  labelRowsPerPage,
  Order,
} from "../../../config/table.config";
import { useRouter } from "next/router";
import { useConfirm } from "material-ui-confirm";
import useFetchCurrencyListe from "./hooks/useFetchCurrency";
import { deleteCurrency, editCurrency } from "../../../redux/features/currency";
import CurrencyTableToolbar from "./organism/table/CurrencyToolbar";
import CurrencyTableHeader from "./organism/table/CurrencyTableHeader";
import { CurrencyItem } from "../../../redux/features/currency/currencySlice.interface";



const ListCurrency = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch: any = useAppDispatch();
  const { currencyListe } = useAppSelector((state) => state.currency);
  const router = useRouter();
  const confirm = useConfirm();

  const fetchCurrencyListe = useFetchCurrencyListe();

  useEffect(() => {
    fetchCurrencyListe();
  }, [router.query]);

  const handleClickEdit = async (id: any) => {
    router.push(`/configurations/devise/${id}/edit`);
  };

  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer Fournisseur",
      description: "Voulez-vous vraiment supprimer ce fournisseur ?",
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
        await dispatch(deleteCurrency({ id }));
        fetchCurrencyListe();
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
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - currencyListe.length)
      : 0;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Link href="/configurations/devise/add">
          <Button variant="contained" size="small" startIcon={<Add />}>
            Créer
          </Button>
        </Link>
        <Typography variant="h4">Devise</Typography>
      </SectionNavigation>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <CurrencyTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <CurrencyTableHeader />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
                  {currencyListe
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: CurrencyItem, index: any) => {
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
                            {row.iso}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.symbol}
                          </TableCell>
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
                            {row.decimalPlaces}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.symbolPosition}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.thousandSeparator}
                          </TableCell>

                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="center"
                            >
                                <IconButton
                                  color="primary"
                                  aria-label="Modifier"
                                  component="span"
                                  onClick={() => handleClickEdit(row.id)}
                                >
                                  <EditIcon />
                                </IconButton>
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
              count={currencyListe.length}
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

export default ListCurrency;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));