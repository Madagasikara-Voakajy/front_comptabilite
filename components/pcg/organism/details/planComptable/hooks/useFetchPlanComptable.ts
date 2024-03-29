import { useRouter } from "next/router";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { getPcgList } from "../../../../../../redux/features/pcg";

const useFetchPlanComptable = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	return () => {
		let args: any = {};
		if (router.query.search) {
			args.where = {
				OR: [
					{
						code: {
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
		dispatch(getPcgList({ args }));
	};
};

export default useFetchPlanComptable;
