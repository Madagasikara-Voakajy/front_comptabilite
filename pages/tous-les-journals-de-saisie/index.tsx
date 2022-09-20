import React from 'react';
import BackOfficeLayout from '../../layouts/backOffice';
import { Container } from '@mui/material';
import ListJournaux from '../../components/journaleDeSaisie/ListJournaux';



const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
            <ListJournaux />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;