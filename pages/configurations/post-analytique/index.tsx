import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import ListPosteAnalytique from "../../../components/configurations/post-analytique/ListPosteAnalytique";

const index = () => {
  return (
    <BackOfficeLayout>
      <ListPosteAnalytique />
    </BackOfficeLayout>
  );
};

export default index;
