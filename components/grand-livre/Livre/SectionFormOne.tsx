import { Stack, styled, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useAppSelector } from "../../../hooks/reduxHooks";

const SectionFormOneTousOperations = () => {
  const { loading } = useAppSelector((state) => state.journalItem);
  const [key, setKey] = React.useState<any>({
    filtreDate1: "",
    filtreDate2: "",
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
          id="filtreDate1"
          variant="outlined"
          // label="Date début"
          name="filtreDate1"
          value={key.filtreDate1}
          onChange={handleChange}
          type="date"
        />
        <TextField
          fullWidth
          id="filtreDate2"
          variant="outlined"
          // label="Date fin"
          name="filtreDate2"
          onChange={handleChange}
          value={key.filtreDate2}
          type="date"
        />
      </CustomStack>
    </FormContainer>
  );
};

export default SectionFormOneTousOperations;

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
