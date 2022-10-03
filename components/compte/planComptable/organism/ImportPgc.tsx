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
import UploadFileIcon from '@mui/icons-material/UploadFile';
//import XLSX from 'xlsx';
import { read, utils, writeFileXLSX } from 'xlsx';
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { createPcg } from "../../../../redux/features/pcg";
import { PcgItem } from "../../../../redux/features/pcg/pcg.interface";
import useFetchPlanComptable from "../hooks/useFetchPlanComptable";



const ImportPgc = () => {
    const [colDefs, setColDefs] = useState();
    const [data, setData] = useState();
    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();
    const fetchListPcg = useFetchPlanComptable();

    const handleClickOpen = () => { 
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };
    
    const convertToJson = (headers : any, data : any) => {
        const rows: any = [];
        data.forEach((row : any) => {
            let rowData : any = {};
            row.forEach((element : any, index:any) => {
                rowData[headers[index]] = element;
                //rowData = element;

            });
           rows.push(rowData);
        });
        return rows;
    }

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
            //console.log(convertToJson(headers,fileData));
            setData(convertToJson(headers,fileData));

        }

        reader.readAsBinaryString(file);
     }



    const handleClickSave = () => {
        console.log(data);
        data.map(async (item:PcgItem)=>{
            await dispatch(createPcg({
                code: item.code.toString(),
                name:item.name
            }));
        }); 
        fetchListPcg();
        setOpen(false); 

    }

     return(
        <Container maxWidth="xl">
            <Button
                onClick={handleClickOpen}
                variant="contained"
                size="small"
                startIcon={<UploadFileIcon />}
            >
                Import PGC
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Importation PGC</DialogTitle>
                    <DialogContent>
                    <Typography variant="body1">Choisir un fichier(*csc,xlsx) : </Typography>
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
                    <Button variant="contained" onClick={handleClickSave}>
                        Enregistrer
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
     )

}

export default ImportPgc;