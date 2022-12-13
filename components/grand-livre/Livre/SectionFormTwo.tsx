import { Stack, styled, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";

const SectionFormTwoAuxilliaire = () => {
  const [key, setKey] = React.useState<any>({
    dateDebut: "",
    dateFin: "",
    fournisseur: "",
  });
  const router = useRouter();

  React.useEffect(() => {
    if (router?.query.search) {
      setKey(router.query.search);
    }
  }, [router.query.search]);

  const search = (key: string) => {
    const query = { ...router.query, search: key };
    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const debouncedSearch = React.useCallback(debounce(search, 300), [
    router.query,
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setKey({ ...key, [name]: value });
    // setKey(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <FormContainer spacing={2}>
      <CustomStack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 2, sm: 2, md: 1 }}
      >
        <TextField
          fullWidth
          id="dateDebut"
          variant="outlined"
          // label="Date début"
          name="dateDebut"
          value={key.dateDebut}
          onChange={handleChange}
          type="date"
        />
        <TextField
          fullWidth
          id="dateFin"
          variant="outlined"
          // label="Date fin"
          type="date"
          name="dateFin"
          onChange={handleChange}
          value={key.dateFin}
        />
        <TextField
          fullWidth
          id="fournisseur"
          variant="outlined"
          label="Fournisseur"
          name="fournisseur"
          onChange={handleChange}
          value={key.fournisseur}
        />
      </CustomStack>
    </FormContainer>
  );
};
//   }
// };

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
  marginTop: theme.spacing(2),
}));

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexwrap: "wrap",
  },
}));

export default SectionFormTwoAuxilliaire;
