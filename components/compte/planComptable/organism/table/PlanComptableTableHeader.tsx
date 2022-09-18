import React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PlanComptableHeadCell } from "./planComptable.interface";
import { planComptableHeadCells } from "./planComptable.constant";
import HeadCell from "./HeadCell";

const PlanComptableTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {planComptableHeadCells.map((headCell: PlanComptableHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PlanComptableTableHeader;
