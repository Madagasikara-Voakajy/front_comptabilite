import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
  Box,
} from "@mui/material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Add from "@mui/icons-material/Add";
import Link from "next/link";
import useBasePath from "../../hooks/useBasePath";
import KeyValue from "../shared/keyValue";
import { useAppSelector } from "../../hooks/reduxHooks";
import useFetchComptaFileListe from "./hooks/useFetchComptaFile";
import { ComptaFileItem } from "../../redux/features/comptaFile/comptaFileSlice.interface";
import useFetchCurrencyListe from "../configurations/currency/hooks/useFetchCurrency";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useFetchTypeJournal from "../configurations/typeJournal/hooks/useFetchTypeJournal";

const FichierComptable = () => {
  const { comptaFileListe } = useAppSelector((state) => state.comptaFile);
  const fetchComptaFileListe = useFetchComptaFileListe();
  const fetchAllCurrency = useFetchCurrencyListe();

  useEffect(() => {
    fetchComptaFileListe();
  }, []);

  useEffect(() => {
    fetchAllCurrency();
  }, []);

  // useEffect(() => {
  //   fetchJournalType();
  // }, []);

  const basePath = useBasePath();
  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Stack direction="row" spacing={2}>
            <Link href="/">
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
            <Link href={"/fichier/create"}>
              <Button variant="contained" startIcon={<Add />} size="small">
                Créer fichier comptable
              </Button>
            </Link>
          </Stack>
          <Typography variant="h4">Fichiers comptables</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SectionBtnAdd>
            <Typography variant="h4" color="black" mb={2}>
              Créer nouveau fichier
            </Typography>
            <ImageBtnAdd src={`${basePath}/images/add.png`} />
          </SectionBtnAdd>
        </Grid>
        {comptaFileListe.map((comptaFile: ComptaFileItem) => (
          <Grid item xs={12} md={6} mb={3} key={comptaFile?.id}>
            <SectionDetails>
              <SectionDetailsTitle>
                <Typography variant="h5" color="black">
                  Fichier comptable Madagasikara Voakajy
                </Typography>
              </SectionDetailsTitle>
              <SectionDetailsContent spacing={2} my={2}>
                <KeyValue
                  keyName="Nom de l'entreprise"
                  value={comptaFile.companyName}
                />
                <KeyValue keyName="activité" value={comptaFile.activity} />
                <KeyValue
                  keyName="Numéro d’Identification Fiscale (NIF)"
                  value={comptaFile.NIF}
                />
                <KeyValue
                  keyName="Numéro Statistique (STAT)"
                  value={comptaFile.STAT}
                />
                <KeyValue
                  keyName="RCS (Registre du Commerce et de Société)"
                  value={comptaFile.RCS}
                />
                <KeyValue keyName="Pays" value={comptaFile.country} />
                <KeyValue keyName="Téléphone" value={comptaFile.phone} />
                <KeyValue keyName="Adresse" value={comptaFile.address} />
                <KeyValue keyName="Email" value={comptaFile.email} />
                <KeyValue
                  keyName="Code Postale"
                  value={comptaFile.postalCode}
                />
                <KeyValue
                  keyName="Type d'année fiscale"
                  value={comptaFile.fiscalYearType}
                />
                <KeyValue keyName="Devise" value={comptaFile?.currency?.name} />
              </SectionDetailsContent>
              <SectionDetailsFooter spacing={2} direction="row">
                <Link href={`/fichier/${comptaFile.id}/detail`}>
                  <Button variant="text" color="primary">
                    Détails
                  </Button>
                </Link>
                <Link href={"/journalEntry"}>
                  <Button
                    variant="text"
                    color="info"
                    startIcon={<SettingsApplicationsIcon />}
                  >
                    Journal de Saisie
                  </Button>
                </Link>
                <Link href={`/fichier/${comptaFile?.id}/annee-exercice`}>
                  <Button variant="contained" color="primary">
                    Ouvrir
                  </Button>
                </Link>
              </SectionDetailsFooter>
            </SectionDetails>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FichierComptable;

const SectionBtnAdd = styled(Box)(({ theme }) => ({
  padding: 30,
  marginBlock: 15,
  background: theme.palette.common.white,
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SectionDetails = styled(Box)(({ theme }) => ({
  padding: 30,
  marginBlock: 15,
  background: theme.palette.common.white,
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

const SectionDetailsTitle = styled(Box)(({ theme }) => ({}));
const SectionDetailsContent = styled(Stack)(({ theme }) => ({}));
const SectionDetailsFooter = styled(Stack)(({ theme }) => ({}));

const ImageBtnAdd = styled("img")(({ theme, src }) => ({
  src: `url(${src})`,
  width: "40%",
  height: "40%",
  marginBottom: theme.spacing(2),
}));

export const SectionNavigation = styled(Stack)(({}) => ({}));
