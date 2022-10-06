import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GrantHeadCell } from "./grant.interface";
import { grantheadCells } from "./grant.constante";
import HeadCell from "./HeadCell";

const GrantTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {grantheadCells.map((headCell: GrantHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default GrantTableHead;
