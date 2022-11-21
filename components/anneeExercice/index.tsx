import {
  Container,
  styled,
  Stack,
  Button,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import Add from "@mui/icons-material/Add";
import OneAnneeExercice from "./organism/OneAnneeExercice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FiscalItem } from "../../redux/features/fiscal-year/fiscalSlice.interface";
import { useAppSelector } from "../../hooks/reduxHooks";
import useFetchFiscalListe from "./hooks/useFetchFiscalListe";
import FiscalForm from "./add/addAnnee";
import { useRouter } from "next/router";

const ListAnneeExercice = () => {
  const router = useRouter();
  const { idfile }: any = router.query;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { fiscalListe } = useAppSelector((state) => state.fiscal);

  const fetchFiscalListe = useFetchFiscalListe();

  useEffect(() => {
    fetchFiscalListe();
  }, []);

  return (
    <Container maxWidth="xl">
      <NavigationContainer>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={2}
        >
          <Stack direction="row" spacing={2}>
            <Link href={`/${idfile}/open-file`}>
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
          {fiscalListe.map((fiscal: FiscalItem, index: any) => (
            <Grid item xs={12} md={4} key={index}>
              <OneAnneeExercice
                year={fiscal.year}
                locked={fiscal.locked}
                fileId={fiscal.fileId}
                fiscalId={fiscal.id}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
              />
            </Grid>
          ))}
        </Grid>
      </SectionBody>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <FiscalForm
          // handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
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
