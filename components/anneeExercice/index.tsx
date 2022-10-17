import {
  Container,
  styled,
  Stack,
  Button,
  Typography,
  TextField,
  Divider,
  Grid,
} from "@mui/material";
import React, { Fragment } from "react";
import Link from "next/link";
import Add from "@mui/icons-material/Add";
import OneAnneeExercice from "./organism/OneAnneeExercice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ListAnneeExercice = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [yearList, setYearList] = React.useState([
    {
      id: "1",
      annee: "2022",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "2",
      annee: "2023",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "3",
      annee: "2024",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "4",
      annee: "2025",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "5",
      annee: "2026",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "6",
      annee: "2027",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "7",
      annee: "2028",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "8",
      annee: "2029",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "9",
      annee: "2030",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "10",
      annee: "2031",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "11",
      annee: "2032",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
    {
      id: "12",
      annee: "2033",
      debut: "01 Janvier",
      fin: "31 Décembre",
    },
  ]);
  return (
    <Container maxWidth="xl">
      <NavigationContainer>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={2}
        >
          <Stack direction="row" spacing={2}>
            <Link href="/fichier">
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              size="small"
              startIcon={<Add />}
            >
              Créer Année d’exercice
            </Button>
          </Stack>
          <Typography variant="h4">Année d’exercice</Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>

      <SectionBody>
        <Grid container spacing={3}>
          {yearList.map((one: any, index: any) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <OneAnneeExercice
                  key={one.id}
                  annee={one?.annee}
                  dateDebut={one?.debut}
                  dateFin={one?.fin}
                />
              </Grid>
            );
          })}
        </Grid>
      </SectionBody>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Formulaire (Créer/Modifier)</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Année d'exercice"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ListAnneeExercice;

const SectionNavigation = styled(Stack)(({ theme }) => ({}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SectionBody = styled(Stack)(({ theme }) => ({}));
