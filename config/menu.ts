const menu = [
  {
    id: 1,
    name: "Journal de saisies",
    link: "Journal de saisies",
    icon: "history_edu",
    items: [
      // {
      //   id: 11,
      //   name: "Achat",
      //   link: "/achat",
      //   icon: "",
      // },
      // {
      //   id: 12,
      //   name: "Vente",
      //   link: "/vente",
      //   icon: "",
      // },
      // {
      //   id: 13,
      //   name: "Banque",
      //   link: "/banque",
      //   icon: "",
      // },
      // {
      //   id: 14,
      //   name: "Caisse",
      //   link: "/caisse",
      //   icon: "",
      // },
      // {
      //   id: 15,
      //   name: "Opération diverse",
      //   link: "/operation-diverse",
      //   icon: "",
      // },
      // {
      //   id: 16,
      //   name: "Paie",
      //   link: "/paie",
      //   icon: "",
      // },
      {
        id: 17,
        name: "Tous les journals de saisie",
        link: "/[idfile]/open-file/journalEntry",
        icon: "",
      },
      {
        id: 18,
        name: "Annee d'exercice",
        link: "/[idfile]/open-file/annee-exercice",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    name: "Grand livre",
    link: "/grand-livre",
    icon: "book",
    items: [
      {
        id: 21,
        name: "Toutes les opérations",
        link: "/[idfile]/open-file/grand-livre/toutes-les-operations",
        icon: "",
      },
      {
        id: 22,
        name: "Auxiliaire",
        link: "/[idfile]/open-file/grand-livre/auxiliaire",
        icon: "",
      },
      {
        id: 23,
        name: "Balance générale",
        link: "/[idfile]/open-file/grand-livre/balance-generale",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    name: "Etat Financières",
    link: "/etat-financieres",
    icon: "newspaper",
    items: [
      {
        id: 31,
        name: "Bilan ",
        link: "/[idfile]/open-file/etat-financieres/bilan",
        icon: "",
      },
      {
        id: 32,
        name: "Compte de résultat",
        link: "/[idfile]/open-file/etat-financieres/compte-resultat",
        icon: "",
      },
      {
        id: 33,
        name: "Tableau de flux de trésorerie",
        link: "/[idfile]/open-file/etat-financieres/tableau-flux-tresorerie",
        icon: "",
      },
      {
        id: 34,
        name: "Tableau de variation des capitaux propres",
        link: "/[idfile]/open-file/etat-financieres/tableau-variation-capitaux-propres",
        icon: "",
      },
      // {
      //   id: 35,
      //   name: "Annexe",
      //   link: "/etat-financieres/annexe",
      //   icon: "",
      // },
    ],
  },
  {
    id: 4,
    name: "comptes",
    link: "/comptes",
    icon: "contacts",
    items: [
      {
        id: 41,
        name: "Général",
        link: "/[idfile]/open-file/comptes/general",
        icon: "",
      },
      {
        id: 42,
        name: "Auxiliaire",
        link: "/[idfile]/open-file/comptes/auxiliaire",
        icon: "",
      },
    ],
  },
  {
    id: 5,
    name: "configurations",
    link: "/configurations",
    icon: "settings",
    items: [
      // {
      //   id: 51,
      //   name: "Fichier comptable",
      //   link: "/configurations/fichier-comptable",
      //   icon: "",
      // },
      {
        id: 52,
        name: "Année d’exercice",
        link: "/[idfile]/open-file/annee-exercice",
        icon: "",
      },
      {
        id: 53,
        name: "Année fiscale",
        link: "/[idfile]/open-file/configurations/annee-fiscale",
        icon: "",
      },
      {
        id: 54,
        name: "Devise",
        link: "/[idfile]/open-file/configurations/devise",
        icon: "",
      },
      {
        id: 55,
        name: "Type de journal",
        link: "/[idfile]/open-file/configurations/type-journal",
        icon: "",
      },
      {
        id: 56,
        name: "Mode de paiement",
        link: "/[idfile]/open-file/configurations/modeDePaiement",
        icon: "",
      },
    ],
  },
];

export default menu;
