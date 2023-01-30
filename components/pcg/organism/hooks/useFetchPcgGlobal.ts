import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { getPcgGlobalList } from "../../../../redux/features/pcgGlobal";

/**
 * @description Hook to fetch pcg global
 */
const useFetchPcgGlobal = () => {
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
		dispatch(getPcgGlobalList({ args }));
	};
};

export default useFetchPcgGlobal;
