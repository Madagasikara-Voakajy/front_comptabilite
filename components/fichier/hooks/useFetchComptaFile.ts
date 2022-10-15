import { useRouter } from "next/router";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { getComptaFileListe } from "../../../redux/features/comptaFile";


const useFetchComptaFileListe = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {
        // OR: [
        //   // {
        //   //   symbol: {
        //   //     contains: router.query.search,
        //   //     mode: "insensitive",
        //   //   },
        //   // },
        // ],
      };
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
    dispatch(getComptaFileListe({ args }));
  };
};

export default useFetchComptaFileListe;
