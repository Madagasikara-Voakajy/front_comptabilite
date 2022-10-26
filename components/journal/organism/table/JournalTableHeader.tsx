import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HeadCellComponent from "./HeadCellComponent";
import { journalheadCells } from "./JournalHeaderCell";
import { JournalHeadCell } from "./HeadCell.interface";

const JournalTableHeader = () => {
	return (
		<TableHead>
			<TableRow>
				{journalheadCells.map((headCell: JournalHeadCell) => (
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

export default JournalTableHeader;
