import * as React from "react";
import Stack from "@mui/material/Stack";
import AddFormPieceComptable from "./form/AddFormPieceComptable";
import ListeEcriture from "./table/ListeEcriture";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { JournalItemItem } from "../../../../redux/features/journalItem/journalItem.interface";
import { useRouter } from "next/router";
import useFetchPlanComptable from "../../../compte/planComptable/hooks/useFetchPlanComptable";
import useFetchCurrencyListe from "../../../configurations/currency/hooks/useFetchCurrency";
import useFetchJournalListe from "../../../journal/hooks/useFetchJournalListe";
import useFetchAuxiliaire from "../../../compte/auxiliaire/hooks/useFetchAuxiliaire";

const AddPieceComptable = () => {
  const router = useRouter();
  const { id, idae }: any = router.query;
  const { idfile, idj }: any = router.query;
  const fetchAllPCG = useFetchPlanComptable();
  const fetchAllCompteAuxiliairy = useFetchAuxiliaire();
  const fetchAllCurrency = useFetchCurrencyListe();
  const fetchAllJournal = useFetchJournalListe();

  React.useEffect(() => {
    fetchAllPCG();
    fetchAllCompteAuxiliairy();
    fetchAllCurrency();
    fetchAllJournal();
  }, []);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        journalEntry: {
          number: null,
          date: "",
          reference: "",
          journalId: +idj,
          fiscalYearId: +idae,
        },
        journalItem: [
          {
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
          },
        ],
      }}
      validationSchema={Yup.object().shape({
        journalEntry: Yup.object().shape({
          number: Yup.number().required("Champs obligatoire"),
          date: Yup.string().required("Champs obligatoire"),
          journalId: Yup.number().required("Champs obligatoire"),
          fiscalYearId: Yup.number().required("Champs obligatoire"),
        }),
        journalItem: Yup.object().shape({
          chartOfAccountId: Yup.number().required("Champs obligatoire"),
          currencyId: Yup.number().required("Champs obligatoire"),
        }),
      })}
      onSubmit={(value: any, action) => {
        console.log(value);
        // await handleSubmint(value);
        // action.resetForm();
      }}
    >
      {(formikProps) => (
        <Form>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {/* {
             formikProps.values('journalItem')
            } */}
            <AddFormPieceComptable formikProps={formikProps} />
            <ListeEcriture formikProps={formikProps} />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default AddPieceComptable;
