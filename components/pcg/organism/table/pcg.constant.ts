import { PcgHeadCell } from "./pcg.interface";

export const pcgGlobalHeadCells: readonly PcgHeadCell[] = [
	{
		id: "name",
		numeric: false,
		disablePadding: false,
		label: "Nom",
	},
	{
		id: "description",
		numeric: false,
		disablePadding: false,
		label: "Description",
	},
];
