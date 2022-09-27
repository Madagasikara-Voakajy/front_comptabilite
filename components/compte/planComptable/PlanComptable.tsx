import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
    Button,
    Grid,
    Stack,
    Divider,
    Typography,
    styled,
    TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import PlanComptableForm from "./organism/PlanComptableForm";
import PlanComptableList from "./organism/table/PlanComptableList";
import UploadFileIcon from '@mui/icons-material/UploadFile';
//import XLSX from 'xlsx';
import { read, utils, writeFileXLSX } from 'xlsx';

const PlanComptable = () => {
    const [colDefs, setColDefs] = useState();
    const [data, setData] = useState();
    
    const convertToJson = (headers : any, data : any) => {
        const rows: any = [];
        data.forEach((row : any) => {
            let rowData : any = {};
            row.forEach((element : any, index:any) => {
                rowData[headers[index]] = element;
            });
           rows.push(rowData);
        });
        return rows;
    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

     const importExcel = (e : any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload =(event)=> {
            //parse data; 
            const bstr=event.target?.result;
            const workBook= read(bstr,{type:"binary"});
            //const workBook=XLSX.read(bstr,{type:"binary"});
            //get first sheet
            const workSheetName=workBook.SheetNames[0];
            const workSheet=workBook.Sheets[workSheetName];
            
            // //convert to array
            const fileData= utils.sheet_to_json(workSheet,{header:1});
            const headers = fileData[0];
            // const heads = headers.map(head =>({title:head,field:head}));
            // setData(heads);

            fileData.splice(0,1);
            console.log(convertToJson(headers,fileData));
            setData(convertToJson(headers,fileData));

        }

        reader.readAsBinaryString(file);
     }

    return ( 
        <Container maxWidth="xl">
            <Stack>
                <SectionNavigation
                    direction="row"
                    justifyContent="space-between"
                    mb={1}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Link href="/">
                            <Button
                                color="info"
                                variant="text"
                                startIcon={<ArrowBackIcon />}
                            >
                                Retour 
                            </Button>
                        </Link>
                        <Button
                            onClick={handleClickOpen}
                            variant="contained"
                            size="small"
                            startIcon={<UploadFileIcon />}
                        >
                            Import PGC
                        </Button>
                    </Stack>      
                    <Typography variant="h4">Compte</Typography>
                </SectionNavigation>
                <Divider />
            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <PlanComptableForm />
                </Grid>
                <Grid item xs={12} md={8} mb={3}>
                    <PlanComptableList />
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Importation PGC</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="file"
                            fullWidth
                            variant="outlined"
                            onChange={importExcel} 
                        />
                    </DialogContent>
                <DialogActions>
                    <Button color="warning" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Enregistrer
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default PlanComptable;

export const SectionNavigation = styled(Stack)(({ }) => ({}));