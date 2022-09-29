import React from 'react'
import BackOfficeLayout from '../../../layouts/backOffice';
import { Container } from '@mui/material';
// import CurrencyList from '../../../components/configurations/currency';
import ListCurrency from '../../../components/configurations/currency';

const index = () => {
    return (
        <BackOfficeLayout>
            <Container maxWidth= "xl">
            <ListCurrency />
            </Container>
        </BackOfficeLayout>
    )
}

export default index;