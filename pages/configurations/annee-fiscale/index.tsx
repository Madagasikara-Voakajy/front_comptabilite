import React from 'react'
import BackOfficeLayout from '../../../layouts/backOffice';
import AnneeFiscale from '../../../components/configurations/annee-fiscale/AnneeFiscale';

const index = () => {
    return (
        <BackOfficeLayout>
            <AnneeFiscale />
        </BackOfficeLayout>
    )
}

export default index