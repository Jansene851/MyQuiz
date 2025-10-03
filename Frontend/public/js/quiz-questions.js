// quiz-questions.js - Base de données étendue des questions

const quizDatabase = {
  ena: [
    {
      question:
        "Quelle est la principale mission de l'École Nationale d'Administration (ENA) ?",
      options: [
        "Former les hauts fonctionnaires",
        "Former les enseignants",
        "Former les militaires",
        "Former les magistrats",
      ],
      answer: 0,
      explanation:
        "L'ENA a pour vocation de recruter et de former les hauts fonctionnaires de l'État.",
    },
    {
      question: "Quel est le concours d'entrée principal à l'ENA ?",
      options: [
        "Concours direct",
        "Concours interne",
        "Concours troisième voie",
        "Toutes ces réponses",
      ],
      answer: 3,
      explanation:
        "L'ENA propose ces trois voies d'accès pour diversifier les profils des futurs hauts fonctionnaires.",
    },
    {
      question: "Quelle est la durée typique de la formation à l'ENA ?",
      options: ["1 an", "2 ans", "3 ans", "4 ans"],
      answer: 1,
      explanation:
        "La formation à l'ENA dure généralement 24 mois, incluant stages et enseignements.",
    },
    {
      question:
        "Quel ministère supervise généralement l'ENA en Côte d'Ivoire ?",
      options: [
        "Ministère de l'Éducation Nationale",
        "Ministère de la Fonction Publique",
        "Ministère de l'Enseignement Supérieur",
        "Ministère de l'Intérieur",
      ],
      answer: 1,
      explanation:
        "L'ENA relève du Ministère de la Fonction Publique et de la Modernisation de l'Administration.",
    },
    {
      question: "Quelle qualité est essentielle pour un élève de l'ENA ?",
      options: [
        "Créativité artistique",
        "Compétence sportive",
        "Intégrité et sens de l'État",
        "Talent musical",
      ],
      answer: 2,
      explanation:
        "L'intégrité et le sens de l'État sont fondamentaux pour un futur haut fonctionnaire.",
    },
    {
      question: "Quel est le principal débouché de l'ENA ?",
      options: [
        "Administration publique",
        "Entreprises privées",
        "Organisations internationales",
        "Tous ces débouchés",
      ],
      answer: 3,
      explanation:
        "Les diplômés de l'ENA peuvent travailler dans l'administration, le privé et les organisations internationales.",
    },
    {
      question: "En quelle année l'ENA de Côte d'Ivoire a-t-elle été créée ?",
      options: ["1960", "1970", "1980", "1990"],
      answer: 1,
      explanation:
        "L'ENA de Côte d'Ivoire a été créée en 1970 pour former l'élite administrative du pays.",
    },
    {
      question: "Quelle est la particularité du concours interne de l'ENA ?",
      options: [
        "Réservé aux fonctionnaires",
        "Réservé aux militaires",
        "Réservé aux enseignants",
        "Réservé aux diplomates",
      ],
      answer: 0,
      explanation:
        "Le concours interne est accessible aux fonctionnaires justifiant d'une certaine ancienneté.",
    },
    {
      question: "Combien coûte généralement la formation à l'ENA ?",
      options: [
        "Gratuite",
        "1 million FCFA",
        "3 millions FCFA",
        "5 millions FCFA",
      ],
      answer: 0,
      explanation:
        "La formation à l'ENA est gratuite pour les élèves-fonctionnaires.",
    },
    {
      question: "Quel est le nom du directeur actuel de l'ENA ?",
      options: [
        "M. Koffi N'Guessan",
        "M. Jean-Baptiste Koffi",
        "M. Saliou Toure",
        "M. Adama Bictogo",
      ],
      answer: 2,
      explanation:
        "M. Saliou Toure est le directeur actuel de l'ENA de Côte d'Ivoire.",
    },
  ],

  ens: [
    {
      question:
        "Quelle est la mission principale de l'École Normale Supérieure (ENS) ?",
      options: [
        "Former les enseignants-chercheurs",
        "Former les administrateurs",
        "Former les ingénieurs",
        "Former les médecins",
      ],
      answer: 0,
      explanation:
        "L'ENS forme notamment les enseignants-chercheurs et les chercheurs de l'enseignement supérieur.",
    },
    {
      question: "Quel est le concours le plus commun pour intégrer l'ENS ?",
      options: [
        "Concours Direct",
        "Concours Professionnel",
        "Concours Sciences et Technologies",
        "Concours Lettres et Sciences Humaines",
      ],
      answer: 0,
      explanation:
        "Le concours direct est la voie principale d'accès pour les étudiants.",
    },
    {
      question: "Quelle est la durée typique de la formation à l'ENS ?",
      options: ["2 ans", "3 ans", "4 ans", "5 ans"],
      answer: 2,
      explanation:
        "La formation à l'ENS dure généralement 4 ans incluant la préparation à l'agrégation.",
    },
    {
      question:
        "Quel ministère supervise généralement l'ENS en Côte d'Ivoire ?",
      options: [
        "Ministère de l'Éducation Nationale",
        "Ministère de l'Enseignement Supérieur",
        "Ministère de la Fonction Publique",
        "Ministère de la Recherche Scientifique",
      ],
      answer: 1,
      explanation:
        "L'ENS relève du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique.",
    },
    {
      question:
        "Quelle qualité est particulièrement recherchée chez un candidat à l'ENS ?",
      options: [
        "Esprit critique et pédagogique",
        "Compétence sportive",
        "Talent artistique",
        "Habileté manuelle",
      ],
      answer: 0,
      explanation:
        "L'esprit critique et les aptitudes pédagogiques sont essentielles pour un futur enseignant-chercheur.",
    },
    {
      question: "Quelle est la signification du sigle ENS ?",
      options: [
        "École Normale Supérieure",
        "École Nationale Supérieure",
        "École Nouvelle des Sciences",
        "École Normale Secondaire",
      ],
      answer: 0,
      explanation: "ENS signifie École Normale Supérieure.",
    },
    {
      question: "Quel type de diplôme délivre principalement l'ENS ?",
      options: ["Master", "Licence", "Doctorat", "Brevet de Technicien"],
      answer: 0,
      explanation: "L'ENS délivre principalement le diplôme de Master.",
    },
    {
      question:
        "Quelle discipline n'est généralement pas une spécialité de l'ENS ?",
      options: [
        "Sciences de l'Éducation",
        "Littérature et Langues",
        "Sciences et Technologies",
        "Médecine Chirurgicale",
      ],
      answer: 3,
      explanation: "La médecine n'est pas une discipline enseignée à l'ENS.",
    },
    {
      question: "Quel est l'élément essentiel pour réussir le concours ENS ?",
      options: [
        "Solides connaissances disciplinaires",
        "Expérience professionnelle",
        "Relations personnelles",
        "Talent musical",
      ],
      answer: 0,
      explanation:
        "Des connaissances disciplinaires solides sont indispensables.",
    },
    {
      question: "Quelle est la particularité de la formation à l'ENS ?",
      options: [
        "Formation à la recherche et à l'enseignement",
        "Formation exclusivement théorique",
        "Formation en alternance",
        "Formation à distance",
      ],
      answer: 0,
      explanation: "L'ENS forme à la fois à la recherche et à l'enseignement.",
    },
    {
      question: "Combien de sections principales existe-t-il à l'ENS ?",
      options: ["2 sections", "3 sections", "4 sections", "5 sections"],
      answer: 1,
      explanation:
        "L'ENS comprend généralement 3 sections : Lettres, Sciences, et Sciences Humaines.",
    },
    {
      question: "Quel est le taux de réussite moyen au concours ENS ?",
      options: ["5%", "15%", "25%", "35%"],
      answer: 0,
      explanation:
        "Le concours ENS est très sélectif avec un taux de réussite d'environ 5%.",
    },
  ],

  medecine: [
    {
      question: "Quel est l'os le plus long du corps humain ?",
      options: ["Le fémur", "L'humérus", "Le tibia", "Le radius"],
      answer: 0,
      explanation:
        "Le fémur, situé dans la cuisse, est l'os le plus long et le plus fort du corps humain.",
    },
    {
      question: "Quelle hormone régule la glycémie ?",
      options: ["L'insuline", "L'adrénaline", "La thyroxine", "L'œstrogène"],
      answer: 0,
      explanation:
        "L'insuline, produite par le pancréas, permet de faire baisser la glycémie.",
    },
    {
      question: "Quelle est la fonction principale des globules rouges ?",
      options: [
        "Transport de l'oxygène",
        "Défense immunitaire",
        "Coagulation sanguine",
        "Transport des nutriments",
      ],
      answer: 0,
      explanation:
        "Les globules rouges transportent l'oxygène grâce à l'hémoglobine.",
    },
    {
      question: "Quel organe produit la bile ?",
      options: ["Le foie", "Le pancréas", "La vésicule biliaire", "L'estomac"],
      answer: 0,
      explanation:
        "Le foie produit la bile qui est stockée dans la vésicule biliaire.",
    },
    {
      question:
        "Quelle est la normale de la pression artérielle chez un adulte ?",
      options: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "130/85 mmHg"],
      answer: 0,
      explanation: "La pression artérielle normale est d'environ 120/80 mmHg.",
    },
    {
      question: "Quelle cellule est responsable de la production d'anticorps ?",
      options: [
        "Les lymphocytes B",
        "Les lymphocytes T",
        "Les macrophages",
        "Les neutrophiles",
      ],
      answer: 0,
      explanation:
        "Les lymphocytes B produisent les anticorps dans la réponse immunitaire.",
    },
    {
      question:
        "Quel est le neurotransmetteur principal du système nerveux parasympathique ?",
      options: [
        "L'acétylcholine",
        "La noradrénaline",
        "La dopamine",
        "La sérotonine",
      ],
      answer: 0,
      explanation:
        "L'acétylcholine est le neurotransmetteur du système parasympathique.",
    },
    {
      question:
        "Quelle vitamine est synthétisée par la peau sous l'effet des UV ?",
      options: ["Vitamine D", "Vitamine C", "Vitamine A", "Vitamine K"],
      answer: 0,
      explanation:
        "La vitamine D est synthétisée par la peau sous l'action des rayons UV.",
    },
    {
      question: "Quel est le rythme cardiaque normal au repos chez un adulte ?",
      options: [
        "60-100 battements/minute",
        "40-60 battements/minute",
        "100-120 battements/minute",
        "120-140 battements/minute",
      ],
      answer: 0,
      explanation:
        "Le rythme cardiaque normal au repos est de 60 à 100 battements par minute.",
    },
    {
      question: "Quelle structure relie le rein à la vessie ?",
      options: ["L'uretère", "L'urètre", "La veine rénale", "L'artère rénale"],
      answer: 0,
      explanation: "L'uretère transporte l'urine du rein vers la vessie.",
    },
    {
      question: "Quelle est la fonction des alvéoles pulmonaires ?",
      options: [
        "Les échanges gazeux",
        "La production de mucus",
        "Le filtrage de l'air",
        "La régulation de la pression",
      ],
      answer: 0,
      explanation:
        "Les alvéoles permettent les échanges d'oxygène et de dioxyde de carbone.",
    },
    {
      question: "Quel est le plus grand organe du corps humain ?",
      options: ["La peau", "Le foie", "L'intestin grêle", "Le cerveau"],
      answer: 0,
      explanation: "La peau est le plus grand organe du corps humain.",
    },
    {
      question: "Quelle glande produit l'hormone de croissance ?",
      options: ["L'hypophyse", "La thyroïde", "Les surrénales", "Le pancréas"],
      answer: 0,
      explanation: "L'hypophyse produit l'hormone de croissance.",
    },
    {
      question: "Combien de paires de côtes possède un être humain normal ?",
      options: ["12 paires", "10 paires", "8 paires", "14 paires"],
      answer: 0,
      explanation: "L'être humain possède 12 paires de côtes.",
    },
    {
      question: "Quelle est la fonction du cortex cérébral ?",
      options: [
        "La pensée consciente",
        "La coordination motrice",
        "La régulation de la température",
        "La production d'hormones",
      ],
      answer: 0,
      explanation: "Le cortex cérébral est le siège de la pensée consciente.",
    },
    {
      question: "Quel est le rôle des valves cardiaques ?",
      options: [
        "Empêcher le reflux du sang",
        "Accélérer le flux sanguin",
        "Filtrer le sang",
        "Produire des hormones",
      ],
      answer: 0,
      explanation: "Les valves empêchent le reflux du sang dans le cœur.",
    },
    {
      question: "Quelle maladie est causée par une carence en vitamine C ?",
      options: ["Le scorbut", "Le rachitisme", "Le béribéri", "L'anémie"],
      answer: 0,
      explanation: "Le scorbut est causé par une carence en vitamine C.",
    },
    {
      question: "Quel est le nom de la première vertèbre cervicale ?",
      options: ["Atlas", "Axis", "Cervicale primaire", "Occipitale"],
      answer: 0,
      explanation: "La première vertèbre cervicale s'appelle l'atlas.",
    },
  ],

  infirmier: [
    {
      question: "Quelle est la température corporelle normale ?",
      options: ["37°C", "36°C", "38°C", "35°C"],
      answer: 0,
      explanation: "La température corporelle normale se situe autour de 37°C.",
    },
    {
      question:
        "Quelle veine est généralement utilisée pour les prélèvements sanguins ?",
      options: [
        "Veine cubitale",
        "Veine jugulaire",
        "Veine fémorale",
        "Veine saphène",
      ],
      answer: 0,
      explanation:
        "La veine cubitale au niveau du pli du coude est facile d'accès pour les prélèvements.",
    },
    {
      question:
        "Quel est le premier geste à faire devant une personne inconsciente ?",
      options: [
        "Vérifier la respiration",
        "Appeler les secours",
        "Mettre en PLS",
        "Faire un massage cardiaque",
      ],
      answer: 0,
      explanation:
        "Il faut d'abord vérifier si la personne respire avant d'entreprendre toute autre action.",
    },
    {
      question:
        "Combien de temps dure généralement une formation d'infirmier en Côte d'Ivoire ?",
      options: ["3 ans", "2 ans", "4 ans", "5 ans"],
      answer: 0,
      explanation: "La formation dure 3 ans et débouche sur un diplôme d'État.",
    },
    {
      question: "Quel est le rôle principal d'un infirmier ?",
      options: [
        "Soigner et accompagner les patients",
        "Diagnostiquer les maladies",
        "Prescrire les médicaments",
        "Opérer les patients",
      ],
      answer: 0,
      explanation:
        "L'infirmier soigne, accompagne et éduque les patients sous supervision médicale.",
    },
    {
      question:
        "Quelle technique utilise-t-on pour prendre la tension artérielle ?",
      options: [
        "Auscultatoire avec brassard",
        "Palpation simple",
        "Observation visuelle",
        "Écoute directe",
      ],
      answer: 0,
      explanation:
        "La méthode auscultatoire avec brassard est la technique standard.",
    },
    {
      question: "Qu'est-ce que l'asepsie ?",
      options: [
        "Absence de micro-organismes",
        "Présence contrôlée de microbes",
        "Technique de stérilisation",
        "Méthode de désinfection",
      ],
      answer: 0,
      explanation: "L'asepsie est l'absence de micro-organismes pathogènes.",
    },
    {
      question: "Comment s'appelle la position allongée sur le dos ?",
      options: [
        "Décubitus dorsal",
        "Décubitus latéral",
        "Position de Trendelenburg",
        "Position semi-assise",
      ],
      answer: 0,
      explanation: "Le décubitus dorsal est la position allongée sur le dos.",
    },
    {
      question:
        "Quel est le matériel essentiel pour une injection intramusculaire ?",
      options: [
        "Seringue et aiguille adaptée",
        "Compresse stérile",
        "Bistouri",
        "Scalpel",
      ],
      answer: 0,
      explanation:
        "Une seringue avec aiguille adaptée au muscle visé est nécessaire.",
    },
    {
      question: "Que signifie le sigle SAMU ?",
      options: [
        "Service d'Aide Médicale Urgente",
        "Service d'Assistance Médicale Universelle",
        "Système d'Alerte Médicale d'Urgence",
        "Service d'Accueil Médical d'Urgence",
      ],
      answer: 0,
      explanation: "SAMU signifie Service d'Aide Médicale Urgente.",
    },
    {
      question:
        "Quelle est la fréquence normale de respiration chez un adulte ?",
      options: [
        "12-20 cycles/minute",
        "8-10 cycles/minute",
        "25-30 cycles/minute",
        "30-40 cycles/minute",
      ],
      answer: 0,
      explanation:
        "La fréquence respiratoire normale est de 12 à 20 cycles par minute.",
    },
    {
      question: "Quel est le premier signe d'une infection ?",
      options: [
        "Rougeur et chaleur",
        "Pâleur de la peau",
        "Baisse de température",
        "Absence de douleur",
      ],
      answer: 0,
      explanation:
        "La rougeur, la chaleur et la douleur sont des signes d'inflammation.",
    },
    {
      question: "Comment mesure-t-on la saturation en oxygène ?",
      options: [
        "Avec un saturomètre",
        "Avec un thermomètre",
        "Avec un tensiomètre",
        "Avec un stéthoscope",
      ],
      answer: 0,
      explanation:
        "Le saturomètre mesure la saturation en oxygène dans le sang.",
    },
    {
      question: "Qu'est-ce que la posologie ?",
      options: [
        "La dose et la fréquence d'un médicament",
        "La voie d'administration",
        "La date de péremption",
        "Le nom commercial du médicament",
      ],
      answer: 0,
      explanation:
        "La posologie indique la dose et la fréquence d'administration.",
    },
  ],

  polytechnique: [
    {
      question:
        "Quelle est l'équation différentielle qui décrit souvent les systèmes masse-ressort ?",
      options: ["md²x/dt² + kx = 0", "F = ma", "E = mc²", "PV = nRT"],
      answer: 0,
      explanation:
        "C'est l'équation différentielle du second ordre qui décrit le mouvement harmonique simple.",
    },
    {
      question: "Quel matériau est le plus conducteur d'électricité ?",
      options: ["Argent", "Cuivre", "Aluminium", "Or"],
      answer: 0,
      explanation:
        "L'argent est le meilleur conducteur électrique, suivi du cuivre et de l'or.",
    },
    {
      question:
        "Quelle est l'unité de la force dans le système international ?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: 0,
      explanation:
        "Le newton (N) est l'unité de force dans le système international.",
    },
    {
      question:
        "Quel théorème permet de calculer le flux électrique à travers une surface fermée ?",
      options: [
        "Théorème de Gauss",
        "Théorème de Stokes",
        "Théorème d'Ampère",
        "Théorème de Pythagore",
      ],
      answer: 0,
      explanation:
        "Le théorème de Gauss relie le flux électrique à la charge enfermée.",
    },
    {
      question:
        "Quelle structure de données suit le principe LIFO (Last In, First Out) ?",
      options: [
        "Pile (Stack)",
        "File (Queue)",
        "Liste chaînée",
        "Arbre binaire",
      ],
      answer: 0,
      explanation:
        "La pile fonctionne sur le principe du dernier entré, premier sorti (LIFO).",
    },
    {
      question:
        "Quel langage de programmation est le plus utilisé en ingénierie système ?",
      options: ["C/C++", "Python", "Java", "JavaScript"],
      answer: 0,
      explanation:
        "Le C/C++ est très utilisé pour la programmation système et embarquée.",
    },
    {
      question:
        "Quelle est la tension standard dans les réseaux électriques résidentiels en Côte d'Ivoire ?",
      options: ["220V", "110V", "380V", "240V"],
      answer: 0,
      explanation:
        "La tension standard est de 220V pour les usages domestiques en Côte d'Ivoire.",
    },
    {
      question:
        "Quel composant électronique permet de stocker de l'énergie dans un champ électrique ?",
      options: ["Condensateur", "Résistance", "Inductance", "Diode"],
      answer: 0,
      explanation: "Le condensateur stocke l'énergie dans un champ électrique.",
    },
    {
      question:
        "Quelle méthode de résolution est utilisée pour les systèmes d'équations linéaires ?",
      options: [
        "Méthode de Gauss",
        "Méthode de Newton",
        "Méthode d'Euler",
        "Méthode de Runge-Kutta",
      ],
      answer: 0,
      explanation:
        "La méthode de Gauss (ou pivot de Gauss) est classique pour les systèmes linéaires.",
    },
    {
      question:
        "Quel principe de thermodynamique énonce la conservation de l'énergie ?",
      options: [
        "Premier principe",
        "Deuxième principe",
        "Troisième principe",
        "Principe zéro",
      ],
      answer: 0,
      explanation:
        "Le premier principe de la thermodynamique énonce la conservation de l'énergie.",
    },
    {
      question: "Qu'est-ce qu'un algorithme ?",
      options: [
        "Une suite d'instructions pour résoudre un problème",
        "Un langage de programmation",
        "Un type de donnée",
        "Une structure de contrôle",
      ],
      answer: 0,
      explanation:
        "Un algorithme est une suite finie d'instructions pour résoudre un problème.",
    },
    {
      question: "Quelle est la formule de l'énergie cinétique ?",
      options: ["Ec = ½ mv²", "Ep = mgh", "W = Fd", "P = VI"],
      answer: 0,
      explanation:
        "L'énergie cinétique est donnée par Ec = ½ mv² où m est la masse et v la vitesse.",
    },
    {
      question: "Quel protocole est utilisé pour les pages web sécurisées ?",
      options: ["HTTPS", "FTP", "SMTP", "TCP"],
      answer: 0,
      explanation:
        "HTTPS (HTTP Secure) crypte les communications pour les pages web sécurisées.",
    },
    {
      question: "Quelle loi décrit la force entre deux charges électriques ?",
      options: [
        "Loi de Coulomb",
        "Loi d'Ohm",
        "Loi de Faraday",
        "Loi d'Ampère",
      ],
      answer: 0,
      explanation:
        "La loi de Coulomb décrit la force électrostatique entre deux charges.",
    },
    {
      question: "Qu'est-ce que la résistance des matériaux étudie ?",
      options: [
        "Le comportement des matériaux sous contraintes",
        "La conductivité électrique",
        "La composition chimique",
        "Les propriétés thermiques",
      ],
      answer: 0,
      explanation:
        "La résistance des matériaux étudie comment les matériaux réagissent aux forces.",
    },
    {
      question: "Quel type de moteur est le plus utilisé dans l'industrie ?",
      options: [
        "Moteur asynchrone",
        "Moteur à courant continu",
        "Moteur pas à pas",
        "Moteur linéaire",
      ],
      answer: 0,
      explanation:
        "Le moteur asynchrone est très répandu dans l'industrie pour sa robustesse.",
    },
  ],

  commerce: [
    {
      question: "Qu'est-ce que le PIB de la Côte d'Ivoire ?",
      options: [
        "Produit Intérieur Brut",
        "Produit International Brut",
        "Projet Intégré de Budget",
        "Plan d'Investissement Budgétaire",
      ],
      answer: 0,
      explanation:
        "Le PIB mesure la richesse créée par un pays pendant une année.",
    },
    {
      question:
        "Quel est le principal produit d'exportation de la Côte d'Ivoire ?",
      options: ["Le cacao", "Le café", "Le pétrole", "Le coton"],
      answer: 0,
      explanation:
        "La Côte d'Ivoire est le premier producteur mondial de cacao.",
    },
    {
      question: "Qu'est-ce que le marketing mix ?",
      options: [
        "Les 4P : Produit, Prix, Place, Promotion",
        "Les techniques de vente",
        "Les stratégies publicitaires",
        "Les études de marché",
      ],
      answer: 0,
      explanation:
        "Le marketing mix traditionnel comprend les 4P : Produit, Prix, Place, Promotion.",
    },
    {
      question: "Quelle est la monnaie de la Côte d'Ivoire ?",
      options: ["Franc CFA", "Franc ivoirien", "Eco", "Dollar CFA"],
      answer: 0,
      explanation: "La Côte d'Ivoire utilise le Franc CFA (XOF).",
    },
    {
      question: "Qu'est-ce qu'une balance commerciale excédentaire ?",
      options: [
        "Quand les exportations dépassent les importations",
        "Quand les importations dépassent les exportations",
        "Quand importations et exportations sont égales",
        "Quand il n'y a pas d'échanges",
      ],
      answer: 0,
      explanation:
        "Un excédent commercial signifie que le pays exporte plus qu'il n'importe.",
    },
    {
      question: "Quel est le rôle principal d'un manager ?",
      options: [
        "Planifier, organiser, diriger, contrôler",
        "Vendre des produits",
        "Comptabiliser les opérations",
        "Produire des biens",
      ],
      answer: 0,
      explanation:
        "Les fonctions principales du management sont PODC : Planifier, Organiser, Diriger, Contrôler.",
    },
    {
      question: "Qu'est-ce que le seuil de rentabilité ?",
      options: [
        "Le chiffre d'affaires où l'entreprise ne fait ni bénéfice ni perte",
        "Le montant maximum des ventes",
        "Le niveau minimal de production",
        "Le prix de vente minimum",
      ],
      answer: 0,
      explanation:
        "Le seuil de rentabilité est le niveau d'activité où le résultat est nul.",
    },
    {
      question: "Quelle est la première bourse d'Afrique subsaharienne ?",
      options: [
        "BRVM",
        "Bourse du Nigeria",
        "Bourse d'Afrique du Sud",
        "Bourse du Kenya",
      ],
      answer: 0,
      explanation:
        "La BRVM (Bourse Régionale des Valeurs Mobilières) basée à Abidjan est la première.",
    },
    {
      question: "Qu'est-ce que l'offre et la demande ?",
      options: [
        "Le fondement des prix en économie de marché",
        "Une stratégie marketing",
        "Une technique de production",
        "Un outil comptable",
      ],
      answer: 0,
      explanation:
        "L'offre et la demande déterminent les prix dans une économie de marché.",
    },
    {
      question:
        "Quel pourcentage du cacao mondial est produit par la Côte d'Ivoire ?",
      options: ["Environ 40%", "Environ 20%", "Environ 60%", "Environ 80%"],
      answer: 0,
      explanation: "La Côte d'Ivoire produit environ 40% du cacao mondial.",
    },
    {
      question: "Qu'est-ce qu'une PME ?",
      options: [
        "Petite et Moyenne Entreprise",
        "Prestation de Services Modernes et Efficaces",
        "Produits Manufacturés Exportables",
        "Plan de Management Évolutif",
      ],
      answer: 0,
      explanation: "PME signifie Petite et Moyenne Entreprise.",
    },
    {
      question:
        "Quel est l'impôt principal sur les sociétés en Côte d'Ivoire ?",
      options: [
        "Impôt sur les Bénéfices Industriels et Commerciaux (BIC)",
        "TVA",
        "Impôt sur le Revenu",
        "Droits de douane",
      ],
      answer: 0,
      explanation:
        "Le BIC est l'impôt principal sur les bénéfices des entreprises.",
    },
    {
      question: "Quelle est la capitale économique de la Côte d'Ivoire ?",
      options: ["Abidjan", "Yamoussoukro", "Bouaké", "Daloa"],
      answer: 0,
      explanation: "Abidjan est la capitale économique du pays.",
    },
  ],

  droit: [
    {
      question: "Quelle est la hiérarchie des normes en droit ivoirien ?",
      options: [
        "Constitution > Lois > Règlements",
        "Lois > Constitution > Règlements",
        "Règlements > Lois > Constitution",
        "Toutes les réponses sont fausses",
      ],
      answer: 0,
      explanation:
        "La Constitution est la norme suprême, suivie des lois puis des règlements.",
    },
    {
      question:
        "Quel est le temps maximum de garde à vue en droit commun en Côte d'Ivoire ?",
      options: ["48 heures", "24 heures", "72 heures", "96 heures"],
      answer: 0,
      explanation:
        "La garde à vue ne peut excéder 48 heures, renouvelable une fois sur décision du procureur.",
    },
    {
      question:
        "Quelle institution est chargée de contrôler la constitutionnalité des lois ?",
      options: [
        "Le Conseil Constitutionnel",
        "La Cour Suprême",
        "L'Assemblée Nationale",
        "Le Conseil d'État",
      ],
      answer: 0,
      explanation:
        "Le Conseil Constitutionnel veille au respect de la Constitution.",
    },
    {
      question: "Quelle est la source principale du droit civil ivoirien ?",
      options: [
        "Le Code civil",
        "La Constitution",
        "Les coutumes locales",
        "Le droit international",
      ],
      answer: 0,
      explanation: "Le Code civil est la source principale du droit civil.",
    },
    {
      question: "Qu'est-ce que la personnalité juridique ?",
      options: [
        "L'aptitude à être titulaire de droits et d'obligations",
        "Le caractère d'une personne",
        "La nationalité d'une personne",
        "La capacité de contracter",
      ],
      answer: 0,
      explanation:
        "La personnalité juridique commence à la naissance et cesse à la mort.",
    },
    {
      question: "Quel est l'âge de la majorité civile en Côte d'Ivoire ?",
      options: ["18 ans", "21 ans", "16 ans", "20 ans"],
      answer: 0,
      explanation: "La majorité civile est fixée à 18 ans en Côte d'Ivoire.",
    },
    {
      question: "Quelle est la durée du mandat présidentiel en Côte d'Ivoire ?",
      options: ["5 ans", "7 ans", "4 ans", "6 ans"],
      answer: 0,
      explanation:
        "Le mandat présidentiel est de 5 ans, renouvelable une fois.",
    },
    {
      question: "Qu'est-ce qu'un contrat synallagmatique ?",
      options: [
        "Un contrat qui crée des obligations réciproques",
        "Un contrat unilatéral",
        "Un contrat gratuit",
        "Un contrat aléatoire",
      ],
      answer: 0,
      explanation:
        "Un contrat synallagmatique engage les deux parties réciproquement.",
    },
    {
      question: "Quelle juridiction traite des litiges entre particuliers ?",
      options: [
        "Le Tribunal de Première Instance",
        "Le Tribunal Administratif",
        "La Cour d'Assises",
        "Le Conseil Constitutionnel",
      ],
      answer: 0,
      explanation:
        "Le Tribunal de Première Instance est compétent pour les litiges civils.",
    },
    {
      question: "Qu'est-ce que la responsabilité civile ?",
      options: [
        "L'obligation de réparer le dommage causé à autrui",
        "La responsabilité pénale",
        "La responsabilité administrative",
        "La responsabilité politique",
      ],
      answer: 0,
      explanation:
        "La responsabilité civile oblige à réparer les préjudices causés à autrui.",
    },
    {
      question: "Quel texte régit le droit du travail en Côte d'Ivoire ?",
      options: [
        "Le Code du travail",
        "Le Code civil",
        "Le Code de commerce",
        "La Constitution",
      ],
      answer: 0,
      explanation:
        "Le Code du travail est le texte de référence pour les relations de travail.",
    },
    {
      question: "Qu'est-ce que la preuve littérale ?",
      options: [
        "La preuve par écrit",
        "La preuve testimoniale",
        "La preuve par indice",
        "L'aveu",
      ],
      answer: 0,
      explanation:
        "La preuve littérale est constituée par tout document écrit.",
    },
    {
      question: "Quelle est la plus haute juridiction de l'ordre judiciaire ?",
      options: [
        "La Cour de Cassation",
        "Le Conseil d'État",
        "Le Tribunal de Première Instance",
        "La Cour d'Appel",
      ],
      answer: 0,
      explanation:
        "La Cour de Cassation est la plus haute juridiction de l'ordre judiciaire.",
    },
    {
      question: "Qu'est-ce qu'un délit en droit pénal ?",
      options: [
        "Une infraction de gravité moyenne",
        "Une infraction mineure",
        "Une infraction très grave",
        "Un simple contravention",
      ],
      answer: 0,
      explanation:
        "Le délit est une infraction de gravité moyenne entre la contravention et le crime.",
    },
    {
      question: "Quel principe garantit l'indépendance de la justice ?",
      options: [
        "Le principe de séparation des pouvoirs",
        "Le principe de laïcité",
        "Le principe d'égalité",
        "Le principe de solidarité",
      ],
      answer: 0,
      explanation:
        "La séparation des pouvoirs assure l'indépendance du judiciaire.",
    },
  ],

  police: [
    {
      question: "Quelle est la devise de la Police Nationale ?",
      options: [
        "Honneur et Patrie",
        "Loi et Ordre",
        "Servir et Protéger",
        "Sécurité et Justice",
      ],
      answer: 0,
      explanation:
        "'Honneur et Patrie' est la devise de la Police Nationale de Côte d'Ivoire.",
    },
    {
      question: "Quel est le numéro d'urgence de la police ?",
      options: ["111", "170", "180", "181"],
      answer: 0,
      explanation: "Le 111 est le numéro d'urgence de la Police Nationale.",
    },
    {
      question: "Quelle est la mission principale de la police judiciaire ?",
      options: [
        "Constater les infractions et en rechercher les auteurs",
        "Maintenir l'ordre public",
        "Réguler la circulation",
        "Surveiller les frontières",
      ],
      answer: 0,
      explanation: "La police judiciaire recherche les auteurs d'infractions.",
    },
    {
      question: "Quel est le grade hiérarchique le plus élevé dans la police ?",
      options: [
        "Commissaire Divisionnaire",
        "Commandant",
        "Capitaine",
        "Lieutenant",
      ],
      answer: 0,
      explanation: "Le commissaire divisionnaire est le grade le plus élevé.",
    },
    {
      question:
        "Quelle arme est couramment utilisée par la police ivoirienne ?",
      options: [
        "Pistolet automatique",
        "Fusil d'assaut",
        "Lance-roquettes",
        "Canon à eau",
      ],
      answer: 0,
      explanation: "Le pistolet automatique est l'arme de service standard.",
    },
    {
      question: "Qu'est-ce que la police technique et scientifique ?",
      options: [
        "La police qui utilise les méthodes scientifiques pour les enquêtes",
        "La police qui répare les équipements",
        "La police qui gère l'informatique",
        "La police des transmissions",
      ],
      answer: 0,
      explanation:
        "La PTS utilise la science pour recueillir et analyser les preuves.",
    },
    {
      question: "Quel est le temps de formation à l'école de police ?",
      options: ["2 ans", "1 an", "3 ans", "6 mois"],
      answer: 0,
      explanation: "La formation dure généralement 2 ans à l'École de Police.",
    },
    {
      question: "Quelle est la différence entre police et gendarmerie ?",
      options: [
        "La police est civile, la gendarmerie est militaire",
        "La police porte un uniforme bleu, la gendarmerie verte",
        "Il n'y a pas de différence",
        "La police est en ville, la gendarmerie à la campagne",
      ],
      answer: 0,
      explanation:
        "La police est une force civile, la gendarmerie est militaire.",
    },
    {
      question: "Qu'est-ce qu'une commission rogatoire ?",
      options: [
        "Une demande d'enquête faite par un juge à la police",
        "Une promotion d'officier",
        "Une convocation au tribunal",
        "Un rapport d'enquête",
      ],
      answer: 0,
      explanation:
        "C'est l'acte par lequel un juge demande à la police de mener des investigations.",
    },
    {
      question: "Quel est l'âge minimum pour intégrer la police ?",
      options: ["18 ans", "21 ans", "25 ans", "30 ans"],
      answer: 0,
      explanation:
        "Il faut avoir au moins 18 ans pour se présenter au concours de police.",
    },
    {
      question: "Que signifie CRS ?",
      options: [
        "Compagnie Républicaine de Sécurité",
        "Centre de Recherche et de Surveillance",
        "Corps de Réaction Spéciale",
        "Commandement des Réseaux de Sécurité",
      ],
      answer: 0,
      explanation: "CRS signifie Compagnie Républicaine de Sécurité.",
    },
    {
      question: "Quelle est la principale qualité requise pour un policier ?",
      options: [
        "Intégrité et sens du service public",
        "Force physique",
        "Rapidité de course",
        "Habileté au tir",
      ],
      answer: 0,
      explanation:
        "L'intégrité et le sens du service sont fondamentaux dans la police.",
    },
  ],

  douanes: [
    {
      question:
        "Quel est le principal texte réglementant les douanes en Côte d'Ivoire ?",
      options: [
        "Code des Douanes",
        "Loi de Finances",
        "Code du Commerce",
        "Code Général des Impôts",
      ],
      answer: 0,
      explanation:
        "Le Code des Douanes régit l'ensemble des opérations douanières.",
    },
    {
      question: "Qu'est-ce que la valeur en douane ?",
      options: [
        "La base de calcul des droits et taxes",
        "Le prix d'achat de la marchandise",
        "La valeur assurée de la marchandise",
        "La valeur sur le marché local",
      ],
      answer: 0,
      explanation:
        "La valeur en douane sert de base pour le calcul des droits et taxes à l'importation.",
    },
    {
      question: "Quel est le taux standard de la TVA en Côte d'Ivoire ?",
      options: ["18%", "20%", "15%", "25%"],
      answer: 0,
      explanation: "Le taux normal de TVA est de 18% en Côte d'Ivoire.",
    },
    {
      question: "Que signifie le sigle DGD ?",
      options: [
        "Déclaration Générale des Douanes",
        "Document de Gestion Douanière",
        "Direction Générale des Douanes",
        "Droit Général de Douane",
      ],
      answer: 0,
      explanation: "DGD signifie Déclaration Générale des Douanes.",
    },
    {
      question: "Qu'est-ce qu'un tarif douanier ?",
      options: [
        "La liste des droits de douane applicables",
        "Le prix des services douaniers",
        "Le barème des amendes",
        "Le coût des formalités",
      ],
      answer: 0,
      explanation:
        "Le tarif douanier indique les droits applicables à chaque marchandise.",
    },
    {
      question: "Quelle est la fonction principale des douanes ?",
      options: [
        "Percevoir les droits et taxes et contrôler les échanges",
        "Surveiller les frontières terrestres",
        "Contrôler les passeports",
        "Lutter contre l'immigration clandestine",
      ],
      answer: 0,
      explanation:
        "Les douanes perçoivent les recettes et contrôlent les échanges internationaux.",
    },
    {
      question: "Qu'est-ce que le dédouanement ?",
      options: [
        "L'ensemble des formalités pour faire passer une marchandise en douane",
        "Le paiement des droits de douane",
        "La vérification des documents",
        "L'inspection physique des marchandises",
      ],
      answer: 0,
      explanation: "Le dédouanement comprend toutes les formalités douanières.",
    },
    {
      question: "Quel document atteste de l'origine d'une marchandise ?",
      options: [
        "Certificat d'origine",
        "Facture commerciale",
        "Connaissement",
        "Liste de colisage",
      ],
      answer: 0,
      explanation:
        "Le certificat d'origine prouve le pays de fabrication de la marchandise.",
    },
    {
      question: "Qu'est-ce qu'une zone franche ?",
      options: [
        "Une zone où les marchandises bénéficient d'un régime douanier particulier",
        "Une zone sans contrôle douanier",
        "Une zone de libre-échange totale",
        "Une zone réservée aux exportations",
      ],
      answer: 0,
      explanation:
        "Les zones franches offrent des avantages douaniers et fiscaux.",
    },
    {
      question: "Quel est le principal port de Côte d'Ivoire ?",
      options: [
        "Port d'Abidjan",
        "Port de San-Pédro",
        "Port de Tabou",
        "Port d'Assinie",
      ],
      answer: 0,
      explanation: "Le port d'Abidjan est le plus important de Côte d'Ivoire.",
    },
    {
      question: "Que signifie le terme 'contrebande' ?",
      options: [
        "Introduction ou exportation clandestine de marchandises",
        "Paiement partiel des droits",
        "Déclaration inexacte de valeur",
        "Utilisation de faux documents",
      ],
      answer: 0,
      explanation:
        "La contrebande est le trafic de marchandises en fraude des lois douanières.",
    },
  ],

  "culture-generale": [
    {
      question: "Qui était le premier président de la Côte d'Ivoire ?",
      options: [
        "Félix Houphouët-Boigny",
        "Henri Konan Bédié",
        "Laurent Gbagbo",
        "Alassane Ouattara",
      ],
      answer: 0,
      explanation:
        "Félix Houphouët-Boigny fut le premier président de 1960 à 1993.",
    },
    {
      question: "Quelle est la capitale politique de la Côte d'Ivoire ?",
      options: ["Yamoussoukro", "Abidjan", "Bouaké", "Daloa"],
      answer: 0,
      explanation:
        "Yamoussoukro est la capitale politique depuis 1983, bien qu'Abidjan reste la capitale économique.",
    },
    {
      question:
        "En quelle année la Côte d'Ivoire a-t-elle obtenu son indépendance ?",
      options: ["1960", "1958", "1962", "1970"],
      answer: 0,
      explanation: "La Côte d'Ivoire a accédé à l'indépendance le 7 août 1960.",
    },
    {
      question: "Quelle est la langue officielle de la Côte d'Ivoire ?",
      options: ["Français", "Dioula", "Baoulé", "Anglais"],
      answer: 0,
      explanation: "Le français est la langue officielle de la Côte d'Ivoire.",
    },
    {
      question: "Quel est le nom de l'hymne national ivoirien ?",
      options: [
        "L'Abidjanaise",
        "La Marseillaise",
        "Le Salut National",
        "L'Hymne au Drapeau",
      ],
      answer: 0,
      explanation: "L'Abidjanaise est l'hymne national de la Côte d'Ivoire.",
    },
    {
      question: "Quelle est la monnaie de la Côte d'Ivoire ?",
      options: ["Franc CFA", "Franc ivoirien", "Dollar ivoirien", "Eco"],
      answer: 0,
      explanation: "La Côte d'Ivoire utilise le Franc CFA (XOF).",
    },
    {
      question: "Quel pays se trouve à l'est de la Côte d'Ivoire ?",
      options: ["Ghana", "Mali", "Guinée", "Liberia"],
      answer: 0,
      explanation: "Le Ghana se trouve à l'est de la Côte d'Ivoire.",
    },
    {
      question:
        "Quel est le principal produit d'exportation de la Côte d'Ivoire ?",
      options: ["Cacao", "Café", "Pétrole", "Coton"],
      answer: 0,
      explanation:
        "La Côte d'Ivoire est le premier producteur mondial de cacao.",
    },
    {
      question: "Quelle est la plus grande ville de Côte d'Ivoire ?",
      options: ["Abidjan", "Bouaké", "Daloa", "Korhogo"],
      answer: 0,
      explanation:
        "Abidjan est la plus grande ville avec plus de 5 millions d'habitants.",
    },
    {
      question: "Quel océan borde la Côte d'Ivoire ?",
      options: [
        "Océan Atlantique",
        "Océan Indien",
        "Océan Pacifique",
        "Mer Méditerranée",
      ],
      answer: 0,
      explanation: "La Côte d'Ivoire est bordée par l'Océan Atlantique.",
    },
    {
      question: "Combien de districts compte la Côte d'Ivoire ?",
      options: ["14 districts", "10 districts", "8 districts", "12 districts"],
      answer: 0,
      explanation:
        "Le territoire est divisé en 14 districts dont 2 districts autonomes.",
    },
    {
      question: "Quelle est la date de la fête nationale ivoirienne ?",
      options: ["7 août", "1er décembre", "15 octobre", "1er janvier"],
      answer: 0,
      explanation: "La fête nationale célèbre l'indépendance le 7 août 1960.",
    },
    {
      question: "Quel est le nom du Parlement ivoirien ?",
      options: [
        "Assemblée Nationale",
        "Congrès National",
        "Parlement Fédéral",
        "Chambre des Représentants",
      ],
      answer: 0,
      explanation: "Le Parlement s'appelle l'Assemblée Nationale.",
    },
    {
      question: "Quelle est la superficie de la Côte d'Ivoire ?",
      options: ["322 463 km²", "450 000 km²", "275 000 km²", "500 000 km²"],
      answer: 0,
      explanation: "La Côte d'Ivoire couvre 322 463 km².",
    },
    {
      question: "Quel fleuve traverse la Côte d'Ivoire ?",
      options: ["Bandama", "Nil", "Niger", "Sénégal"],
      answer: 0,
      explanation: "Le Bandama est le plus long fleuve de Côte d'Ivoire.",
    },
    {
      question: "Quelle est la religion majoritaire en Côte d'Ivoire ?",
      options: ["Christianisme", "Islam", "Animisme", "Hindouisme"],
      answer: 0,
      explanation: "Le christianisme est la religion la plus pratiquée.",
    },
    {
      question: "Quel est le nom du stade national de Côte d'Ivoire ?",
      options: [
        "Stade Félix Houphouët-Boigny",
        "Stade des Parrains",
        "Stade National",
        "Stade de la Paix",
      ],
      answer: 0,
      explanation: "Le stade Félix Houphouët-Boigny est le stade national.",
    },
    {
      question: "Quelle institution forme les hauts fonctionnaires ivoiriens ?",
      options: ["ENA", "ENS", "INP-HB", "Université de Cocody"],
      answer: 0,
      explanation: "L'ENA forme les hauts fonctionnaires de l'État.",
    },
    {
      question: "Quel est le nom de l'actuel président de la Côte d'Ivoire ?",
      options: [
        "Alassane Ouattara",
        "Henri Konan Bédié",
        "Laurent Gbagbo",
        "Guillaume Soro",
      ],
      answer: 0,
      explanation:
        "Alassane Ouattara est le président actuel de la Côte d'Ivoire.",
    },
    {
      question: "Quelle est la devise de la Côte d'Ivoire ?",
      options: [
        "Union, Discipline, Travail",
        "Liberté, Égalité, Fraternité",
        "Un Peuple, Un But, Une Foi",
        "Paix et Progrès",
      ],
      answer: 0,
      explanation: "La devise nationale est 'Union, Discipline, Travail'.",
    },
  ],
};

// Fonctions utilitaires pour la base de données
function getAvailableQuizzes() {
  return Object.keys(quizDatabase);
}

function getQuizQuestions(quizId) {
  return quizDatabase[quizId] || [];
}

function getQuizQuestionCount(quizId) {
  const questions = quizDatabase[quizId];
  return questions ? questions.length : 0;
}
