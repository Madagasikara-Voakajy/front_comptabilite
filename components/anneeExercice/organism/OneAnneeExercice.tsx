import { Box, Stack, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import React from "react";
import { Visibility } from "@mui/icons-material";
import Link from "next/link";
import { useConfirm } from "material-ui-confirm";
import { deleteFiscal, editFiscal } from "../../../redux/features/fiscal-year";
import useFetchFiscalListe from "../hooks/useFetchFiscalListe";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";

const OneAnneeExercice = ({ year, locked, fileId }: any) => {
  const confirm = useConfirm();

  const router = useRouter();

  const { fiscal } = useAppSelector((state) => state.fiscal);

  const dispatch = useAppDispatch();

  const handleClickDelete = async (id: any) => {
    confirm({
      title: "Supprimer le fichier",
      description: "Voulez-vous vraiment supprimer ce fichier ?",
      cancellationText: "Annuler",
      confirmationText: "Supprimer",
      cancellationButtonProps: {
        color: "warning",
      },
      confirmationButtonProps: {
        color: "error",
      },
    })
      .then(async () => {
        await dispatch(deleteFiscal({ id }));
        useFetchFiscalListe();
      })
      .catch(() => {});
  };

  const handleClickEdit = async (id: any) => {
    // router.push(`/annee-exercice/${fiscal.id}/edit`);
    await dispatch(editFiscal({ id }));
  };

  return (
    <OneContainer>
      <Typography variant="h4" color="initial">
        {year}
      </Typography>
      {/* <Stack> */}
      <Typography variant="body2" color="gray">
        {`${locked}`}
      </Typography>
      <Typography variant="body2" color="gray">
        {`${fileId}`}
      </Typography>
      {/* </Stack> */}
      <Stack direction={"row"} justifyContent={"center"}>
        {/* <Link href={`/annee-exercice/${fiscal.id}/detail`}> */}
        <Link href={"/journals-de-saisie"}>
          <IconButton
            aria-label="open"
            component="button"
            sx={{ color: "#ddd" }}
          >
            <Visibility />
          </IconButton>
        </Link>
        <IconButton
          aria-label="edit"
          component="button"
          sx={{ color: "#ddd" }}
          onClick={() => {
            handleClickEdit(fiscal.id);
          }}
        >
          <Edit />
        </IconButton>
        <IconButton
          aria-label="delete"
          component="button"
          sx={{ color: "#ddd" }}
          onClick={() => {
            handleClickDelete(fiscal.id);
          }}
        >
          <Delete />
        </IconButton>
      </Stack>
    </OneContainer>
  );
};

export default OneAnneeExercice;

const OneContainer = styled(Box)(({ theme }) => ({
  background: "white",
  textAlign: "center",
  borderRadius: 20,
  paddingBlock: theme.spacing(2),
}));
