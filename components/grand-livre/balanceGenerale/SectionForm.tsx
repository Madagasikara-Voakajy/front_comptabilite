import { Stack, styled, TextField } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import { debounce } from "lodash";

const SectionForm = () => {
  const { loading } = useAppSelector((state) => state.journalItem);
  const [key, setKey] = React.useState<any>("");
  // const [age, setAge] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    if (router?.query?.search) {
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
    setKey(event.target.value);
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
          variant="outlined"
          id="search"
          name="search"
          placeholder="Recherche"
          size="small"
          value={key}
          onChange={handleChange}
        />
      </CustomStack>
    </FormContainer>
  );
};

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

export default SectionForm;
