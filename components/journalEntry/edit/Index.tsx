import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { editJournalEntry, getJournalEntry } from "../../../redux/features/journal-entry";
import JournalEntryForm from "../add/journalForm";

const IndexJournalEntry = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (router.query.id) {
      getJournalEntry(router.query.id);
    }
  }, [router.query.id]);
  const getJournalEntry = async (id: any) => {
    await dispatch(editJournalEntry({ id }));
  };
  return <JournalEntryForm></JournalEntryForm>
};

export default IndexJournalEntry;