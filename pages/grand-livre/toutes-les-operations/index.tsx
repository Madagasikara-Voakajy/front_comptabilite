import React from 'react';
import BackOfficeLayout from '../../../../front_end/front_comptabilite/layouts/backOffice';
import { Container } from '@mui/material';
import ToutesLesOperations from '../../../../front_end/front_comptabilite/components/grand-livre/grandLivre/toutesLesOperation';


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