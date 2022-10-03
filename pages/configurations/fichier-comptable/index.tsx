import React from 'react'
import BackOfficeLayout from '../../../layouts/backOffice';
// import FichierComptable from '../../../components/configurations/fichier-comptable/FichierComptable';
import ListComptaFile from '../../../components/configurations/comptaFile';

const IndexPage = () => {
  return (
    <BackOfficeLayout>
      <ListComptaFile />
    </BackOfficeLayout>
  )
}

export default IndexPage