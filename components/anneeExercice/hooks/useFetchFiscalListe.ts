import { useRouter } from "next/router";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { getFiscalListe } from "../../../redux/features/fiscal-year";

const useFetchFiscalListe = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {};
    }
    if (router.query.orderBy && router.query.order) {
      switch (router.query.orderBy) {
        // case "ISO":
        //   args.orderBy = {
        //     iso: router.query.order,
        //   };
        //   break;

        // case "Symbole":
        //   args.orderBy = {
        //     symbol: router.query.order,
        //   };
        //   break;

        // case "Nom":
        //   args.orderBy = {
        //     name: router.query.order,
        //   };
        //   break;

        // case "Nombre de chiffre aprés virgule":
        //   args.orderBy = {
        //     decimalPlaces: router.query.order,
        //   };
        //   break;

        default:
          args.orderBy = {
            [<string>router.query.orderBy]: router.query.order,
          };
          break;
      }
    }
    args.where = {
      fileId: {
        equals: +id,
      },
    };
    dispatch(getFiscalListe({ args }));
  };
};

export default useFetchFiscalListe;
