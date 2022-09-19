import React from 'react';
import BackOfficeLayout from '../../../layouts/backOffice';
import { Container } from '@mui/material';
import ToutesLesOperations from '../../../components/grand-livre/grandLivre/toutesLesOperation';


const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
            <ToutesLesOperations />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;