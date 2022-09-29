import React from 'react';
import BackOfficeLayout from '../../../../layouts/backOffice';
import { Container } from '@mui/material';
import CurrencyForm from '../../../../components/configurations/currency/add/CurrencyForm';


const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
            <CurrencyForm />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;