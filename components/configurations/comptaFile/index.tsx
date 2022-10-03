import {
  Button,
  Container,
  Grid,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import Add from "@mui/icons-material/Add";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import { useConfirm } from "material-ui-confirm";
import useFetchComptaFileListe from "./hooks/useFetchCurrency";
import useBasePath from "../../../hooks/useBasePath";
import KeyValue from "../../shared/keyValue";



const ListComptaFile = () => {
  const basePath = useBasePath();
  const { comptaFileListe } = useAppSelector((state) => state.comptaFile);
  const router = useRouter();
  const confirm = useConfirm();

  const fetchComptaFileListe = useFetchComptaFileListe();

  React.useEffect(() => {
    fetchComptaFileListe();
  }, []);


        return (
        <Container maxWidth="xl">
            <Stack>
                <SectionNavigation
                    direction="row"
                    justifyContent="space-between"
                    mb={1}
                >
                    <Link href={"/configurations/fichier-comptable/create"}>
                        <Button
                            variant="contained"
                            startIcon={<Add />}
                            size="small"
                        >
                            Créer fichier comptable
                        </Button>
                    </Link>
                    <Typography variant="h4">Tous les fichiers comptables</Typography>
                </SectionNavigation>
                <Divider />
            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SectionBtnAdd>
                        <Typography variant="h3" color="black">Créer nouveau fichier</Typography>
                        <ImageBtnAdd src={`${basePath}/images/add.png`} />
                    </SectionBtnAdd>
                </Grid>
                <Grid item xs={12} md={6} mb={3}>
                    <SectionDetails>
                        <SectionDetailsTitle>
                            <Typography variant="h5" color="black">Fichier comptable Madagasikara Voakajy</Typography>
                        </SectionDetailsTitle>
                        <SectionDetailsContent spacing={2} my={2}>
                            <KeyValue keyName="Numéro d’Identification Fiscale (NIF)" value="1227373" />
                            <KeyValue keyName="Numéro Statistique (STAT)" value="676798" />
                            <KeyValue keyName="RCS (Registre du Commerce et de Société)" value="167282" />
                            <KeyValue keyName="Pays" value="Madagascar" />
                            <KeyValue keyName="Téléphone" value="0342866256" />
                            <KeyValue keyName="Adresse" value="Andraisoro" />
                            <KeyValue keyName="Email" value="email@gmail.com" />
                            <KeyValue keyName="Code Postale" value="10000" />
                        </SectionDetailsContent>
                        <SectionDetailsFooter spacing={2} direction="row" >
                            <Link href={"/configurations/fichier-comptable/1"}>
                                <Button variant="text" color="primary">
                                    Détails
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary">
                                Ouvrir
                            </Button>
                        </SectionDetailsFooter>
                    </SectionDetails>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ListComptaFile;

const SectionBtnAdd = styled(Box)(({ theme }) => ({
    padding: 30,
    marginBlock: 15,
    background: theme.palette.common.white,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
    width: "70%",
    height: "auto",
}));

export const SectionNavigation = styled(Stack)(({ }) => ({}));
