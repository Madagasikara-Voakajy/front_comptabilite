import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
// import { getAuxiliairyAccountList } from "../../../../redux/features/auxiliairyAccount";

/**
 * @description Hook to fetch ligne budgetaire
 */
const useFetchLigneBudgetaire = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return async () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {};
    }
    if (router.query.orderBy && router.query.order) {
      args.orderBy = {
        [<string>router.query.orderBy]: router.query.order,
      };
    }
    // await dispatch(getAuxiliairyAccountList({ args }));
  };
};

export default useFetchLigneBudgetaire;
