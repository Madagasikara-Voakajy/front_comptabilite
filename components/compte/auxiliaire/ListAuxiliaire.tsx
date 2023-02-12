import { styled } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Add from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { deleteAuxiliairyAccount, editAuxiliairyAccount } from '../../../redux/features/auxiliairyAccount';
import { defaultLabelDisplayedRows, labelRowsPerPage } from '../../../config/table.config';
import { useRouter } from 'next/router';
import useFetchAuxiliaire from './hooks/useFetchAuxiliaire';
import { useConfirm } from 'material-ui-confirm';
import AuxiliaireTableHead from './table/AuxiliaireTableHead';
import AuxiliaireTableToolbar from './table/AuxiliaireTableToolbar';
import { cancelEdit } from '../../../redux/features/auxiliairyAccount/auxiliairyAccountSlice';
import { AuxiliairyAccountItem } from '../../../redux/features/auxiliairyAccount/auxiliairyAccount.interface';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ListAuxiliaire = () => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch: any = useAppDispatch();
  const { auxiliaryAccountList } = useAppSelector((state) => state.auxiliaryAccount);
  const router = useRouter();
  const { idfile }: any = router.query;
  const confirm = useConfirm();

  const fetchAuxiliairyAccountList = useFetchAuxiliaire();

  useEffect(() => {
    fetchAuxiliairyAccountList();
  }, [router.query]);

  const handleClickEdit = async (id: any) => {
    await dispatch(editAuxiliairyAccount({ id }));
  };

  const handleclickDelete = async (id: any) => {
    confirm({
      title: 'Supprimer ce compte ',
      description: 'Voulez-vous vraiment supprimer ce compte ?',
      cancellationText: 'Annuler',
      confirmationText: 'Supprimer',
      cancellationButtonProps: {
        color: 'warning',
      },
      confirmationButtonProps: {
        color: 'error',
      },
    })
      .then(async () => {
        await dispatch(deleteAuxiliairyAccount({ id }));
        fetchAuxiliairyAccountList();
      })
      .catch(() => {});
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function getColorStatus(status: any) {
    switch (status) {
      case 'PENDING':
        return 'info';
      case 'APPROVED':
        return 'primary';
      case 'REJECTED':
        return 'warning';
      default:
        break;
    }
  }
  function getTextStatus(status: any) {
    switch (status) {
      case 'PENDING':
        return 'En_attente';
      case 'APPROVED':
        return 'Validé';
      case 'REJECTED':
        return 'Refusé';
      default:
        break;
    }
  }

  const handleAdd = () => {
    dispatch(cancelEdit());
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - auxiliaryAccountList.length) : 0;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Stack direction="row" spacing={2}>
          <Link href={`/${idfile}/open-file`}>
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Link href={`/${idfile}/open-file/comptes/auxiliaire/add`}>
            <Button onClick={handleAdd} variant="contained" size="small" startIcon={<Add />}>
              Créer
            </Button>
          </Link>
        </Stack>
        <Typography variant="h4">Compte Auxiliaire</Typography>
      </SectionNavigation>
      <SectionTable>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <AuxiliaireTableToolbar />
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
                <AuxiliaireTableHead />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {auxiliaryAccountList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: AuxiliairyAccountItem, index: any) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow hover tabIndex={-1} key={row.id}>
                          <TableCell component="th" id={labelId} scope="row" padding="normal" align="left">
                            {row.name}
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="normal" align="left">
                            {row?.email}
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="normal" align="left">
                            {row.phone}
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="normal" align="left">
                            {row.activity}
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="normal" align="left">
                            {row.address}
                          </TableCell>
                          <TableCell align="right">
                            <BtnActionContainer direction="row" justifyContent="right">
                              <Link href={`/${idfile}/open-file/comptes/auxiliaire/${row.id}`}>
                                <IconButton color="accent" aria-label="Details" component="span" size="small">
                                  <VisibilityIcon />
                                </IconButton>
                              </Link>
                              <Link href={`/${idfile}/open-file/comptes/auxiliaire/${row.id}/edit`}>
                                <IconButton color="primary" aria-label="Modifier" size="small" component="span">
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
              count={auxiliaryAccountList.length}
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
const SectionTable = styled('div')(({ theme }) => ({}));
