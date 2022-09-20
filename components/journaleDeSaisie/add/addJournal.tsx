import {
  Button,
  Container,
  styled,
  Typography,
  TextField,
  Stack,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material/Select";



const AddJournal = () => {
  const [article, setArticle] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setArticle(event.target.value as string);
  };
  const [demandeur, setDemandeur] = React.useState("");

  const handleChange_1 = (event: SelectChangeEvent) => {
    setDemandeur(event.target.value as string);
  };
  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href="/">
              <Button
                color="info"
                variant="text"
                startIcon={<ArrowBack />}
              >
                Retour
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              size="small"
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
          <Typography variant="h5">
            Formulaires
          </Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>

      <FormContainer spacing={2}>
      <TextField
          fullWidth
          id="outlined-basic"
          label="Nom"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Type </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type"
          >
            <MenuItem value={10}> Banque </MenuItem>
            <MenuItem value={20}> Divers </MenuItem>
            <MenuItem value={30}> Banque </MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Code contre partie"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Code préfixe"
          variant="outlined"
        />
        {/* <TextField
          fullWidth
          id="outlined-basic"
          label="Nombre de chiffre aprés la virgule"
          variant="outlined"
        /> */}
      </FormContainer>
    </Container>
  );
};

export default AddJournal;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
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
