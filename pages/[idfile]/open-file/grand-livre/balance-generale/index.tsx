import React from "react";
import Balance from "../../../../../components/grand-livre/balanceGenerale/balance";
import BackOfficeLayout from "../../../../../layouts/backOffice";
// import ListBalance from "../../../../../components/grand-livre/balance/tables/ListBalance";

const Index = () => {
  return (
    <BackOfficeLayout>
      {/* <ListBalance /> */}
      <Balance />
    </BackOfficeLayout>
  );
};

export default Index;
