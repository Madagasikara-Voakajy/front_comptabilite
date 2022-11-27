import React, { Fragment } from "react";
import { IconButton, styled } from "@mui/material";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { JournalItemItem } from "../../../../../redux/features/journalItem/journalItem.interface";
import OSSelectField from "../../../../shared/select/OSSelectField";
import OSTextField from "../../../../shared/input/OSTextField";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../../../hooks/reduxHooks";

const ListeEcriture = ({ formikProps }: any) => {
  const { pcgList } = useAppSelector((state) => state.pcg);
  const { auxiliaryAccountList } = useAppSelector(
    (state) => state.auxiliaryAccount
  );
  const router = useRouter();
  const { id, idae }: any = router.query;
  const { idfile, idj }: any = router.query;
  const { currencyListe } = useAppSelector((state) => state.currency);
  const [totalDebit, setTotalDebit] = React.useState(0);
  const [totalCredit, setTotalCredit] = React.useState(0);

  const addNewRows = () => {
    const newRows = {
      // id: new Date().getTime(),
      // isEdit: true,
      chartOfAccountId: 0,
      auxiliaryAccountId: 0,
      label: "",
      debit: 0,
      credit: 0,
      currencyId: 0,
      checkNumber: "",
      refBU: "",
      refMV: "",
      refAR: "",
      journalEntryId: 0,
    };
    formikProps.setFieldValue("journalItem", [
      ...formikProps.values.journalItem,
      newRows,
    ]);
  };

  const calculTotalDebitCredit = () => {
    formikProps.values.journalItem.map((item: JournalItemItem) => {
      const totalD = totalDebit + +item.debit!;
      setTotalDebit(totalD);
      const totalC = totalCredit + item.credit!;
      setTotalCredit(totalC);
    });
  };

  React.useEffect(() => {
    calculTotalDebitCredit();
  }, [formikProps.values.journalItem]);

  const handleDeleteTable = (index: number) => {
    console.log("delete table", index);
  };

  const handleDeleteDB = (id: number) => {
    console.log("delete Database", id);
  };

  return (
    <Container maxWidth="xl">
      <MyTableContainer>
        <Typography variant="h5">Écriture comptable</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 250 }}>Compte Générale</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Compte Auxiliaire</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Libellé</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Débit</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Crédit</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Devise</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Ref BU</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Ref MV</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Ref AR</TableCell>
                <TableCell sx={{ minWidth: 250 }}>Numéro chèque</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formikProps.values.journalItem.map(
                (row: JournalItemItem, index: number) => (
                  <Fragment key={index}>
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell padding="none" align="left">
                        <OSSelectField
                          id="type"
                          variant="filled"
                          label="Selectionner le compte"
                          name={`journalItem[${index}].chartOfAccountId`}
                          options={pcgList}
                          dataKey={"code"}
                          valueKey="id"
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>
                            {row.chartOfAccountId}
                          </ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSSelectField
                          id="type"
                          variant="filled"
                          label="Compte auxiliaire"
                          name={`journalItem[${index}].auxiliaryAccountId`}
                          options={auxiliaryAccountList}
                          dataKey={"name"}
                          valueKey="id"
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>
                            {row.auxiliaryAccountId}
                          </ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          id="label"
                          variant="filled"
                          label="Saisir le libellé"
                          name={`journalItem[${index}].label`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>{row.label}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          type="number"
                          id="Debit"
                          variant="filled"
                          label="Saisir le debit"
                          name={`journalItem[${index}].debit`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>{row.debit}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          type="number"
                          id="credit"
                          variant="filled"
                          label="Saisir le credit"
                          name={`journalItem[${index}].credit`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>{row.credit}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSSelectField
                          id="devise"
                          variant="filled"
                          label="Selectionner le devise"
                          name={`journalItem[${index}].currencyId`}
                          options={currencyListe}
                          dataKey={"name"}
                          valueKey="id"
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>{row.currencyId}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          id="label"
                          variant="filled"
                          label="Saisir le Ref BU"
                          name={`journalItem[${index}].refBU`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>{row.refBU}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          id="label"
                          variant="filled"
                          label="Saisir le Ref MV"
                          name={`journalItem[${index}].refMV`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer> {row.refMV}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          id="label"
                          variant="filled"
                          label="Saisir le Ref AR"
                          name={`journalItem[${index}].refAR`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer> {row.refAR}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <OSTextField
                          id="label"
                          variant="filled"
                          label="Saisir le Numero du chèque"
                          name={`journalItem[${index}].checkNumber`}
                        />
                        {/* {row.isEdit ? (
                        ) : (
                          <ValueContainer>{row.checkNumber}</ValueContainer>
                        )} */}
                      </TableCell>
                      <TableCell padding="none" align="left">
                        <Stack
                          sx={{ display: index == 0 ? "none" : "block" }}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                          style={{ width: 150 }}
                        >
                          {/* <IconButton
                            color="primary"
                            aria-label=""
                            component="label"
                          >
                            <DoneIcon color="info" />
                          </IconButton> */}
                          <IconButton
                            onClick={
                              row.id
                                ? () => handleDeleteDB(index)
                                : () => handleDeleteTable(index)
                            }
                            color="warning"
                            aria-label="close"
                            component="label"
                          >
                            <CloseIcon color="warning" />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                )
              )}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Button
                    onClick={addNewRows}
                    startIcon={<AddIcon />}
                    size="small"
                    color="info"
                  >
                    Ajouter une ligne
                  </Button>
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">
                  <Typography variant="body2">
                    {/* {totalDebit} */}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body2">
                    {/* {totalCredit} */}
                    </Typography>
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </MyTableContainer>
    </Container>
  );
};

export default ListeEcriture;

const MyTableContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  borderRadius: 20,
  background: "#fff",
}));

const ValueContainer = styled("span")(({ theme }) => ({}));
