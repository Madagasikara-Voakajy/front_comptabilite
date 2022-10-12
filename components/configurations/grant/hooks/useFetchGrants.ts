import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getGrantList } from "../../../../redux/features/grant";

/**
 * @description Hook to fetch grants
 */
const useFetchGrants = () => {
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

    args.include = {
      postAnalytic: true,
    };

    await dispatch(getGrantList({ args }));
  };
};

export default useFetchGrants;
