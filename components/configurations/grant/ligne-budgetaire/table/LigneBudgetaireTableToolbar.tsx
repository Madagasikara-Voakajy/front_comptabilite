import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Stack, TextField, Typography } from "@mui/material";
import { TableLoading } from "../../../../shared/loading";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { editGrant } from "../../../../../redux/features/grant";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";

const LigneBudgetaireTableToolbar = () => {
  const { loading } = useAppSelector((state) => state.budgetLine);
  const { grant } = useAppSelector((state) => state.grant);
  const dispatch = useAppDispatch();
  const [key, setKey] = useState<any>("");
  const router = useRouter();
  const { id }: any = router.query;

  // initial search input value
  useEffect(() => {
    if (router?.query?.search) {
      setKey(router.query.search);
    }
  }, [router.query.search]);

  useEffect(() => {
    if (id) {
      dispatch(editGrant({ id }));
    }
  }, [id]);

  const search = (key: string) => {
    const query = { ...router.query, search: key };
    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const deboncedSearch = React.useCallback(debounce(search, 300), [
    router.query,
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
    deboncedSearch(event.target.value);
  };
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Stack
          direction="row"
          sx={{
            flex: "1 1 100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" id="tableTitle" component="div">
            List des lignes budgetaires {id && " : " + grant.code}
          </Typography>
          <TextField
            variant="outlined"
            id="search"
            name="search"
            placeholder="Recherche"
            size="small"
            value={key}
            onChange={handleChange}
          />
        </Stack>
      </Toolbar>
      {loading && <TableLoading />}
    </>
  );
};

export default LigneBudgetaireTableToolbar;
