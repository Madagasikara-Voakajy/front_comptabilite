import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { createData } from "./table/etat.function";
import { columns } from "./table/etat.constant";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Etat = () => {
  const rows = [
    createData(
      "Opération manquantes sur le compte 512",
      "commissions bancaires",
      "",
      "",
      "",
      ""
    ),
  ];
  const rowsTwo = [
    createData(
      "Opération manquantes sur le compte 512 ",
      "Chéque fournisseur F2",
      "",
      "",
      "",
      ""
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
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Stack direction="row" spacing={2}>
          <Link href="/comptabilite/rapprochement/compte">
            <Button variant="text" color="info" startIcon={<ArrowBackIcon />}>
              retour
            </Button>
          </Link>
          <Button
            color="info"
            variant="contained"
            startIcon={<FileDownloadIcon />}
          >
            Excel
          </Button>
          <Button
            color="info"
            variant="contained"
            startIcon={<FileDownloadIcon />}
          >
            Pdf
          </Button>
        </Stack>
        <Typography variant="h4" color="GrayText">
          Etat de rapprochement bancaire
        </Typography>
      </SectionNavigation>
      <Divider />
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left">Operations Manquantes</TableCell>
                <TableCell align="left">
                  Compte 512 (Comptbilité de l'entreprise)
                </TableCell>
                <TableCell></TableCell>
                <TableCell align="center">
                  Compte Bancaire Mv (comptabilité de la banque)
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
              <TableRow hover tabIndex={1}>
                <TableCell> </TableCell>
                <TableCell align="left"> Solde de rapprochement </TableCell>
                <TableCell align="left">35 000 </TableCell>
                <TableCell align="left"> </TableCell>
                <TableCell align="left"> </TableCell>
                <TableCell align="center"> 27 000</TableCell>
              </TableRow>
              <TableRow hover tabIndex={-1}>
                <TableCell></TableCell>
                <TableCell>virement client C3</TableCell>
                <TableCell>5000</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.debit}>
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
                <TableCell> </TableCell>
                <TableCell align="left"> </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="center"> 20000 </TableCell>
              </TableRow>
              <TableRow hover tabIndex={-1}>
                <TableCell> </TableCell>
                <TableCell align="left">Chéque client C2</TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> 22000</TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
              {rowsTwo.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.vide1}>
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
                <TableCell> </TableCell>
                <TableCell align="left">
                  Bordereau effets du 30/12/2022
                </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
              <TableRow>{/* <TableCell></TableCell> */}</TableRow>
              <TableCell> </TableCell>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">
                  Soldes au 31/12/2022 aprés rapprochement
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"> 37000</TableCell>
                <TableCell align="center">37000 </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Totaux</TableCell>
                <TableCell align="center">40000</TableCell>
                <TableCell align="center"> 40000</TableCell>
                <TableCell align="center">59000 </TableCell>
                <TableCell align="center">59000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Etat;

export const SectionNavigation = styled(Stack)(({ theme }) => ({}));
