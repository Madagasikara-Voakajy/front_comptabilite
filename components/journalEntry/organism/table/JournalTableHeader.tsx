import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HeadCellComponent from "./HeadCellComponent";
import { journalEntryheadCells } from "./JournalHeaderCell";
import { JournalEntryHeadCell } from "./HeadCell.interface";

const JournalEntryTableHeader = () => {
	return (
		<TableHead>
			<TableRow>
				{journalEntryheadCells.map((headCell: JournalEntryHeadCell) => (
					<HeadCellComponent
						headCell={headCell}
						key={headCell.id}
					></HeadCellComponent>
				))}
				<TableCell></TableCell>
			</TableRow>
		</TableHead>
	);
};

export default JournalEntryTableHeader;
