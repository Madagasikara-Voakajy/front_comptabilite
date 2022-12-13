// import { useRouter } from "next/router";
// import { useAppDispatch } from "../../../../hooks/reduxHooks";
// import { getJournalItemList } from "../../../../redux/features/journalItem";

// /**
//  * @description Hook to fetch journalItems
//  */
// const useFetchJournalItems = () => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();

//   return async () => {
//     let args: any = {};
//     if (router.query.search) {
//       args.where = {};
//     }
//     if (router.query.orderBy && router.query.order) {
//       args.orderBy = {
//         [<string>router.query.orderBy]: router.query.order,
//       };
//     }

//     console.log("CHECK ...");

//     args.include = {
//       chartOfAccount: true,
//       auxiliaryAccount: true,
//       currency: true,
//       journalEntry: true,
//     };

//     await dispatch(getJournalItemList({ args }));
//   };
// };

// export default useFetchJournalItems;
