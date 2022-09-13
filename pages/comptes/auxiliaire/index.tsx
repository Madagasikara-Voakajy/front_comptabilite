import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import ListAuxiliaire from "../../../components/compte/auxiliaire/ListAuxiliaire";

const index = () => {
  return (
    <BackOfficeLayout>
      <ListAuxiliaire />
    </BackOfficeLayout>
  );
};

export default index;
