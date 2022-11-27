import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getAuxiliairyAccountList } from "../../../../redux/features/auxiliairyAccount";

/**
 * @description Hook to fetch auxiliaire
 */
const useFetchAuxiliaire = () => {
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
    dispatch(getAuxiliairyAccountList({ args }));
  };
};

export default useFetchAuxiliaire;
