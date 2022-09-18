import React from 'react'
import BackOfficeLayout from '../../../layouts/backOffice';
// import ListeDevise from '../../../components/configurations/devise/ListeDevise';
import ListDevise from '../../../components/configurations/devise/ListDevise';
import { Container } from '@mui/material';

const index = () => {
    return (
        <BackOfficeLayout>
            <Container maxWidth= "xl">
            <ListDevise />
            </Container>
        </BackOfficeLayout>
    )
}

export default index;