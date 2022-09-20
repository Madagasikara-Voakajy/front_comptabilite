import React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TypeJournalHeadCell } from "./typeJournal.interface";
import { typeJournalHeadCells } from "./typeJournal.constant";
import HeadCell from "./HeadCell";

const PlanComptableTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {typeJournalHeadCells.map((headCell: TypeJournalHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PlanComptableTableHeader;
