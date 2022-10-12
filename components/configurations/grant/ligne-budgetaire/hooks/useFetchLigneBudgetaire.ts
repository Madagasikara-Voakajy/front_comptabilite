import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
// import { getAuxiliairyAccountList } from "../../../../redux/features/auxiliairyAccount";
import { getBudgetLineList } from "../../../../../redux/features/budgetLine";

/**
 * @description Hook to fetch ligne budgetaire
 */
const useFetchLigneBudgetaire = () => {
  const router = useRouter();
  const { id }: any = router.query;
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
    if (router.query.id) {
      args.where = {
        grantId: {
          equals: parseInt(id),
        },
      };
    }

    args.include = {
      grant: true,
    };

    await dispatch(getBudgetLineList({ args }));
  };
};

export default useFetchLigneBudgetaire;
