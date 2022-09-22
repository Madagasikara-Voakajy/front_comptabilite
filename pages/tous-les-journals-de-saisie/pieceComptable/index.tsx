import React from 'react';
import BackOfficeLayout from '../../../layouts/backOffice';
import { Container } from '@mui/material';
import AddPieceComptable from '../../../components/journaleDeSaisie/pieceComptable/add/addPieceComptable';


const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
            <AddPieceComptable />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;