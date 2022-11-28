import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { columns } from "./table/right.constant";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const SectionRight = () => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "right",
              }}
            >
              <Typography
                variant="h6"
                id="tableTitle"
                component="div"
                margin={2}
              >
                {" "}
                Relévée bancaire{" "}
              </Typography>
              {/* <Button color="primary" variant="text">
                exporter
              </Button>
              <Button color="primary" variant="text">
                Pdf
              </Button> */}
            </Stack>

            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover tabIndex={-1}>
              <TableCell> </TableCell>
              <TableCell align="left">Solde au 01/12/2022</TableCell>
              <TableCell align="center">20000 </TableCell>
              <TableCell align="center"> - </TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="Check">
                  <CheckIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell>dd/MM/yyyy </TableCell>
              <TableCell align="left">Pièces</TableCell>
              <TableCell align="center">20000 </TableCell>
              <TableCell align="center"> 15000 </TableCell>
              <TableCell align="center">
                <IconButton color="warning" aria-label="Clear">
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell>dd/MM/yyyy </TableCell>
              <TableCell align="left">Pièces</TableCell>
              <TableCell align="center">15 000 </TableCell>
              <TableCell align="center"> - </TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="Check">
                  <CheckIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>dd/MM/yyyy </TableCell>
              <TableCell align="left">Billets</TableCell>
              <TableCell align="center">12000 </TableCell>
              <TableCell align="center"> 20000 </TableCell>
              <TableCell align="center">
                <IconButton color="warning" aria-label="Clear">
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell>dd/MM/yyyy </TableCell>
              <TableCell align="left">Pièces</TableCell>
              <TableCell align="center"> - </TableCell>
              <TableCell align="center"> - </TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="Check">
                  <CheckIcon />
                </IconButton>
              </TableCell>
            </TableRow>

            <TableRow hover tabIndex={-1}>
              <TableCell>dd/MM/yyyy </TableCell>
              <TableCell align="left">Billets</TableCell>
              <TableCell align="center">12000 </TableCell>
              <TableCell align="center"> 20000 </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell> </TableCell>
              <TableCell align="left"> </TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell> </TableCell>
              <TableCell align="left">Totaux</TableCell>
              <TableCell align="center">20000 </TableCell>
              <TableCell align="center"> 12000 </TableCell>
            </TableRow>
            <TableRow hover tabIndex={-1}>
              <TableCell> </TableCell>
              <TableCell align="left">Solde </TableCell>
              <TableCell align="center">12000 </TableCell>
              <TableCell align="center"> 20000 </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SectionRight;
