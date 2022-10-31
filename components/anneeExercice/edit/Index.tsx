import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { editFiscal, getFiscal } from "../../../redux/features/fiscal-year";
import FiscalForm from "../add/addAnnee";


const IndexFiscal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (router.query.id) {
      getFiscal(router.query.id);
    }
  }, [router.query.id]);

  const getFiscal = async (id: any) => {
    await dispatch(editFiscal({ id }));
  };
  return <FiscalForm></FiscalForm>
};

export default IndexFiscal;
