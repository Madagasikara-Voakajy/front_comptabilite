export interface PcgGlobalItem {
	id?: string;
	name?: string;
	description?: string;
}

export interface PcgGlobalInitialState {
	pcgList: PcgGlobalItem[];
	pcg: PcgGlobalItem;
	isEditing: boolean;
	loading: boolean;
	[key: string]: any;
}
