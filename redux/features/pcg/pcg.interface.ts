export interface PcgItem {
	id?: string;
	code?: string;
	name?: string;
	PCGId?: string;
}

export interface PcgInitialState {
	pcgList: PcgItem[];
	pcg: PcgItem;
	isEditing: boolean;
	loading: boolean;
	[key: string]: any;
}
