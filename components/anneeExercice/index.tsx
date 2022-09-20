import {
  Icon,
  Container,
  styled,
  Stack,
  Button,
  Typography,
  TextField,
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

const ListAnneeExercice = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [yearList, setYearList] = React.useState([
    { id: "1", annee: "2022", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "2", annee: "2023", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "3", annee: "2024", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "4", annee: "2025", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "5", annee: "2026", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "6", annee: "2027", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "7", annee: "2028", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "8", annee: "2029", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "9", annee: "2030", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "10", annee: "2031", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "11", annee: "2032", debut: "01 Janvier", fin: "31 Décembre" },
    { id: "12", annee: "2033", debut: "01 Janvier", fin: "31 Décembre" },
  ]);
  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={2}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          size="small"
          startIcon={<Add />}
        >
          Créer Année d’exercice
        </Button>
        <Typography variant="h4">Année d’exercice</Typography>
      </SectionNavigation>
      <SectionBody
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        my={2}
      >
        {yearList.map((one: any) => {
          return (
            <Fragment key={one.id}>
              <OneAnneeExercice
                annee={one?.annee}
                dateDebut={one?.debut}
                dateFin={one?.fin}
              />
            </Fragment>
          );
        })}
      </SectionBody>
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

const SectionBody = styled(Stack)(({ theme }) => ({}));
