import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
  Box,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FamilyRestroomRounded } from "@mui/icons-material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AnneeFiscale = () => {
  const router = useRouter();
  const { idfile }: any = router.query;

  const [anneeFiscalActive, setAnneeFiscalActive] = useState({
    civile: true,
    cheval: false,
  });

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Link href={`/${idfile}/open-file`}>
              <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
                Retour
              </Button>
            </Link>
          </Stack>
          <Typography variant="h4">Configuration Année fiscale</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardAnneeFiscal
            onClick={() =>
              setAnneeFiscalActive({
                cheval: false,
                civile: true,
              })
            }
            sx={{ opacity: anneeFiscalActive.civile ? 1 : 0.2 }}
          >
            <Typography variant="h2" color="initial">
              Année civile (par défaut)
            </Typography>
            <IconButton
              aria-label="check"
              color={anneeFiscalActive.civile ? "primary" : "default"}
            >
              <CheckCircleIcon sx={{ fontSize: 64 }} />
            </IconButton>
            {anneeFiscalActive.civile && (
              <Typography variant="h3" color="primary">
                Cette année est séléctionnée
              </Typography>
            )}
            <Typography
              variant="subtitle1"
              color="initial"
              component={"p"}
              my={5}
            >
              Du 01/01/xxxx au 31/12/xxxx
            </Typography>
            <Typography variant="subtitle1" color="initial" component={"p"}>
              01 Janvier au 31 Décembre
            </Typography>
          </CardAnneeFiscal>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardAnneeFiscal
            onClick={() =>
              setAnneeFiscalActive({
                cheval: true,
                civile: false,
              })
            }
            sx={{ opacity: anneeFiscalActive.cheval ? 1 : 0.2 }}
          >
            <Typography variant="h2" color="initial">
              Année à cheval
            </Typography>
            <IconButton
              aria-label="check"
              color={anneeFiscalActive.cheval ? "primary" : "default"}
            >
              <CheckCircleIcon sx={{ fontSize: 64 }} />
            </IconButton>
            {anneeFiscalActive.cheval && (
              <Typography variant="h3" color="primary">
                Cette année est séléctionnée
              </Typography>
            )}
            <Typography
              variant="subtitle1"
              color="initial"
              component={"p"}
              my={5}
            >
              Du 01/07/xxxx au 30/06/xxxx
            </Typography>
            <Typography variant="subtitle1" color="initial" component={"p"}>
              01 Juillet au 30 Juin
            </Typography>
          </CardAnneeFiscal>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnneeFiscale;
const SectionNavigation = styled(Stack)(({}) => ({}));

const CardAnneeFiscal = styled(Button)(({ theme }) => ({
  // padding: 30,
  marginBlock: 15,
  background: theme.palette.common.white,
  borderRadius: 20,
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
}));
