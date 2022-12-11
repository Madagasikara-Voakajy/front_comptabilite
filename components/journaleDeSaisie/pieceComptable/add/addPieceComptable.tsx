import * as React from "react";
import Stack from "@mui/material/Stack";
import AddFormPieceComptable from "./form/AddFormPieceComptable";
import ListeEcriture from "./table/ListeEcriture";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { JournalItemItem } from "../../../../redux/features/journalItem/journalItem.interface";
import { useRouter } from "next/router";
import useFetchPlanComptable from "../../../compte/planComptable/hooks/useFetchPlanComptable";
import { createJournalEntry } from "../../../../redux/features/journal-entry";
import { createJournalItem } from "../../../../redux/features/journalItem";
import useFetchCurrencyListe from "../../../configurations/currency/hooks/useFetchCurrency";
import useFetchJournalListe from "../../../journal/hooks/useFetchJournalListe";
import useFetchAuxiliaire from "../../../compte/auxiliaire/hooks/useFetchAuxiliaire";
import { useAppDispatch } from "../../../../hooks/reduxHooks";

interface FromValue {
  journalEntry: {
    number: number;
    date: string;
    reference: string;
    journalId: number;
    fiscalYearId: number;
  };
  journalItem: [
    {
      chartOfAccountId: number;
      auxiliaryAccountId: number;
      label: string;
      debit: number;
      credit: number;
      currencyId: number;
      checkNumber: string;
      refBU: string;
      refMV: string;
      refAR: string;
      journalEntryId: number;
    }
  ];
}

const AddPieceComptable = () => {
  const router = useRouter();
  const { id, idae }: any = router.query;
  const { idfile, idj }: any = router.query;
  const fetchAllPCG = useFetchPlanComptable();
  const fetchAllCompteAuxiliairy = useFetchAuxiliaire();
  const fetchAllCurrency = useFetchCurrencyListe();
  const fetchAllJournal = useFetchJournalListe();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    fetchAllPCG();
    fetchAllCompteAuxiliairy();
    fetchAllCurrency();
    fetchAllJournal();
  }, []);

  const handleSubmint = async (value: FromValue) => {
    try {
      const journalEntry = await dispatch(
        createJournalEntry(value.journalEntry)
      ).unwrap();
      await Promise.all(
        value.journalItem.map(async (journal) => {
          const journalTmp: JournalItemItem = {
            chartOfAccountId: journal.chartOfAccountId,
            auxiliaryAccountId: journal.auxiliaryAccountId,
            label: journal.label,
            debit: journal.debit,
            credit: journal.credit,
            currencyId: journal.currencyId,
            checkNumber: journal.checkNumber,
            refBU: journal.refBU,
            refMV: journal.refMV,
            refAR: journal.refAR,
            journalEntryId: journalEntry.id,
          };
          await dispatch(createJournalItem(journalTmp));
        })
      );

      router.push(`/${idfile}/open-file/annee-exercice/${idae}/journal`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        journalEntry: {
          number: 0,
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
        journalItem: Yup.array().of(
          Yup.object().shape({
            chartOfAccountId: Yup.number().required("Champs obligatoire"),
            currencyId: Yup.number().required("Champs obligatoire"),
          })
        ),
      })}
      onSubmit={(value: any, action) => {
        handleSubmint(value);
        action.resetForm();
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
