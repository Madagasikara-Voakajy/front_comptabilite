import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { JournalItemHeadCell } from "./journalItem.interface";
import { journalItemheadCells } from "./journalItem.constante";
import HeadCell from "./HeadCell";

const JournalItemTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {journalItemheadCells.map((headCell: JournalItemHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default JournalItemTableHead;
