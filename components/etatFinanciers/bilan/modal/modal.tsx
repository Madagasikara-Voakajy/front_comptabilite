import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  styled,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import * as React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  KeyboardArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

const TableModal = () => {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}>
                Tous les PCG
              </TableCell>
              <TableCell align="right" colSpan={4}>
                Actions
              </TableCell>
              <TableCell align="center" colSpan={1}>
                PCG Séléctionnées
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {/* <ModalBody spacing={2}> */}
      <PermissionContainer
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        <PermissionList spacing={2} justifyContent="center">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="101: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="102: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="303: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="304: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="505: mon compte PCG"
            />
          </FormGroup>
        </PermissionList>
        <PermissionAction spacing={2} justifyContent="center">
          <IconButton color="accent" aria-label="move" component="span">
            {/* <KeyboardDoubleArrowLeftIcon /> */}
            <KeyboardDoubleArrowRight />
          </IconButton>
          <IconButton color="secondary" aria-label="move" component="span">
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="move" component="span">
            {/* <KeyboardDoubleArrowLeftIcon /> */}
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton color="accent" aria-label="move" component="span">
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </PermissionAction>
        <PermissionUsers spacing={2} justifyContent="center">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="103: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="104: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="105: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="201: mon compte PCG"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="302: mon compte PCG"
            />
          </FormGroup>
        </PermissionUsers>
      </PermissionContainer>
      {/* </ModalBody> */}
    </Box>
  );
};
export default TableModal;

const PermissionList = styled(Stack)(({ theme }) => ({
  border: "1px solid #E0E0E0",
  padding: theme.spacing(2),
  borderRadius: 20,
}));
const PermissionAction = styled(Stack)(({ theme }) => ({}));
const PermissionUsers = styled(Stack)(({ theme }) => ({
  border: "1px solid #E0E0E0",
  padding: theme.spacing(2),
  borderRadius: 20,
}));

const PermissionContainer = styled(Stack)(({ theme }) => ({}));
