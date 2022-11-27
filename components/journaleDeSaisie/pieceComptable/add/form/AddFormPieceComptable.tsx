import {
  Button,
  Container,
  styled,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import OSTextField from "../../../../shared/input/OSTextField";
import OSDatePicker from "../../../../shared/date/OSDatePicker";
import { useRouter } from "next/router";
import OSSelectField from "../../../../shared/select/OSSelectField";
import useFetchAuxiliaire from "../../../../compte/auxiliaire/hooks/useFetchAuxiliaire";
import { useAppSelector } from "../../../../../hooks/reduxHooks";

const AddFormPieceComptable = ({ formikProps }: any) => {
  const router = useRouter();
  // const fetchAllCompteAuxiliairy = useFetchAuxiliaire();
  const { journalListe } = useAppSelector((state) => state.journal);
  const { id, idae }: any = router.query;
  const { idfile, idj }: any = router.query;

  // React.useEffect(() => {
  //   // // fetchAllPCG();
  //   // fetchAllCompteAuxiliairy();
  //   // // fetchAllCurrency();
  //   console.log("rr", journalListe);
  // }, [journalListe]);

  React.useEffect(() => {
    if (idj) {
      formikProps.setFieldValue("journalEntry.journalId", +idj);
    }
  }, [router.query]);

  return (
    <Container maxWidth="xl" sx={{ pb: 3 }}>
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href={`/${idfile}/open-file/annee-exercice/${idae}/journal`}>
              <Button color="info" variant="text" startIcon={<ArrowBack />}>
                Retour
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              startIcon={<Check />}
              sx={{ marginInline: 3 }}
            >
              Enregistrer
            </Button>
            <Button
              variant="text"
              color="warning"
              size="small"
              startIcon={<Close />}
              sx={{ marginInline: 3 }}
            >
              Annuler
            </Button>
          </Stack>
          <Typography variant="h4">Ajouter pièce comptable</Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>
      <FormContainer spacing={2}>
        <CustomStack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 2, sm: 2, md: 1 }}
        >
          <OSTextField
            fullWidth
            id="reference"
            name="journalEntry.reference"
            label="Reference"
            variant="outlined"
          />
          <OSDatePicker
            label="Date pièce comptable"
            value={formikProps.values.journalEntry.date}
            name="journalEntry.date"
            onChange={(value: any) =>
              formikProps.setFieldValue("journalEntry.date", value)
            }
          />
          <OSTextField
            fullWidth
            type="number"
            id="outlined-basic"
            name="journalEntry.number"
            label="Numéro pièce"
            variant="outlined"
          />
          <OSSelectField
            disabled
            id="journalEntry.journalId"
            label="Salaires (Journal)"
            name={`journalEntry.journalId`}
            options={journalListe}
            dataKey={"name"}
            valueKey="id"
          />
        </CustomStack>
      </FormContainer>
    </Container>
  );
};

export default AddFormPieceComptable;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  borderRadius: 20,
  background: "#fff",
}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  flex: 1,
  width: "100%",
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "5px",
}));
