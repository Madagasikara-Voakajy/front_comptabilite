import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PcgHeadCell } from "./pcg.interface";
import { pcgGlobalHeadCells } from "./pcg.constant";
import HeadCell from "./HeadCell";

const PcgTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				{pcgGlobalHeadCells.map((headCell: PcgHeadCell) => (
					<HeadCell headCell={headCell} key={headCell.id}></HeadCell>
				))}
				<TableCell></TableCell>
			</TableRow>
		</TableHead>
	);
};

export default PcgTableHead;
