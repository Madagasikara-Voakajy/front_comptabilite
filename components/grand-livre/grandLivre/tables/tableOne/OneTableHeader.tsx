import React from 'react'
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import OneData, { OneEnhancedTableProps } from './one-type-variable';
import { OneheadCells } from './one-constant';

const OneTableHeader = (props: OneEnhancedTableProps) => {
    const {
        // onSelectAllClick,
        order,
        orderBy,
        // numSelected,
        // rowCount,
        onRequestSort,
      } = props;
      const createSortHandler =
        (property: keyof OneData) => (event: React.MouseEvent<unknown>) => {
          onRequestSort(event, property);
        };
  return (
    <TableHead>
    <TableRow>
      {OneheadCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.numeric ? 'right' : 'left'}
          padding={headCell.disablePadding ? 'none' : 'normal'}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : 'asc'}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
  )
}

export default OneTableHeader;