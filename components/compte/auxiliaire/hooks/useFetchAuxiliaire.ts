import { useRouter } from "next/router";
// import { useAppDispatch } from "../../../hooks/reduxHooks";
// import { getEmployees } from "../../../redux/features/recruitmentRequest/useCase/getEmployees";

/**
 * @description Hook to fetch auxiliaire
 */
const useFetchAuxiliaire = () => {
  const router = useRouter();
  // const dispatch = useAppDispatch();

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
    // await dispatch(getEmployees({ args }));
  };
};

export default useFetchAuxiliaire;
