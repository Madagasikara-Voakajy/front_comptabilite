import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { editComptaFile, getComptaFile } from "../../../redux/features/comptaFile";
import FormFichierComptable from "../add/FormFichierComptable";


const IndexComptaFile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (router.query.id) {
      getComptaFile(router.query.id);
    }
  }, [router.query.id]);

  const getComptaFile = async (id: any) => {
    await dispatch(editComptaFile({ id }));
  };
  return <FormFichierComptable></FormFichierComptable>
};

export default IndexComptaFile;
