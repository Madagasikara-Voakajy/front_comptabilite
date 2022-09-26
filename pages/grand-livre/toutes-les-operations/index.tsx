import React from 'react';
import { Container } from '@mui/material';
import ToutesLesOperations from '../../../components/grand-livre/grandLivre/toutesLesOperation';
import BackOfficeLayout from '../../../layouts/backOffice';


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