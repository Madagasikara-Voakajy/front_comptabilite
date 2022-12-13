import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getComptaJournalItemListe } from "../../../../redux/features/journalItem";

const useFetchComptaJournalItemListe = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return async () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {
        OR: [
          // {
          //   refMV: {
          //     contains: router.query.search,
          //     mode: "intensitive",
          //   },
          // },
          // {
          //   date: {
          //     contains: router.query.search,
          //     mode: "intensitive",
          //   },
          // },
          // {
          //   auxiliaryAccountId: {
          //     contains: router.query.search,
          //     mode: "intensitive",
          //   },
          // },
        ],
      };
    }

    if (router.query.orderBy && router.query.order) {
      switch (router.query.orderBy) {
        case "Compte Auxiliaire":
          args.orderBy = {
            auxiliaryAccountId: router.query.order,
          };

        case "date":
          args.orderBy = {
            chartofAccountId: router.query.order,
          };

        case "Compte Générale":
          args.orderBy = {
            chartOfAccountId: router.query.order,
          };
          break;
        case "Débit":
          args.orderBy = {
            debit: router.query.order,
          };
          break;
        case "Crédit":
          args.orderBy = {
            credit: router.query.order,
          };
          break;
        case "Solde(N)":
          args.orderBy = {
            refBU: router.query.order,
          };
          break;
        case "Solde(N-1)":
          args.orderBy = {
            refMV: router.query.order,
          };
          break;
        default:
          args.orderBy = {
            [<string>router.query.orderBy]: router.query.order,
          };
          break;
      }
    }
    args.include = {
      auxiliaryAccount: true,
      journalEntry: true,
      currency: true,
      chartOfAccount: true,
    };
    await dispatch(getComptaJournalItemListe({ args }));
  };
};

export default useFetchComptaJournalItemListe;
