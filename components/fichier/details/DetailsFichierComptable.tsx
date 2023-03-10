import {
  Button,
  Container,
  styled,
  Typography,
  Stack,
  Divider,
  TextField,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import React, { useEffect } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close, Edit, Event } from "@mui/icons-material";
import { SectionNavigation } from "../FichierComptable";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import { NavigationContainer } from "../add/FormFichierComptable";
import KeyValue from "../../shared/keyValue";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import {
  deleteComptaFile,
  getComptaFile,
} from "../../../redux/features/comptaFile";
import { useConfirm } from "material-ui-confirm";
import useFetchComptaFileListe from "../hooks/useFetchComptaFile";
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';

const DetailsFichierComptable = () => {
  const router = useRouter();

  const dispatch: any = useAppDispatch();

  const { id }: any = router.query;

  const { comptaFile }: any = useAppSelector((state) => state.comptaFile);

  const confirm = useConfirm();

  const fetchComptaFileListe = useFetchComptaFileListe();

  useEffect(() => {
    getDetailsComptaFile();
  }, [id]);

  const getDetailsComptaFile = () => {
    const args: any = {
      include: {
        currency: true,
      },
    };
    dispatch(getComptaFile({ id, args }));
  };

  const handleClickEdit = async (id: any) => {
    router.push(`/fichier/${id}/edit`);
  };


  const handleClickDelete = async (id: any) => {
    confirm({
      title: "Supprimer le fournisseur",
      description: "Voulez-vous vraiment supprimer ce fournisseur ?",
      cancellationText: "Annuler",
      confirmationText: "Supprimer",
      cancellationButtonProps: {
        color: "warning",
      },
      confirmationButtonProps: {
        color: "error",
      },
    })
      .then(async () => {
        await dispatch(deleteComptaFile({ id }));
        fetchComptaFileListe();
      })
      .catch(() => {});
  };

  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Stack flexDirection={"row"}>
            <Link href="/fichier">
              <Button color="info" variant="text" startIcon={<ArrowBack />}>
                Retour
              </Button>
            </Link>
            <Link href={`/fichier/1`}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Edit />}
                sx={{ marginInline: 3 }}
                // type="submit"
                onClick={() => {
                  handleClickEdit(comptaFile.id);
                }}
              >
                Modifier
              </Button>
            </Link>
            <Link href={"/fichier/journal"}>
              <Button
                variant="text"
                color="info"
                startIcon={<ArticleIcon />}
                sx={{ marginInline: 3 }}
              >
                Journal
              </Button>
            </Link>
            <Button
            variant="text"
            color="warning"
            startIcon={< DeleteIcon />}
            sx={{ marginInline: 3 }}
            component="span"
            size="small"
            onClick={() => {
              handleClickDelete(comptaFile.id);
            }}
            >
              Supprimer
            </Button>
          </Stack>
          <Typography variant="h4">D??tails fichier comptable</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <SectionDetails>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Nom de l'entreprise"
              value={comptaFile.companyName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="activit??" value={comptaFile.activity} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Num??ro d???Identification Fiscale (NIF)"
              value={comptaFile.NIF}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Num??ro Statistique (STAT)"
              value={comptaFile.STAT}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="RCS (Registre du Commerce et de Soci??t??)"
              value={comptaFile.RCS}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Pays" value={comptaFile.country} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="T??l??phone" value={comptaFile.phone} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Adresse" value={comptaFile.address} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Email" value={comptaFile.email} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Code Postale" value={comptaFile.postalCode} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Type d'ann??e fiscale"
              value={comptaFile.fiscalYearType}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Devise" value={comptaFile.currency?.iso} />
          </Grid>
        </Grid>
      </SectionDetails>
    </Container>
  );
};

export default DetailsFichierComptable;

const SectionDetails = styled(Box)(({ theme }) => ({
  padding: 30,
  marginBlock: 15,
  background: theme.palette.common.white,
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

export const InfoItems = styled(Stack)(({ theme }) => ({}));
