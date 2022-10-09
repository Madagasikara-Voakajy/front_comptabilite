import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LigneBudgetaireHeadCell } from "./ligneBudgetaire.interface";
import { lignebudgetaireheadCells } from "./ligneBudgetaire.constante";
import HeadCell from "./HeadCell";

const LigneBudgetaireTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {lignebudgetaireheadCells.map((headCell: LigneBudgetaireHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default LigneBudgetaireTableHead;
