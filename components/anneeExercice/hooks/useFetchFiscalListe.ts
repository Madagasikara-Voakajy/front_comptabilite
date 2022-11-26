import { useRouter } from "next/router";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { getFiscalListe } from "../../../redux/features/fiscal-year";

const useFetchFiscalListe = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const { idfile }: any = router.query;
  const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {};
    }
    if (router.query.orderBy && router.query.order) {
      switch (router.query.orderBy) {
        default:
          args.orderBy = {
            [<string>router.query.orderBy]: router.query.order,
          };
          break;
      }
    }
    args.where = {
      fileId: {
        equals: +idfile,
      },
    };
    dispatch(getFiscalListe({ args }));
  };
};

export default useFetchFiscalListe;
