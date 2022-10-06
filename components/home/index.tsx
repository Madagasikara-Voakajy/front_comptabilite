import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";

const HomeComptabilite = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LinkContainer>
                <Typography sx={{ mb: 2 }} variant="h5" color="initial">
                  Gérer fichier comptable
                </Typography>
                <Button variant="text" color="info">
                  Tous les fichiers comptables
                </Button>
              </LinkContainer>
            </Grid>
            <Grid item xs={12}>
              <LinkContainer>
                <Typography sx={{ mb: 2 }} variant="h5" color="initial">
                  Gérer GRANT
                </Typography>
                <Box>
                  <Button variant="text" color="info">
                    Tous les postes Analytiques
                  </Button>
                </Box>
                <Box>
                  <Button variant="text" color="info">
                    Tous les GRANTS
                  </Button>
                </Box>
                <Box>
                  <Button variant="text" color="info">
                    Toustes les lignes budgétaires
                  </Button>
                </Box>
              </LinkContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <LinkContainer>
            <Typography sx={{ mb: 2 }} variant="h5" color="initial">
              Configuration de base
            </Typography>
            <Box>
              <Button variant="text" color="info">
                Compte générale (PCG)
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Compte Auxiliaire (compte tiers)
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Liste des dévises
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Types de journals
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Types de mode de paiements
              </Button>
            </Box>
          </LinkContainer>
        </Grid>
        <Grid item xs={4}>
          <LinkContainer>
            <Typography sx={{ mb: 2 }} variant="h5" color="initial">
              Configuration états financières
            </Typography>
            <Box>
              <Button variant="text" color="info">
                Bilan actif
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Bilan passif
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Compte de résiltats par nature
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Compte de résutats par fonction
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Tableau de flux de trésorerie
              </Button>
            </Box>
            <Box>
              <Button variant="text" color="info">
                Variation des capitaux propres
              </Button>
            </Box>
          </LinkContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeComptabilite;

const LinkContainer = styled(Box)(({ theme }) => ({
  padding: 30,
  borderRadius: 20,
  background: "#fff",
}));
