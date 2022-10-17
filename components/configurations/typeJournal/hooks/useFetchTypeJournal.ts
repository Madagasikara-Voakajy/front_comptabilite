import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getJournalTypeList } from "../../../../redux/features/journalType";

const useFetchTypeJournal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {
        // OR: [
        //   {
        //     reference: {
        //       contains: router.query.search,
        //       mode: "insensitive",
        //     },
        //   },
        //   {
        //     name: {
        //       contains: router.query.search,
        //       mode: "insensitive",
        //     },
        //   },
        // ],
      };
    }
    if (router.query.orderBy && router.query.order) {
      args.orderBy = {
        [<string>router.query.orderBy]: router.query.order,
      };
    }
    args.include = {
      defaultAccount: true,
    };
    dispatch(getJournalTypeList({ args }));
  };
};

export default useFetchTypeJournal;
