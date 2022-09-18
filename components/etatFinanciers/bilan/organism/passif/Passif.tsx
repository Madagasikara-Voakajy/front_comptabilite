import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { createData } from "./table/passif.function";
import { columns } from "./table/passif.constant";

const Passif = () => {
  const rows = [
    createData("Capital émis", "60,000,000.00", "60,000,000.00"),
    createData("Primes et réserves consolidées", "1,000,000.00", "-"),
    createData("Ecarts d'évaluation", "5,000,000.00 ", "-"),
    createData("Ecart d'équivalence", "-", "-"),
    createData(
      "Résultat net - part du groupe",
      "(2,000,000.00)",
      "1,000,000.00"
    ),
    createData("Autres capitaux propres - report à nouveau", "-", "-"),
  ];

  const rowsTwo = [
    createData("Produits différés : subventions d'investissement", "-", "-"),
    createData("Impôts différés", "-", "-"),
    createData("Emprunts et dettes financières", "-", "-"),
    createData("Provisions et produits constatés d'avance", "-", "-"),
  ];

  const rowsThree = [
    createData(
      "Dettes à court terme - partie à court terme de dettes à long terme",
      "-",
      "-"
    ),
    createData("Fournisseurs et comptes rattachés", "-", "-"),
    createData(
      "Provisions et produits constatés d'avance - passifs courants",
      "-",
      "-"
    ),
    createData("Autres dettes", "15,000,000.00", "-"),
    createData("Comptes de trésorerie (découverts bancaires)", "-", "-"),
  ];
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">CAPITAUX PROPRES ET PASSIFS</TableCell>
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
              <TableCell colSpan={3}>CAPITAUX PROPRES</TableCell>
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
              <TableCell>TOTAL I</TableCell>
              <TableCell align="left"> 59,000,000.00</TableCell>
              <TableCell align="center"> 61,000,000.00</TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={3}> </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={3}>PASSIFS NON-COURANTS</TableCell>
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
              <TableCell>TOTAL PASSIFS NON-COURANTS II</TableCell>
              <TableCell align="left">-</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={3}> </TableCell>
            </TableRow>

            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={3}>PASSIFS COURANTS</TableCell>
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
              <TableCell>TOTAL PASSIFS COURANTS</TableCell>
              <TableCell align="left">15,000,000.00</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell>TOTAL DES PASSIFS</TableCell>
              <TableCell align="left">74,000,000.00</TableCell>
              <TableCell align="center">61,000,000.00 </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Passif;
