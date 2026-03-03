// ─── Hero metrics ───
export const heroMetrics = [
  { num: '700+', label: 'coachs formés' },
  { num: '3 000–5 000 €', label: '/mois — revenus atteints' },
  { num: '3 jours', label: '1h par jour' },
]

// ─── Target profiles ───
export const targetProfiles = {
  pt: {
    title: "Tu t'es lancé à ton compte",
    bullets: [
      'Tu as entre 0 et 1 500 €/mois de revenus en coaching',
      'Tu cherches tes premiers clients réguliers',
      'Le bouche-à-oreille ne suffit plus',
      'Tu sais coacher — mais tu ne sais pas vendre',
      'Tu tiens grâce à tes économies ou un job alimentaire',
    ],
  },
  bpt: {
    title: 'Tu as encore un pied dans le salariat',
    bullets: [
      'Tu as 3 à 5 clients perso mais tu es bloqué autour de 600–1 000 €/mois',
      'Tu travailles en salle ou en mi-temps salarié',
      'Les clients de la salle ne sont pas vraiment les tiens',
      'Tu ne vois pas comment quitter le salariat sans revenus stables',
    ],
  },
  exclusion: [
    'Tu cherches des excuses pour ne pas avancer',
    "Tu veux de la théorie sans passer à l'action",
    "Tu n'es pas prêt à bloquer 1h par jour pendant 3 jours",
  ],
}

// ─── Method cards ───
export const methodCards = [
  {
    num: '01',
    day: 'Jour 1',
    title: 'Diagnostic',
    desc: "On entre dans ton activité, tes offres, ton quotidien. On identifie exactement ce qui bloque — et pourquoi. On pose les bases du système.",
  },
  {
    num: '02',
    day: 'Jour 2',
    title: 'Système',
    desc: "On construit ton offre, on fixe les bons prix, on prépare les scripts pour trouver des clients. Sans réseaux sociaux. Sans te transformer en influenceur.",
  },
  {
    num: '03',
    day: 'Jour 3',
    title: 'Lancement',
    desc: "On lance ensemble les premières actions concrètes pour obtenir des résultats dans la semaine. Tu repars avec des clients — pas des devoirs.",
  },
]

// ─── Results ───
export const resultBullets = [
  'Savoir où trouver des clients (sans Instagram)',
  'Savoir te vendre au bon prix, sans te sentir "vendeur de tapis"',
  'Une stratégie claire et des premiers résultats concrets',
  'Objectif : +3 000 €/mois en moins de 3 mois',
]

// ─── Why free ───
export const whyFreeText = [
  "WEYOND est un organisme de formation certifié. On accompagne des coachs sportifs depuis plus de 6 ans. Ce mentorat gratuit de 3 jours, c'est notre façon de te prouver notre valeur — avant de te proposer quoi que ce soit d'autre.",
  "Si en 3 jours, on ne peut pas t'aider concrètement à avancer — alors on n'a rien à faire ensemble. Simple.",
]
export const whyFreeQuote = "Tu investis 3 heures. Nous, notre savoir-faire."

// ─── About ───
export const aboutStats = [
  { num: '700+', label: 'coachs formés' },
  { num: '+3 000 €', label: 'CA mensuel ajouté' },
  { num: 'Certifié', label: 'organisme 2024' },
]

// ─── Testimonials ───
export const testimonials = [
  {
    result: '→ 2 800 €/mois en 3 semaines',
    quote: "En 3 semaines après le mentorat, j'avais signé 4 nouveaux clients. Je savais enfin comment parler de mon offre.",
    name: 'Kévin',
    sub: 'Lyon · passé de 600 à 2 800 €/mois',
    letter: 'K',
    color: '#5E5D4A',
  },
  {
    result: 'Tarifs assumés',
    quote: "J'avais peur de paraître un vendeur de tapis. Maintenant j'annonce mes tarifs sans hésiter.",
    name: 'Joanna',
    sub: 'Bordeaux · PT indépendante',
    letter: 'J',
    color: '#3d5045',
  },
  {
    result: '+6 clients en 3 semaines',
    quote: "En 8 mois j'avais trouvé 4 clients par chance. En 3 semaines avec le système, j'en ai signé 6 de plus.",
    name: 'Alexandre',
    sub: 'Montpellier',
    letter: 'A',
    color: '#4a5258',
  },
]

// ─── Confirmation steps ───
export const confirmationSteps = [
  {
    icon: '📞',
    title: "On t'appelle",
    desc: "Un membre de notre équipe te contacte par téléphone pour apprendre à te connaître et comprendre ta situation. 15–20 min. Pas un pitch — une vraie conversation.",
    timing: 'Sous 48h',
  },
  {
    icon: '📅',
    title: 'On fixe les dates ensemble',
    desc: "On choisit ensemble les 3 jours qui te conviennent. Tu reçois une confirmation par email avec tout ce dont tu as besoin.",
    timing: 'Si sélectionné(e)',
  },
  {
    icon: '🎯',
    title: '3 jours, 1h par jour, sur Zoom',
    desc: "Juste toi et ton coach business expert. On rentre dans le concret dès le jour 1. Pas de groupe, pas de slides — de l'action.",
    timing: 'Le mentorat',
  },
]

// ─── Preparation actions (Step 3) ───
export const prepActions = [
  'Note tes 3 principaux blocages actuels — on commencera par là au jour 1',
  "Pense au chiffre que tu veux vraiment atteindre — et depuis combien de temps tu l'attends",
  "Libère 1h dans ton agenda pour les 3 jours que l'on fixera ensemble",
]

// ─── Form options (Step 2) ───
export const formOptions = {
  statut: [
    { value: 'independant', label: "Je suis indépendant(e) à plein temps" },
    { value: 'salarie_coaching', label: "Je travaille encore en salle ou en entreprise (mi-temps)" },
    { value: 'je_me_lance', label: "Je viens de me certifier, je n'ai pas encore de clients" },
  ],
  clients_payants: [
    { value: '0', label: '0 client' },
    { value: '1-3', label: '1 à 3' },
    { value: '4-8', label: '4 à 8' },
    { value: '9+', label: 'Plus de 8' },
  ],
  revenus: [
    { value: '0', label: '0 €' },
    { value: '-1000', label: 'Moins de 1 000 €' },
    { value: '1000-2000', label: '1 000 – 2 000 €' },
    { value: '2000+', label: 'Plus de 2 000 €' },
  ],
  deja_essaye: [
    'Flyers / cartes de visite',
    'Posts Instagram / réseaux sociaux',
    'Bouche-à-oreille auprès de mes proches',
    "Cours d'essai gratuits",
    'Partenariats (kinés, médecins, entreprises)',
    'Plateformes de mise en relation',
    'Rien encore — je démarre',
  ],
  ca_cible: [
    { value: '3000', label: '3 000 €/mois' },
    { value: '4000', label: '4 000 €/mois' },
    { value: '5000+', label: '5 000 €/mois ou plus' },
  ],
  delai: [
    { value: '3mois', label: 'Dans les 3 prochains mois' },
    { value: '6mois', label: 'Dans 6 mois' },
    { value: '1an', label: "Dans l'année" },
  ],
  disponibilite_zoom: [
    { value: 'oui', label: "Oui, je peux m'organiser" },
    { value: 'oui_planifier', label: "Oui, mais j'ai besoin de planifier à l'avance" },
    { value: 'pas_sur', label: 'Pas encore sûr(e)' },
  ],
}
