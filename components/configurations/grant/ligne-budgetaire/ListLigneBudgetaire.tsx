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
import Divider from "@mui/material/Divider";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import Add from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  deleteBudgetLine,
  createBudgetLine,
  editBudgetLine,
  getBudgetLine,
  getBudgetLineList,
  updateBudgetLine,
} from "../../../../redux/features/budgetLine";
import {
  defaultLabelDisplayedRows,
  getComparator,
  labelRowsPerPage,
  Order,
} from "../../../../config/table.config";
import { useRouter } from "next/router";
import useFetchLigneBudgetaire from "./hooks/useFetchLigneBudgetaire";
import { useConfirm } from "material-ui-confirm";
import LigneBudgetaireTableHead from "./table/LigneBudgetaireTableHead";
import LigneBudgetaireTableToolbar from "./table/LigneBudgetaireTableToolbar";
import { cancelEdit } from "../../../../redux/features/budgetLine/budgetLineSlice";
import { BudgetLineItem } from "../../../../redux/features/budgetLine/budgetLine.interface";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ListLigneBudgetaire = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch: any = useAppDispatch();
  const { budgetLineList } = useAppSelector((state) => state.budgetLine);
  const router = useRouter();
  const { id }: any = router.query;
  const confirm = useConfirm();

  const fetchLigneBudgetaireList = useFetchLigneBudgetaire();

  useEffect(() => {
    fetchLigneBudgetaireList();
  }, [router.query]);

  const handleClickEdit = async (id: any) => {
    await dispatch(editBudgetLine({ id }));
  };

  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer ce ligne budgetaire ",
      description: "Voulez-vous vraiment supprimer ce ligne budgetaire ?",
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
        await dispatch(deleteBudgetLine({ id }));
        fetchLigneBudgetaireList();
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

  const handleAdd = () => {
    dispatch(cancelEdit());
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - budgetLineList.length)
      : 0;

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={2}
        >
          <Stack direction="row" spacing={2}>
            <Link href="/">
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Link
              href={
                id
                  ? `/configurations/grant/${id}/ligne-budgetaire/add`
                  : `/configurations/ligne-budgetaire/add`
              }
            >
              <Button
                onClick={handleAdd}
                variant="contained"
                size="small"
                startIcon={<Add />}
              >
                Créer
              </Button>
            </Link>
          </Stack>
          <Typography variant="h4">Ligne budgetaire</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <LigneBudgetaireTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <LigneBudgetaireTableHead />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {budgetLineList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: BudgetLineItem, index: any) => {
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
                            {row.code}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row?.grant?.code}
                          </TableCell>

                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="right"
                            >
                              <Link
                                href={
                                  id
                                    ? `/configurations/grant/${id}/ligne-budgetaire/${row.id}/edit`
                                    : `/configurations/ligne-budgetaire/${row.id}/edit`
                                }
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
              count={budgetLineList.length}
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
    </Container>
  );
};

export default ListLigneBudgetaire;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
const SectionTable = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
