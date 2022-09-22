import React from 'react';
import BackOfficeLayout from '../../../../layouts/backOffice';
import { Container } from '@mui/material';
import AddDevise from '../../../../components/configurations/devise/add/addDevise';



const Index = () => {
  return (
    <BackOfficeLayout>
        <Container maxWidth="xl">
            <AddDevise />
        </Container>
    </BackOfficeLayout>
  )
}

export default Index;