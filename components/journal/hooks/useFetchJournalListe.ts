import { useRouter } from "next/router";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { getJournalListe } from "../../../redux/features/journal";

const useFetchJournalListe = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {
        OR: [
          {
            name: {
              contains: router.query.search,
              mode: "insensitive",
            },
          },
        ],
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

    if (id) {
      args.where = {
        fileId: {
          equals: +id,
        },
      };
    }

    args.include = {
      file: true,
      type: true,
    };

    dispatch(getJournalListe({ args }));
  };
};

export default useFetchJournalListe;
