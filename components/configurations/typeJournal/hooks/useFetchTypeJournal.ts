import { useRouter } from "next/router";
// import { useAppDispatch } from "../../../../../hooks/reduxHooks";
// import { getLeaveTypes } from "../../../../../redux/features/leaveType/leaveTypeSlice";

const useFetchTypeJournal = () => {
  const router = useRouter();
  // const dispatch = useAppDispatch();
  return () => {
    let args: any = {};
    if (router.query.search) {
      args.where = {
        OR: [
          {
            reference: {
              contains: router.query.search,
              mode: "insensitive",
            },
          },
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
      args.orderBy = {
        [<string>router.query.orderBy]: router.query.order,
      };
    }
    // dispatch(getLeaveTypes({ args }));
  };
};

export default useFetchTypeJournal;
