import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PosteAnalytiqueHeadCell } from "./posteAnalytique.interface";
import { posteanalytiqueheadCells } from "./posteAnalytique.constante";
import HeadCell from "./HeadCell";

const PosteAnalytiqueTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {posteanalytiqueheadCells.map((headCell: PosteAnalytiqueHeadCell) => (
          <HeadCell headCell={headCell} key={headCell.id}></HeadCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PosteAnalytiqueTableHead;
