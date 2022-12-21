import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { createData } from "./table/actif.function";
import { columns } from "./table/actif.constant";
import Button from "@mui/material/Button";
import TableModal from "../../modal/modal";
import CloseIcon from "@mui/icons-material/Close";

const Actif = () => {
  const rows = [
    createData("Ecart d'acquisition (ou goodwill)", "-", "-", "-", "-"),
    createData("Immobilisations incorporelles", "-", "-", "-", "-"),
    createData(
      "Immobilisations corporelles",
      "15,000,000.00",
      " 5,000,000.00 ",
      "10,000,000.00 ",
      "-"
    ),
    createData("Immobilisations mises en concession", "-", "-", "-", "-"),
    createData("Immobilisations en cours", "-", "-", "-", "-"),
    createData("Immobilisations financières", "-", "-", "-", "-"),
    createData("Titres mis en équivalence", "-", "-", "-", "-"),
    createData(
      "Autres participations et créances rattachées",
      "-",
      "-",
      "-",
      "-"
    ),
    createData("Autres titres immobilisés", "-", "-", "-", "-"),
    createData(
      "Prêts et autres immobilisations financières",
      "-",
      "-",
      "-",
      "-"
    ),
  ];

  const rowsTwo = [
    createData("Stocks et en cours", "2,000,000.00", "-", "-", "2,000,000.00"),
    createData("Créances et emplois assimilés", "-", "-", "-", "-"),
    createData(
      "Clients et autres débiteurs",
      "3,000,000.00",
      "-",
      "3,000,000.00",
      "-"
    ),
    createData("Impôts", "-", "-", "-", "-"),
    createData("Autres créances et actifs assimilés", "-", "-", "-", "-"),
    createData("Trésorerie et équivalents de trésorerie", "-", "-", "-", "-"),
    createData(
      "Placements et autres équivalents de trésorerie",
      "-",
      "-",
      "-",
      "-"
    ),
    createData(
      "Trésorerie (fonds en caisse et dépôts à vue)",
      "59,000,000.00",
      "-",
      "59,000,000.00",
      "61,000,000.00 "
    ),
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Solde 2022 (N)
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Solde 2021 (N - 1)
              </TableCell>
            </TableRow>
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
              <TableCell colSpan={5}>ACTIFS NON COURANTS</TableCell>
            </TableRow>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.Brut}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                        {
                          // <Button
                          //   variant="text"
                          //   color="info"
                          //   onClick={handleClickOpen}
                          // >
                          //   PCG
                          // </Button>
                        }
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            <TableRow hover tabIndex={-1}>
              <TableCell>TOTAL ACTIFS NON COURANTS</TableCell>
              <TableCell align="left">15,000,000.00</TableCell>
              <TableCell align="center">5,000,000.00 </TableCell>
              <TableCell align="center">10,000,000.00 </TableCell>
              <TableCell align="center">
                <Button variant="text" color="info" onClick={handleClickOpen}>
                  PCG
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="xl">
                  <DialogActions>
                    <DialogTitle variant="h6">
                      Ajouter compte PCG liée à: nom de la ligne séléctionné
                    </DialogTitle>
                    <Button color="warning" onClick={handleClose}>
                      Annuler
                    </Button>
                    <Button variant="text" onClick={handleClose}>
                      Enregistrer
                    </Button>
                    <IconButton color="default" onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </DialogActions>
                  <DialogContent>
                    <TableModal />
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={5}>ACTIFS COURANTS</TableCell>
            </TableRow>
            {rowsTwo.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.Brut}>
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
              <TableCell>TOTAL ACTIFS COURANTS</TableCell>
              <TableCell align="left">64,000,000.00 </TableCell>
              <TableCell align="center">
                <Button variant="text" color="info" onClick={handleClickOpen}>
                  PCG
                </Button>
              </TableCell>
              <TableCell align="center">64,000,000.00</TableCell>
              <TableCell align="center">61,000,000.00 </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell colSpan={5}> </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell>TOTAL DES ACTIFS</TableCell>
              <TableCell align="left">79,000,000.00</TableCell>
              <TableCell align="center">5,000,000.00</TableCell>
              <TableCell align="center">74,000,000.00</TableCell>
              <TableCell align="center">61,000,000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Actif;
