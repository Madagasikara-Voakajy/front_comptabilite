import React from 'react';
import BackOfficeLayout from '../../../layouts/backOffice';
import { Container } from '@mui/material';
import Auxiliaire from '../../../components/grand-livre/auxiliaire/add/Auxiliaire';


const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
            <Auxiliaire />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;