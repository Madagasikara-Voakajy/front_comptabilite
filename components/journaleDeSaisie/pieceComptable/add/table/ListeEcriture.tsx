import * as React from "react";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { rows } from "./constante";
import Grid from "@mui/material/Grid";

const currencies = [
  {
    value: "1",
    label: "Option_1",
  },
  {
    value: "2",
    label: "Option_2",
  },
  {
    value: "3",
    label: "Option_3",
  },
  {
    value: "4",
    label: "Option_4",
  },
];

const ListeEcriture = () => {
  const [currency, setCurrency] = React.useState("Option_2");
  const [poste, setPoste] = React.useState("Option_2");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleChangePoste = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoste(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      <MyTableContainer>
        <Typography variant="h5">Écriture comptable</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Compte Générale</TableCell>
                <TableCell>Compte Auxiliaire</TableCell>
                <TableCell align="left">Libellé</TableCell>
                <TableCell align="left">Débit</TableCell>
                <TableCell align="left">Crédit</TableCell>
                <TableCell align="left">Devise</TableCell>
                <TableCell align="left">GRANTS</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.CompteGénérale}
                  </TableCell>
                  <TableCell align="left">{row.CompteAuxiliaire}</TableCell>
                  <TableCell align="left">{row.Libellé}</TableCell>
                  <TableCell align="left">{row.Débit}</TableCell>
                  <TableCell align="left">{row.Crédit}</TableCell>
                  <TableCell align="left">{row.Devise}</TableCell>
                  <TableCell align="left">{row.GRANTS}</TableCell>
                </TableRow>
              ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="none">
                  <TextField
                    id="filled-select-currency"
                    select
                    label="Séléctionner compte"
                    value={currency}
                    onChange={handleChange}
                    variant="filled"
                    style={{ width: "100%" }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell padding="none">
                  <TextField
                    id="filled-select-currency"
                    select
                    label="Saisir compte auxiliaire"
                    value={poste}
                    onChange={handleChangePoste}
                    variant="filled"
                    style={{ width: "100%" }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell padding="none">
                  <TextField
                    id="filled-basic"
                    label="Saisir libellé"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </TableCell>
                <TableCell padding="none">
                  <TextField
                    id="filled-basic"
                    label="0,00"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </TableCell>
                <TableCell padding="none">
                  <TextField
                    id="filled-basic"
                    label="0,00"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </TableCell>
                <TableCell padding="none">
                  <TextField
                    id="filled-basic"
                    label="Default Slot"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </TableCell>
                <TableCell padding="none">
                  <TextField
                    id="filled-basic"
                    label="Saisir echéance"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </TableCell>
                <TableCell style={{ width: 150 }}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    style={{ width: 150 }}
                  >
                    <DoneIcon color="info" />
                    <CloseIcon color="warning" />
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Button size="small" color="info">
              <AddIcon />
              Ajouter une ligne
            </Button>
            <Typography variant="body2" sx={{ ml: 46 }}>
              12000
            </Typography>
            <Typography variant="body2" sx={{ ml: 15 }}>
              12000
            </Typography>
          </Grid>
        </TableContainer>
      </MyTableContainer>
    </Container>
  );
};

export default ListeEcriture;

const MyTableContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  borderRadius: 20,
  background: "#fff",
}));
