import { Container, Stack, styled, TablePagination } from "@mui/material";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../../../../../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import useFetchComptaJournalItemListe from "../../../../hooks/useFetchComptaJournalItemListe";
import { ComptaJournalItem } from "../../../../../../../redux/features/journalItem/journalItem.interface";
import ComptaJournalItemTableHeader from "./OrderSupplyAndConsumableTableHeader";
import {
  defaultLabelDisplayedRows,
  labelRowsPerPage,
} from "../../../../../../../config/table.config";
import SectionFormTwoAuxilliaire from "../../../../SectionFormTwo";
// import SectionFormTwo from "../../../../SectionFormTwo";

export const Date = [
  {
    value: "date",
    label: "12/11/2022",
  },
];
export const Libelle = [
  {
    value: "libelle",
    label: "achat imprimante",
  },
];

const OneListTest = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const router = useRouter();
  const { journalItemList } = useAppSelector((state) => state.journalItem);

  const fetchComptaJournalItemListe = useFetchComptaJournalItemListe();

  useEffect(() => {
    fetchComptaJournalItemListe();
  }, [router.query]);

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
      ? Math.max(0, (1 + page) * rowsPerPage - journalItemList.length)
      : 0;

  return (
    <Container maxWidth="xl">
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <SectionFormTwoAuxilliaire />
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <ComptaJournalItemTableHeader />

                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
                  {journalItemList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: ComptaJournalItem, index: any) => {
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
                            {
                              Date.find(
                                (date: any) => date.values === row?.date
                              )?.label
                            }
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.journalEntry?.reference}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.currency?.iso}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.checkNumber}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.chartOfAccount?.name}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.auxiliaryAccount?.name}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {
                              Libelle.find(
                                (libelle: any) =>
                                  libelle.values === row?.libelle
                              )?.label
                            }
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
              count={journalItemList.length}
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

export default OneListTest;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
const InputContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  borderBottom: "1px solid #e0e0e0",
}));
