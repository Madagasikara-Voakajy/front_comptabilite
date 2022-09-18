import React from 'react'
import BackOfficeLayout from '../../../../layouts/backOffice';
import DetailsFichierComptable from '../../../../components/configurations/fichier-comptable/details/DetailsFichierComptable';

const index = () => {
    return (
        <BackOfficeLayout>
            <DetailsFichierComptable />
        </BackOfficeLayout>
    )
}

export default index