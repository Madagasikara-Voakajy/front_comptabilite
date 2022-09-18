import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { createData } from "./table/nature.function";
import { columns } from "./table/nature.constant";

const Nature = () => {
  const rows = [
    createData("Chiffre d'affaires", "3,000,000.00", "1,000,000.00"),
    createData("Production stockée", "-", "-"),
    createData("Production immobilisée", "-", "-"),
  ];

  const rowsTwo = [
    createData("Achats consommés", "-", "-"),
    createData("Services extérieurs et autres consommations", "-", "-"),
    createData("II-  Consommation de l'exercice", "-", "-"),
  ];

  const rowsThree = [
    createData("Subvention d'exploitation", "-", "-"),
    createData("Impôts, taxes et versements assimilés", "-", "-"),
    createData("IV- EXCEDENT BRUT D'EXPLOITATION", "-", "-"),
  ];

  const rowsFour = [
    createData("Autres produits opérationnels", "-", "-"),
    createData("Autres charges opérationnelles", "-", "-"),
    createData(
      "Dotations aux amortissements, aux provisions et pertes de valeur",
      " (5,000,000.00)",
      "-"
    ),
    createData("Reprise sur provisions et pertes de valeurs", "-", "-"),
    createData("V- RESULTAT  OPERATIONNEL", "(2,000,000.00)", "1,000,000.00"),
  ];

  const rowsFive = [
    createData("Charges financières", "-", "-"),
    createData("VI-   RESULTAT  FINANCIER", "-", "-"),
    createData(
      " VII- RESULTAT AVANT IMPOTS (V + VI)",
      "(2,000,000.00)",
      "1,000,000.00"
    ),
  ];

  const rowsSix = [
    createData("Impôts exigibles sur résultats", "-", "-"),
    createData("Impôts exigibles sur résultats", "-", "-"),
    createData(
      "TOTAL DES CHARGES DES ACTIVITES ORDINAIRES",
      "3,000,000.00",
      "1,000,000.00"
    ),
    createData(
      "TOTAL DES CHARGES DES ACTIVITES ORDINAIRES",
      "(5,000,000.00)",
      "-"
    ),
  ];

  const rowsSeven = [
    createData("Autres produits opérationnels", "-", "-"),
    createData("Autres charges opérationnelles", "-", "-"),
    createData(
      "Dotations aux amortissements, aux provisions et pertes de valeur",
      " (5,000,000.00)",
      "-"
    ),
    createData("Reprise sur provisions et pertes de valeurs", "-", "-"),
    createData("V- RESULTAT  OPERATIONNEL", "(2,000,000.00)", "1,000,000.00"),
  ];

  const rowsEight = [
    createData(
      "VIII- RESULTAT NET DES ACTIVITES ORDINAIRES",
      "(2,000,000.00)",
      "1,000,000.00"
    ),
  ];

  const rowsNine = [
    createData("Eléments extraordinaires (produits) - à préciser", "-", "-"),
    createData("Eléments extraordinaires (charges) - à préciser", "-", "-"),
    createData("IX- RESULTAT  EXTRAORDINAIRE", " (5,000,000.00)", "-"),
    createData(
      "X- RESULTAT NET DE L'EXERCICE",
      "(2,000,000.00)",
      "1,000,000.00"
    ),
  ];
  return (
    <Box>
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
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell>I- Production de l'exercice</TableCell>
              <TableCell align="left">3,000,000.00</TableCell>
              <TableCell align="center">1,000,000.00</TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={3}> </TableCell>
            </TableRow>
            {rowsTwo.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell>III- VALEUR AJOUTEE D'EXPLOITATION (I - II)</TableCell>
              <TableCell align="left">3,000,000.00</TableCell>
              <TableCell align="center">1,000,000.00</TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={3}> </TableCell>
            </TableRow>
            {rowsThree.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            {rowsFour.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            {rowsFive.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            {rowsSix.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            {rowsSeven.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            {rowsEight.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            {rowsNine.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.capitaux_prop_passif}
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
    </Box>
  );
};

export default Nature;
