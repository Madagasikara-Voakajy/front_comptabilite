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
// import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import { deleteRecruitmentRequest } from "../../redux/features/recruitmentRequest";
// import { editRecruitmentRequest } from "../../redux/features/recruitmentRequest";
// import { RecruitmentRequestItem } from "../../redux/features/recruitmentRequest/recruitmentRequestSlice.interface";
import {
  defaultLabelDisplayedRows,
  getComparator,
  labelRowsPerPage,
  Order,
} from "../../../config/table.config";
import { useRouter } from "next/router";
// import useFetchRecruitmentRequest from "./hooks/useFetchRecruitmentRequest";
import { useConfirm } from "material-ui-confirm";
import AuxiliaireTableHead from "./table/AuxiliaireTableHead";
import AuxiliaireTableToolbar from "./table/AuxiliaireTableToolbar";
// import { cancelEdit } from "../../redux/features/recruitmentRequest/recruitmentRequestSlice";

const ListAuxiliaire = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const auxiliaireListe: any = [
    {
      id: "1",
      Raison_sociale_ou_Nom: "Rasseta Toyota",
      Numéro_de_compte_Générale: "403",
      Type: "Fournisseurs",
      Activité: "Vendeur d voiture",
      Adresse: "Antananarivo",
    },
    {
      id: "2",
      Raison_sociale_ou_Nom: "Orange",
      Numéro_de_compte_Générale: "411",
      Type: "Clients",
      Activité: "Opérateur internet",
      Adresse: "Antananarivo",
    },
    {
      id: "3",
      Raison_sociale_ou_Nom: "Hairun Technology",
      Numéro_de_compte_Générale: "425",
      Type: "Salariés ",
      Activité: "Concepteur Digitale",
      Adresse: "Antananarivo",
    },
    {
      id: "4",
      Raison_sociale_ou_Nom: "Atelier MIHAJA",
      Numéro_de_compte_Générale: "411",
      Type: "Fournisseurs",
      Activité: "Concepteur Bâtiment",
      Adresse: "Antananarivo",
    },
    {
      id: "5",
      Raison_sociale_ou_Nom: "TELMA",
      Numéro_de_compte_Générale: "xxx",
      Type: "Autre",
      Activité: "Opérateur Téléphonique",
      Adresse: "Antananarivo",
    },
  ];
  // const dispatch: any = useAppDispatch();
  // const { recruitmentRequestList } = useAppSelector(
  //   (state) => state.recruitmentRequest
  // );
  const router = useRouter();
  const confirm = useConfirm();

  // const fetchRecruitmentRequestList = useFetchRecruitmentRequest();

  // useEffect(() => {
  //   fetchRecruitmentRequestList();
  // }, [router.query]);

  const handleClickEdit = async (id: any) => {
    // await dispatch(editRecruitmentRequest({ id }));
  };

  const handleclickDelete = async (id: any) => {
    confirm({
      title: "Supprimer le demande",
      description: "Voulez-vous vraiment supprimer cette demande ?",
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
        // await dispatch(deleteRecruitmentRequest({ id }));
        // fetchRecruitmentRequestList();
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

  function getColorStatus(status: any) {
    switch (status) {
      case "PENDING":
        return "info";
      case "APPROVED":
        return "primary";
      case "REJECTED":
        return "warning";
      default:
        break;
    }
  }
  function getTextStatus(status: any) {
    switch (status) {
      case "PENDING":
        return "En_attente";
      case "APPROVED":
        return "Validé";
      case "REJECTED":
        return "Refusé";
      default:
        break;
    }
  }

  const handleAdd = () => {
    // dispatch(cancelEdit());
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - auxiliaireListe.length)
      : 0;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Link href="/auxiliaire/add">
          <Button
            onClick={handleAdd}
            variant="contained"
            size="small"
            startIcon={<Add />}
          >
            Créer
          </Button>
        </Link>
        <Typography variant="h4">Compte Auxiliaire</Typography>
      </SectionNavigation>
      <SectionTable>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <AuxiliaireTableToolbar />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <AuxiliaireTableHead />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {auxiliaireListe
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
                            {row.Raison_sociale_ou_Nom}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row?.Numéro_de_compte_Générale}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.Type}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.Activité}
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                            align="left"
                          >
                            {row.Adresse}
                          </TableCell>
                          <TableCell align="right">
                            <BtnActionContainer
                              direction="row"
                              justifyContent="right"
                            >
                              <Link href="/offre/creer">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="info"
                                  startIcon={<Add />}
                                  sx={{ mr: 2, display: "none" }}
                                >
                                  Offre
                                </Button>
                              </Link>
                              <Link href={`demande/${row.id}`}>
                                <IconButton
                                  color="accent"
                                  aria-label="Details"
                                  component="span"
                                  size="small"
                                >
                                  <VisibilityIcon />
                                </IconButton>
                              </Link>
                              <Link href={`/demande/${row.id}/edit`}>
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
              count={auxiliaireListe.length}
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

export default ListAuxiliaire;

export const BtnActionContainer = styled(Stack)(({ theme }) => ({}));
export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
const SectionTable = styled("div")(({ theme }) => ({}));
