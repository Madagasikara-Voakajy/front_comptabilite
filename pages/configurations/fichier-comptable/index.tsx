import React from 'react'
import BackOfficeLayout from '../../../layouts/backOffice';
import FichierComptable from '../../../components/configurations/fichier-comptable/FichierComptable';

const IndexPage = () => {
  return (
    <BackOfficeLayout>
      <FichierComptable />
    </BackOfficeLayout>
  )
}

export default IndexPage