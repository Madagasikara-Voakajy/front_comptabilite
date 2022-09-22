import React from "react";
import Container from "@mui/material/Container";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import TypeJournalForm from "./organism/TypeJournalForm";
import TypeJournalList from "./organism/table/TypeJournalList";

const TypeJournal = () => {
  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Link href="/">
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Typography variant="h4">Type Journal</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TypeJournalForm />
        </Grid>
        <Grid item xs={12} md={8} mb={3}>
          <TypeJournalList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TypeJournal;

export const SectionNavigation = styled(Stack)(({}) => ({}));
