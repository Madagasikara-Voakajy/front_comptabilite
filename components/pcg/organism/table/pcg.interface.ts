import { Order } from "../../../../config/table.config";

export type PcgGlobalItem = {
	id?: string;
	name: string;
	description?: string;
};

export interface PcgHeadCell {
	disablePadding: boolean;
	id: any;
	label: string;
	numeric: boolean;
}

export interface PcgTableProps {
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof PcgGlobalItem
	) => void;
	order: Order;
	orderBy: string;
}
