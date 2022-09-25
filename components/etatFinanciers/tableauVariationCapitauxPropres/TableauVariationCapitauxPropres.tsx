import React from "react";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
  Box,
} from "@mui/material";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";
import KeyValue from "../../shared/keyValue";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { createData } from "./table/tableauVariationCapitauxPropres.function";
import { columns } from "./table/tableauVariationCapitauxPropres.constant";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const TableauVariationCapitauxPropres = () => {
  const rows = [
    createData("Solde au 31 décembre N-2", "-", "-", "-", "-", "-"),
  ];

  const rowsTwo = [
    createData("Changement de méthode comptable", "-", "-", "-", "-", "-"),
    createData("Correction d'erreurs", "-", "-", "-", "-", "-"),
    createData("Autres produits & charges", "-", "-", "-", "-", "-"),
    createData("Affectation du résultat N-2", "-", "-", "-", "-", "-"),
    createData(
      "Opérations en capital",
      "60,000,000.00",
      "-",
      "-",
      "-",
      "60,000,000.00"
    ),
    createData(
      "Résultat net exercice N-1",
      "-",
      "-",
      "-",
      "1,000,000.00",
      "1,000,000.00"
    ),
    createData(
      "Solde au 31 décembre N-2",
      "60,000,000.00",
      "-",
      "-",
      "-",
      "1,000,000.00"
    ),
  ];

  const rowsThree = [
    createData("Changement de méthode comptable", "-", "-", "-", "-", "-"),
    createData("Correction d'erreurs", "-", "-", "-", "-", "-"),
    createData("Autres produits & charges", "-", "-", "-", "-", "-"),
    createData(
      "Affectation du résultat N-1",
      "-",
      "1,000,000.00",
      "-",
      "(1,000,000.00)",
      "-"
    ),
    createData("Opérations en capital", "-", "-", "-", "-", "-"),
    createData(
      "Résultat net exercice N",
      "-",
      "-",
      "-",
      "(2,000,000.00)",
      "(2,000,000.00)"
    ),
    createData(
      "Solde au 31 décembre N",
      "60,000,000.00",
      "1,000,000.00",
      "-",
      "(2,000,000.00)",
      "59,000,000.00"
    ),
  ];

  const [age, setAge] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Stack direction={"row"} spacing={4}>
            <Link href="/">
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Button
              color="info"
              variant="text"
              startIcon={<FileDownloadIcon />}
            >
              Exporter
            </Button>
          </Stack>
          <Typography variant="h4">Tableau de flux de trésorerie</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <BodySection>
        <BodySectionHeader>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Période du" value={"1/1/2022"} />
              <KeyValue keyName="au" value={"31/12/2022"} />
            </Grid>
            <Grid item xs={12} md={4}>
              <KeyValue keyName="Unité monétaire" value={"Ariary"} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">GRANT</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="GRANT"
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={10}>GRANT</MenuItem>
                  <MenuItem value={20}>GRANT</MenuItem>
                  <MenuItem value={30}>GRANT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </BodySectionHeader>
        <BodySectionTabs>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={6}> </TableCell>
                </TableRow>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.identifiant}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={6}> </TableCell>
                </TableRow>
                {rowsTwo.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.identifiant}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow hover tabIndex={-1}>
                  <TableCell colSpan={6}> </TableCell>
                </TableRow>
                {rowsThree.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.identifiant}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
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

export default TableauVariationCapitauxPropres;

export const SectionNavigation = styled(Stack)(({}) => ({}));
export const BodySection = styled(Box)(({}) => ({
  borderRadius: 20,
  backgroundColor: "white",
  padding: "16px 32px",
  marginBlock: 16,
}));

export const BodySectionHeader = styled(Box)(({ theme }) => ({
  marginBlock: 15,
}));

export const BodySectionTabs = styled(Box)(({ theme }) => ({}));
