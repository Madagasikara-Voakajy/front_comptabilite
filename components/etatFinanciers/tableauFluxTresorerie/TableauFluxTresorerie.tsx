import React, { Fragment } from 'react';
import { Button, Grid, Stack, Divider, Typography, styled, Autocomplete, TextField, Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Link from 'next/link';
import KeyValue from '../../shared/keyValue';
import { createData } from './table/tableauFluxTresorerie.function';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { columns } from './table/tableauFluxTresorerie.constant';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useFetchGrants from '../../configurations/grant/hooks/useFetchGrants';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { useRouter } from 'next/router';

const TableauFluxTresorerie = () => {
  const router = useRouter();
  const { idfile }: any = router.query;
  const { grantList } = useAppSelector((state) => state.grant);
  const fetchGrants = useFetchGrants();
  React.useEffect(() => {
    fetchGrants();
  }, []);
  const rows = [
    createData("Flux de trésorerie liés à l'activité", '', ''),
    createData("Résultat net de l'exercice", '(2,000,000.00)', '1,000,000.00'),
    createData('Ajustements pour :', '-', '-'),
    createData('- Amortissements et provisions', '5,000,000.00', '-'),
    createData('- Variation des impôts différés', '-', '-'),
    createData('- Variation des stocks', '(2,000,000.00)', '-'),
    createData('- Variation des clients et autres créances', '(3,000,000.00)', '-'),
    createData('- Variation des fournisseurs et autres dettes', '15,000,000.00', '-'),
    createData("- Plus ou moins values de cession, nettes d'impôts", '-', '-'),
    createData("Flux de trésorerie générés par l'activité (A)", '13,000,000.00', '1,000,000.00'),
  ];

  const rowsTwo = [
    createData("Flux de trésorerie liés aux opérations d'investissement", '-', '-'),
    createData("Décaissements sur acquisitions d'immobilisations", '(15,000,000.00)', '-'),
    createData("Encaissements sur cessions d'immobilisations", '-', '-'),
    createData("Flux de trésorerie liés aux opérations d'investissement (B)", ' (15,000,000.00)', '-'),
  ];

  const rowsThree = [
    createData('Flux de trésorerie liés aux activités de financement', '-', '-'),
    createData('Dividendes versés aux actionnaires', '-', '-'),
    createData('Augmentation de capital en numéraire', '-', '60,000,000.00'),
    createData("Emission d'emprunt", '-', '-'),
    createData("Remboursement d'emprunt", '-', '-'),
    createData('Flux de trésorerie liés aux opérations de financement (C)', '-', '60,000,000.00'),
  ];

  const rowsFour = [createData('Variation de trésorerie de la période (A+B+C)', '(2,000,000.00)', '61,000,000.00')];

  const rowsFive = [
    createData("Trésorerie d'ouverture", '61,000,000.00', '-'),
    createData('Trésorerie de clôture', '59,000,000.00', '61,000,000.00'),
    createData('Incidence des variations de cours des devises', '-', '-'),
    createData('Variation de trésorerie', '(2,000,000.00)', '61,000,000.00'),
  ];

  const [age, setAge] = React.useState('');

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation direction="row" justifyContent="space-between" mb={1}>
          <Stack direction={'row'} spacing={4}>
            <Link href={`/${idfile}/open-file`}>
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Button color="info" variant="text" startIcon={<FileDownloadIcon />}>
              Excel
            </Button>
            <Button color="info" variant="text" startIcon={<FileDownloadIcon />}>
              Pdf
            </Button>
          </Stack>
          <Typography variant="h4">Tableau de flux de trésorerie</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <BodySection>
        <BodySectionHeader>
          <Grid container spacing={2} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Période du" value={'1/1/2022'} />
              <KeyValue keyName="au" value={'31/12/2022'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Unité monétaire" value={'Ariary'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={grantList.map((option) => option.code as string)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <React.Fragment key={index}>
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                      </React.Fragment>
                    ))
                  }
                  renderInput={(params) => <TextField {...params} variant="filled" label="GRANT" placeholder="GRANT" />}
                />
              </FormControl>
            </Grid>
          </Grid>
        </BodySectionHeader>
        <BodySectionTabs>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">Solde 2022 (N)</TableCell>
                  <TableCell align="center">Solde 2021 (N - 1)</TableCell>
                </TableRow>
                {/* <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow> */}
              </TableHead>
              <TableBody>
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={3}> </TableCell>
                </TableRow>
                {rows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.capitaux_prop_passif}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={3}> </TableCell>
                </TableRow>
                {rowsTwo.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.capitaux_prop_passif}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={3}> </TableCell>
                </TableRow>
                {rowsThree.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.capitaux_prop_passif}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={5}> </TableCell>
                </TableRow>
                {rowsFour.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.capitaux_prop_passif}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={5}> </TableCell>
                </TableRow>
                {rowsFive.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.capitaux_prop_passif}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </BodySectionTabs>
      </BodySection>
    </Container>
  );
};

export default TableauFluxTresorerie;

export const SectionNavigation = styled(Stack)(({}) => ({}));
export const BodySection = styled(Box)(({}) => ({
  borderRadius: 20,
  backgroundColor: 'white',
  padding: '16px 32px',
  marginBlock: 16,
}));

export const BodySectionHeader = styled(Box)(({ theme }) => ({
  marginBlock: 15,
}));

export const BodySectionTabs = styled(Box)(({ theme }) => ({}));
