import React from "react";
import {
  Button,
  Container,
  Divider,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Balance = () => {
  return (
    <Container maxWidth="xl">
      <SectionNavigation
        direction="row"
        sx={{ mb: 1 }}
        justifyContent="space-between"
      >
        <Stack flexDirection={"row"} width={250} justifyContent="space-between">
          <Link href="/">
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Button color="info" variant="text" startIcon={<FileDownloadIcon />}>
            Excel
          </Button>
          <Button color="info" variant="text" startIcon={<FileDownloadIcon />}>
            Pdf
          </Button>
        </Stack>
        <Typography variant="h4">Balance géneral</Typography>
      </SectionNavigation>
      <Divider />
    </Container>
  );
};

export const SectionNavigation = styled(Stack)(({ theme }) => ({}));

export default Balance;
