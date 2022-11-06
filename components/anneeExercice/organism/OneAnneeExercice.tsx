import { Box, Stack, styled, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import React from "react";
import { Visibility } from "@mui/icons-material";
import Link from "next/link";
import { useConfirm } from "material-ui-confirm";
import { deleteFiscal, editFiscal } from "../../../redux/features/fiscal-year";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useRouter } from "next/router";
import useFetchFiscalListe from "../hooks/useFetchFiscalListe";

const OneAnneeExercice = ({ year, locked, fileId, fiscalId }: any) => {
  const confirm = useConfirm();
  const router = useRouter();
  const fetchFiscalListe = useFetchFiscalListe();
  const { id }: any = router.query;
  // const { fiscal } = useAppSelector((state) => state.fiscal);

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
        fetchFiscalListe();
      })
      .catch(() => {});
  };

  const handleClickEdit = async (id: any) => {
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
        <Link href={`/fichier/${id}/annee-exercice/${fiscalId}/journal`}>
          <IconButton aria-label="open" component="button" sx={{ color: "#ddd" }}>
            <Visibility />
          </IconButton>
        </Link>
        <IconButton
          aria-label="edit"
          component="button"
          sx={{ color: "#ddd" }}
          onClick={() => {
            handleClickEdit(fiscalId);
          }}
        >
          <Edit />
        </IconButton>
        <IconButton
          aria-label="delete"
          component="button"
          sx={{ color: "#ddd" }}
          onClick={() => {
            handleClickDelete(fiscalId);
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
