function createData(
    id: string,
    CompteGénérale: string,
    CompteAuxiliaire: string,
    Libellé: string,
    Débit: number,
    Crédit: number,
    Devise : string,
    GRANTS: string,
  ) {
    return { id, CompteGénérale, CompteAuxiliaire, Libellé, Débit, Crédit, Devise, GRANTS };
  }

 export  const rows = [
    createData('1', '1011 Espèces', '1011 Espèces', 'Achat imprimante', 0, 10000, 'Ariary', 'G001'),
    createData('2', '2005 Account receivable', '2005 Account receivable', 'Achat imprimante', 12000, 0, 'Ariary', 'G001'),
    createData('3', '3014 Tax Payable', '3014 Tax Payable', 'Achat imprimante', 0, 2000, 'Ariary', 'G001'),
  ];