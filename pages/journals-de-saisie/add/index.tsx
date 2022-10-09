import React from 'react';
import BackOfficeLayout from '../../../layouts/backOffice';
import { Container } from '@mui/material';
import AddJournal from '../../../components/journaleDeSaisie/add/addJournal';


const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
          <AddJournal />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;