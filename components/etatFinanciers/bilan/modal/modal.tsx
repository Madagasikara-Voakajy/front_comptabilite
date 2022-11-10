import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";

const TableModal = () => {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}>
                Tous les PCG
              </TableCell>
              <TableCell align="center" colSpan={4}>
                Actions
              </TableCell>
              <TableCell align="center" colSpan={1}>
                PCG Séléctionnées
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default TableModal;
