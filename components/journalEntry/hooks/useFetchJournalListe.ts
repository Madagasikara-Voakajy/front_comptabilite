import { useRouter } from "next/router";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { getJournalEntryListe } from "../../../redux/features/journal-entry";

const useFetchJournalEntryListe = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {};
    }
    if (router.query.orderBy && router.query.order) {
      args.orderBy = {
        [<string>router.query.orderBy]: router.query.order,
      };
      // switch (router.query.orderBy) {
      //   default:
      //     args.orderBy = {
      //       [<string>router.query.orderBy]: router.query.order,
      //     };
      //     break;
      // }
    }
    args.include = {
      journal: true,
      fiscalYear: true,
    };
    dispatch(getJournalEntryListe({ args }));
  };
};

export default useFetchJournalEntryListe;
