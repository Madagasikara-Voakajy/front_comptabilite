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
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  deleteGrant,
  createGrant,
  editGrant,
  getGrant,
  getGrantList,
  updateGrant,
} from "../../../redux/features/grant";
import {
  defaultLabelDisplayedRows,
  getComparator,
  labelRowsPerPage,
  Order,
} from "../../../config/table.config";
import { useRouter } from "next/router";
import useFetchGrants from "./hooks/useFetchGrants";
import { useConfirm } from "material-ui-confirm";
import GrantTableHead from "./table/GrantTableHead";
import GrantTableToolbar from "./table/GrantTableToolbar";
import { cancelEdit } from "../../../redux/features/grant/grantSlice";
import { GrantItem } from "../../../redux/features/grant/grant.interface";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ListGrant = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch: any = useAppDispatch();
  const { grantList } = useAppSelector((state) => state.grant);
  const router = useRouter();
  const { idfile }: any = router.query;
  const confirm = useConfirm();

  const fetchGrantList = useFetchGrants();

  useEffect(() => {
    fetchGrantList();
  }, [router.query]);

  const handleClickEdit = async (id: any) => {
    await dispatch(editGrant({ id }));
  };

  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer ce grant ",
      description: "Voulez-vous vraiment supprimer ce grant ?",
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
        await dispatch(deleteGrant({ id }));
        fetchGrantList();
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - grantList.length) : 0;

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={2}
        >
          <Stack direction="row" spacing={2}>
            <Link href={`/${idfile}/open-file`}>
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Link href={`/${idfile}/open-file/configurations/grant/add`}>
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
          <Typography variant="h4">GRANTS</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <GrantTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <GrantTableHead />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {grantList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: GrantItem, index: any) => {
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
                            {row?.postAnalytic.name}
                          </TableCell>

                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="right"
                            >
                              <Link
                                href={`/${idfile}/open-file/configurations/grant/${row.id}/ligne-budgetaire`}
                              >
                                <Button
                                  variant="outlined"
                                  color="accent"
                                  // onClick={handleOpen}
                                  startIcon={<Add />}
                                  size="small"
                                >
                                  Ligne budgetaire
                                </Button>
                              </Link>

                              <Link
                                href={`/${idfile}/open-file/configurations/grant/${row.id}/edit`}
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
              count={grantList.length}
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

export default ListGrant;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
const SectionTable = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
