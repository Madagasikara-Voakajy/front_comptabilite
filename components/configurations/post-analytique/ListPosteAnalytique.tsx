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
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import Add from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
// import {
//   deleteAuxiliairyAccount,
//   createAuxiliairyAccount,
//   editAuxiliairyAccount,
//   getAuxiliairyAccount,
//   getAuxiliairyAccountList,
//   updateAuxiliairyAccount,
// } from "../../../redux/features/auxiliairyAccount";
import {
  defaultLabelDisplayedRows,
  getComparator,
  labelRowsPerPage,
  Order,
} from "../../../config/table.config";
import { useRouter } from "next/router";
import useFetchPostAnalytique from "./hooks/useFetchPostAnalytique";
import { useConfirm } from "material-ui-confirm";
import PosteAnalytiqueTableHead from "./table/PosteAnalytiqueTableHead";
import POsteAnalytiqueTableToolbar from "./table/PosteAnalytiqueTableToolbar";
// import { cancelEdit } from "../../../redux/features/auxiliairyAccount/auxiliairyAccountSlice";
// import { AuxiliairyAccountItem } from "../../../redux/features/auxiliairyAccount/auxiliairyAccount.interface";

const ListPosteAnalytique = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch: any = useAppDispatch();
  const listPosteAnlaytique: any = [];
  // const { listPosteAnlaytique } = useAppSelector(
  //   (state) => state.auxiliaryAccount
  // );
  const router = useRouter();
  const confirm = useConfirm();

  const fetchPosteAnlaitiqueList = useFetchPostAnalytique();

  useEffect(() => {
    fetchPosteAnlaitiqueList();
  }, [router.query]);

  const handleClickEdit = async (id: any) => {
    // await dispatch(editAuxiliairyAccount({ id }));
  };

  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer ce poste analytique ",
      description: "Voulez-vous vraiment supprimer ce analytique ?",
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
        // await dispatch(deleteAuxiliairyAccount({ id }));
        fetchPosteAnlaitiqueList();
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

  // function getColorStatus(status: any) {
  //   switch (status) {
  //     case "PENDING":
  //       return "info";
  //     case "APPROVED":
  //       return "primary";
  //     case "REJECTED":
  //       return "warning";
  //     default:
  //       break;
  //   }
  // }
  // function getTextStatus(status: any) {
  //   switch (status) {
  //     case "PENDING":
  //       return "En_attente";
  //     case "APPROVED":
  //       return "Validé";
  //     case "REJECTED":
  //       return "Refusé";
  //     default:
  //       break;
  //   }
  // }

  const handleAdd = () => {
    // dispatch(cancelEdit());
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - listPosteAnlaytique.length)
      : 0;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Box>
          <Link href="/configurations/grant/add">
            <Button
              onClick={handleAdd}
              variant="contained"
              size="small"
              startIcon={<Add />}
            >
              Créer
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="accent"
            // onClick={handleOpen}
            startIcon={<Add />}
            size="small"
          >
            Gerer Grant
          </Button>
        </Box>
        <Typography variant="h4">Post analytique</Typography>
      </SectionNavigation>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <POsteAnalytiqueTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <PosteAnalytiqueTableHead />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {listPosteAnlaytique
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any, index: any) => {
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
                            {row.numero_code}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row?.nom}
                          </TableCell>

                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="right"
                            >
                              <Link
                                href={`/configurations/grant/${row.id}/edit`}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="Modifier"
                                  size="small"
                                  component="span"
                                >
                                  <EditIcon />
                                </IconButton>
                              </Link>
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
              count={listPosteAnlaytique.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelDisplayedRows={defaultLabelDisplayedRows}
              labelRowsPerPage={labelRowsPerPage}
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

export default ListPosteAnalytique;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
