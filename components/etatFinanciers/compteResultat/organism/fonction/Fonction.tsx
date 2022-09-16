import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { createData } from "./table/fonction.function";
import { columns } from "./table/fonction.constant";

const Fonction = () => {
  const rows = [
    createData(
      "Produit des activités ordinaires",
      "3,000,000.00",
      "1,000,000.00"
    ),
    createData("Coût des ventes", "-", "-"),
    createData("I- MARGE  BRUTE", " 3,000,000.00", "1,000,000.00"),
  ];

  const rowsTwo = [
    createData("Autres produits opérationnels", "-", "-"),
    createData("Coûts commerciaux", "-", "-"),
    createData("Charges administratives", "-", "-"),
    createData("Autres charges opérationnelles", "(5,000,000.00)", "-"),
    createData("II-  RESULTAT OPERATIONNEL", "(2,000,000.00)", "1,000,000.00"),
  ];

  const rowsThree = [
    createData("Produits financiers", "-", "-"),
    createData("Charges financières", "-", "-"),
    createData("III-  RESULTAT AVANT IMPOT", "(2,000,000.00)", "1,000,000.00"),
  ];

  const rowsFour = [
    createData("Impôts exigibles sur les résultats", "-", "-"),
    createData("Impôts différés", "-", "-"),
    createData(
      "IV-  RESULTAT NET DES ACTIVITES ORDINAIRES",
      "(2,000,000.00)",
      "1,000,000.00"
    ),
  ];

  const rowsFive = [
    createData("Charges extraordinaires (à préciser)", "-", "-"),
    createData("Produits extraordinaires (à préciser)", "-", "-"),
    createData(
      "V-  RESULTAT NET DE L'EXERCICE",
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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Fonction;
