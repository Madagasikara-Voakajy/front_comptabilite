import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import KeyValue from "../../shared/keyValue";

const Detail = () => {
  return (
    <FormContainer spacing={2}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <KeyValue keyName="Taux d'ammortissement" value="100/2ans :50%" />
          <KeyValue keyName="1 ére annuité" value="187500" />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default Detail;

const FormContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(3),
  padding: 30,
  borderRadius: 20,
  background: "#fff",
}));
