import {
  Button,
  Container,
  styled,
  Typography,
  TextField,
  FormControl,
  Stack,
  Grid,
  Divider,
  FormHelperText,
} from "@mui/material";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import KeyValue from "../../../shared/keyValue";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ErrorMessage, Field } from "formik";
import { getAuxiliairyAccount } from "../../../../redux/features/auxiliairyAccount";

const AfficherAuxiliaire = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  const { isEditing, auxiliaryAccount } = useAppSelector(
    (state) => state.auxiliaryAccount
  );

  React.useEffect(() => {
    if (id) {
      dispatch(getAuxiliairyAccount({ id }));
    }
  }, [id]);

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href="/comptes/auxiliaire/">
              <Button color="info" variant="text" startIcon={<ArrowBack />}>
                Retour
              </Button>
            </Link>
          </Stack>
          <Typography variant="h4">Details compte auxiliaire</Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>
      <CardContainer spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Nom ou raison sociale"
              value={auxiliaryAccount.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Type" value={auxiliaryAccount.type} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="activity" value={auxiliaryAccount.activity} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="NIF" value={auxiliaryAccount.NIF} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="STAT" value={auxiliaryAccount.STAT} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="RCS" value={auxiliaryAccount.RCS} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Pays" value={auxiliaryAccount.coutnry} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Téléphone" value={auxiliaryAccount.phone} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="address" value={auxiliaryAccount.address} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue keyName="Email" value={auxiliaryAccount.email} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Code  postale"
              value={auxiliaryAccount.postalCode}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeyValue
              keyName="Compte par defaut"
              value={auxiliaryAccount?.defaultAccountId}
            />
          </Grid>
        </Grid>
      </CardContainer>
      <FormContainer mt={2} spacing={2}>
        <Typography variant="h6" color="initial">
          Solvabilités
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <KeyValue keyName="Numéro du pièces" value={"12211"} />
          <KeyValue keyName="Débits" value={"30000"} />
          <KeyValue keyName="Crédits" value={"20000"} />
          <KeyValue keyName="Solde" value={"10000"} />
        </Stack>
      </FormContainer>
    </Container>
  );
};

export default AfficherAuxiliaire;

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
}));

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const CardContainer = styled(Stack)(({ theme }) => ({
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
