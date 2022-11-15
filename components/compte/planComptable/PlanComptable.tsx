import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import PlanComptableForm from "./organism/PlanComptableForm";
import PlanComptableList from "./organism/table/PlanComptableList";
import ImportPgc from "./organism/ImportPgc";
import { useRouter } from "next/router";

const PlanComptable = () => {
  const router = useRouter();
  const { idfile }: any = router.query;
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
            <ImportPgc />
          </Stack>
          <Typography variant="h4">Compte</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <PlanComptableForm />
        </Grid>
        <Grid item xs={12} md={8} mb={3}>
          <PlanComptableList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlanComptable;

export const SectionNavigation = styled(Stack)(({}) => ({}));
