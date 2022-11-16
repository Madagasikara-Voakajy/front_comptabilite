import React from "react";
import BackOfficeLayout from "../../../../../layouts/backOffice";
import { Container } from "@mui/material";
import ListBalance from "../../../../../components/grand-livre/balance/tables/ListBalance";
// import Balance from '../../../components/grand-livre/balance';

const Index = () => {
  return (
    <BackOfficeLayout>
      {/* <Balance /> */}
      <ListBalance />
    </BackOfficeLayout>
  );
};

export default Index;
