import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getPostAnalyticList } from "../../../../redux/features/postAnalytic";
// import { getAuxiliairyAccountList } from "../../../../redux/features/auxiliairyAccount";

/**
 * @description Hook to fetch post analitique
 */
const useFetchPostAnalytique = () => {
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
    await dispatch(getPostAnalyticList({ args }));
  };
};

export default useFetchPostAnalytique;
