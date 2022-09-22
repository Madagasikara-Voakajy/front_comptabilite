import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AuxiliaireHeadCell } from "./auxuliaire.interface";
import { auxiliaireheadCells } from "./auxiliaire.constante";
import HeadCell from "./HeadCell";

const AuxiliaireTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {auxiliaireheadCells.map((headCell: AuxiliaireHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default AuxiliaireTableHead;
