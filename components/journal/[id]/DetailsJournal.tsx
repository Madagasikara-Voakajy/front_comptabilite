import {
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import { getJournal } from "../../../redux/features/journal";

const DetailsJournal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id }: any = router.query;
  const { journal } = useAppSelector((state) => state.journal);
  const { journalType } = useAppSelector((state) => state.journalType);

  useEffect(() => {
    getDetailsJournal();
  }, [id]);

  const getDetailsJournal = () => {
    const args: any = {
      include: {
        fileId:true,
        journalType:true,
      },
    };
    dispatch(getJournal({ id, args }));
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff", pb: 5 }}>
      <SectionNavigation
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Link href="/journal">
          <Button
            color="info"
            variant="text"
            startIcon={<ArrowBackIcon />}
          >
            Retour
          </Button>
        </Link>
        <Typography variant="h4" color="GrayText">
          Details du Journal
        </Typography>
      </SectionNavigation>
      <DetailsContainer>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Nom :
              </Typography>
              <Typography variant="body1" color="gray">
                {journal.name}
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Code :
              </Typography>
              <Typography variant="body1" color="gray">
                {journal.code}
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Fichier :
              </Typography>
              <Typography variant="body1" color="gray">
                {journal.fileId}
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Type :
              </Typography>
              <Typography variant="body1" color="gray">
                {journal.typeId}
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
      </DetailsContainer>
    </Container>
  );
};

export default DetailsJournal;

export const InfoItems = styled(Stack)(({ theme }) => ({}));

export const SectionNavigation = styled(Stack)(({ theme }) => ({}));

const DetailsContainer = styled("div")(({ theme }) => ({
  padding: 30,
  border: "1px solid #E0E0E0",
  borderRadius: 20,
}));
