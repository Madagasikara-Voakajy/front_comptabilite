import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import IndexCurrency from "../../../../../../components/configurations/currency/[id]/edit/Index";
import useBasePath from "../../../../../../hooks/useBasePath";
import BackOfficeLayout from "../../../../../../layouts/backOffice";

const EditDevise = () => {
  const basePath = useBasePath();
  return (
    <BackOfficeLayout>
      <IndexCurrency />
    </BackOfficeLayout>
  );
};

export default EditDevise;
