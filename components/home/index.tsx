import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack, Divider, styled } from "@mui/material";
import LinkOutlined from "@mui/icons-material/LinkOutlined";
import Info from "@mui/icons-material/Info";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { useRouter } from "next/router";
import EventAvailable from "@mui/icons-material/EventAvailable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HomeComptabilite = () => {
  const router = useRouter();
  const { idfile }: any = router.query;

  return (
    <Container maxWidth="xl">
      <SectionNavigation direction="row" justifyContent="space-between" mb={1}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Link href={`/`}>
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
        </Stack>
        <Typography variant="h4"></Typography>
      </SectionNavigation>
      <Divider />
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LinkContainer>
                <Typography sx={{ mb: 2 }} variant="h5" color="initial">
                  Gestion des année d'exercice
                </Typography>
                <Typography color="GrayText" mb={2}>
                  <InfoOutlined fontSize="inherit" /> Pour gérer les année
                  d'exercice, journals et les pièces comptables, accéder à cette
                  page
                </Typography>
                <Link href={`/${idfile}/open-file/annee-exercice`}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EventAvailable />}
                  >
                    Année d'exercice
                  </Button>
                </Link>
              </LinkContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <LinkContainer>
                <Typography sx={{ mb: 2 }} variant="h5" color="initial">
                  Configuration de base
                </Typography>
                <Box>
                  <Link href={`/${idfile}/open-file/comptes/general`}>
                    <Button variant="text" color="info">
                      Compte générale (PCG)
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link href={`/${idfile}/open-file/comptes/auxiliaire`}>
                    <Button variant="text" color="info">
                      Compte Auxiliaire (compte tiers)
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/configurations/annee-fiscale`}
                  >
                    <Button variant="text" color="info">
                      Année fiscale
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link href={`/${idfile}/open-file/configurations/devise`}>
                    <Button variant="text" color="info">
                      Liste des dévises
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/configurations/type-journal`}
                  >
                    <Button variant="text" color="info">
                      Types de journals
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/configurations/journal-item`}
                  >
                    <Button variant="text" color="info">
                      Journal item
                    </Button>
                  </Link>
                </Box>
              </LinkContainer>
            </Grid>

            <Grid item xs={12} md={6}>
              <LinkContainer>
                <Typography sx={{ mb: 2 }} variant="h5" color="initial">
                  Configuration états financières
                </Typography>
                <Box>
                  <Link href={`/${idfile}/open-file/etat-financieres/bilan`}>
                    <Button variant="text" color="info">
                      Bilan passif/actif
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/etat-financieres/compte-resultat`}
                  >
                    <Button variant="text" color="info">
                      Compte de résiltats par nature / par fonction
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/etat-financieres/tableau-flux-tresorerie`}
                  >
                    <Button variant="text" color="info">
                      Tableau de flux de trésorerie
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/etat-financieres/tableau-variation-capitaux-propres`}
                  >
                    <Button variant="text" color="info">
                      Variation des capitaux propres
                    </Button>
                  </Link>
                </Box>
              </LinkContainer>
            </Grid>

            <Grid item xs={12} md={6}>
              <LinkContainer>
                <Typography sx={{ mb: 2 }} variant="h5" color="initial">
                  Gérer GRANT
                </Typography>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/configurations/post-analytique`}
                  >
                    <Button variant="text" color="info">
                      Tous les postes Analytiques
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link href={`/${idfile}/open-file/configurations/grant`}>
                    <Button variant="text" color="info">
                      Tous les GRANTS
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={`/${idfile}/open-file/configurations/ligne-budgetaire`}
                  >
                    <Button variant="text" color="info">
                      Toustes les lignes budgétaires
                    </Button>
                  </Link>
                </Box>
              </LinkContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeComptabilite;

export const SectionNavigation = styled(Stack)(({}) => ({}));

const LinkContainer = styled(Box)(({ theme }) => ({
  padding: 30,
  borderRadius: 20,
  background: "#fff",
}));
