// concours-info.js - Informations complètes sur les concours ivoiriens

const concoursInfo = {
  ena: {
    nom: "École Nationale d'Administration (ENA)",
    description:
      "L'École Nationale d'Administration (ENA) de Côte d'Ivoire a pour mission de former les hauts fonctionnaires de l'État. Le concours d'entrée est très sélectif et exige une préparation rigoureuse.",
    date: "Le concours est généralement organisé au mois de septembre.",
    conditions:
      "Être titulaire d'au moins une licence (Bac+3) ou d'un diplôme équivalent. Être âgé de 35 ans au plus au 1er janvier de l'année du concours. Nationalité ivoirienne.",
    epreuves: [
      "Épreuve de culture générale",
      "Épreuve de droit public",
      "Épreuve d'économie",
      "Épreuve de langue étrangère (anglais, espagnol ou allemand)",
      "Épreuve de note de synthèse",
      "Épreuve de finances publiques",
      "Entretien avec le jury",
    ],
    duree: "2 jours d'épreuves écrites suivies d'un oral",
    nombrePlaces: "Variable, généralement entre 50 et 100 places",
    difficulte: "Très élevée",
    conseils: [
      "Maîtriser l'actualité nationale et internationale",
      "Développer une solide culture générale",
      "Pratiquer régulièrement les épreuves de synthèse",
      "Se préparer aux oraux avec des simulations",
    ],
    liens: {
      officiel: "http://www.ena.ci",
      informations: "https://www.fonction-publique.gouv.ci/",
      preparation: "https://www.concours.net/ena-cote-divoire",
    },
    categorie: "administratif",
  },

  ens: {
    nom: "École Normale Supérieure (ENS)",
    description:
      "L'École Normale Supérieure forme les enseignants du secondaire et les cadres de l'éducation nationale. Plusieurs filières sont accessibles selon les options.",
    date: "Concours organisé généralement en juillet-août.",
    conditions:
      "Baccalauréat ou diplôme équivalent. Être âgé de 22 ans au plus pour le cycle normal et 26 ans pour le cycle des professeurs de collège.",
    epreuves: [
      "Épreuve de français",
      "Épreuve de mathématiques",
      "Épreuve d'histoire-géographie",
      "Épreuve de langue vivante",
      "Épreuve de spécialité selon l'option",
      "Épreuve physique et sportive",
    ],
    duree: "3 jours d'épreuves",
    nombrePlaces: "Environ 300 places toutes options confondues",
    difficulte: "Élevée",
    conseils: [
      "Excellente maîtrise des programmes du secondaire",
      "Renforcer les connaissances dans la spécialité choisie",
      "Travailler la méthodologie des épreuves",
      "Pratiquer les annales des années précédentes",
    ],
    liens: {
      officiel: "http://www.ens-abidjan.ci",
      informations: "https://www.education.gouv.ci/",
      annales: "https://www.ens-concours.ci/annales",
    },
    categorie: "enseignement",
  },

  medecine: {
    nom: "Concours de Médecine (Faculté de Médecine)",
    description:
      "Le concours de première année de médecine (PCEM1) est très sélectif et ouvre l'accès aux études de médecine, pharmacie et odontologie.",
    date: "Session unique généralement en septembre.",
    conditions:
      "Baccalauréat série scientifique (C, D ou E). Aucune limite d'âge.",
    epreuves: [
      "Épreuve de biologie",
      "Épreuve de physique-chimie",
      "Épreuve de mathématiques",
      "Épreuve de français et culture générale",
    ],
    duree: "2 jours d'épreuves écrites",
    nombrePlaces: "Nombre très limité (environ 10% des candidats)",
    difficulte: "Très élevée",
    conseils: [
      "Excellente maîtrise du programme scientifique du secondaire",
      "Développer une méthode de travail rigoureuse",
      "S'entraîner intensivement aux QCM",
      "Gérer son temps et son stress",
    ],
    liens: {
      officiel: "http://www.medecine.ufhb.ci",
      informations: "https://www.sante.gouv.ci/",
      preparation: "https://www.prepa-medecine.ci",
    },
    categorie: "sante",
  },

  infirmier: {
    nom: "Concours d'Infirmier d'État",
    description:
      "Le concours d'entrée à l'École Nationale de Formation Sanitaire et Sociale permet d'accéder à la formation d'infirmier d'État.",
    date: "Concours organisé généralement en juin.",
    conditions:
      "Baccalauréat toute série. Être âgé de 18 ans au moins et 35 ans au plus.",
    epreuves: [
      "Épreuve de culture générale",
      "Épreuve de biologie",
      "Épreuve de mathématiques",
      "Épreuve de tests psychotechniques",
      "Entretien oral",
    ],
    duree: "1 journée d'écrit + oral",
    nombrePlaces: "Variable selon les années (100-200 places)",
    difficulte: "Moyenne à élevée",
    conseils: [
      "Bonnes connaissances en biologie humaine",
      "Développer ses capacités d'analyse et de synthèse",
      "Se préparer aux tests psychotechniques",
      "Montrer sa motivation lors de l'entretien",
    ],
    liens: {
      officiel: "http://www.enfss.ci",
      informations: "https://www.sante.gouv.ci/",
      programme: "https://www.enfss.ci/programme",
    },
    categorie: "sante",
  },

  polytechnique: {
    nom: "Institut National Polytechnique Félix Houphouët-Boigny (INP-HB)",
    description:
      "L'INP-HB forme des ingénieurs dans diverses spécialités : génie civil, génie électrique, génie chimique, etc.",
    date: "Concours généralement en août-septembre.",
    conditions:
      "Baccalauréat série scientifique (C, D, E) ou diplôme équivalent. Être âgé de 23 ans au plus.",
    epreuves: [
      "Épreuve de mathématiques",
      "Épreuve de physique",
      "Épreuve de chimie",
      "Épreuve de français",
      "Épreuve d'anglais",
    ],
    duree: "2 jours d'épreuves",
    nombrePlaces: "Environ 200 places toutes filières confondues",
    difficulte: "Élevée",
    conseils: [
      "Excellente maîtrise des matières scientifiques",
      "Pratiquer les exercices complexes",
      "Travailler la vitesse d'exécution",
      "Réviser le programme de terminale scientifique",
    ],
    liens: {
      officiel: "http://www.inp-hb.edu.ci",
      informations: "https://www.enseignement-superieur.gouv.ci/",
      annales: "https://www.inp-hb.edu.ci/concours",
    },
    categorie: "technique",
  },

  commerce: {
    nom: "École Supérieure de Commerce (ESC)",
    description:
      "L'ESC forme les cadres supérieurs en management, marketing, finance et commerce international.",
    date: "Concours organisé généralement en juillet.",
    conditions:
      "Baccalauréat toute série. Être âgé de 25 ans au plus. Test de sélection sur dossier.",
    epreuves: [
      "Épreuve de culture générale",
      "Épreuve de logique et mathématiques",
      "Épreuve d'anglais",
      "Épreuve d'économie",
      "Entretien de motivation",
    ],
    duree: "1 journée de tests + entretien",
    nombrePlaces: "Environ 150 places",
    difficulte: "Moyenne",
    conseils: [
      "Développer une culture économique et commerciale",
      "Pratiquer les tests de logique",
      "Maîtriser l'anglais des affaires",
      "Préparer son projet professionnel pour l'entretien",
    ],
    liens: {
      officiel: "http://www.esc.ci",
      informations: "https://www.enseignement-superieur.gouv.ci/",
      preparation: "https://www.prepa-commerce.ci",
    },
    categorie: "commerce",
  },

  droit: {
    nom: "Concours de la Magistrature et du Barreau",
    description:
      "Concours d'accès à l'École de la Magistrature et des Greffes pour devenir magistrat, ou concours du barreau pour devenir avocat.",
    date: "Concours organisé généralement en octobre.",
    conditions:
      "Master en droit ou diplôme équivalent. Être âgé de 35 ans au plus pour la magistrature.",
    epreuves: [
      "Épreuve de droit civil",
      "Épreuve de droit pénal",
      "Épreuve de droit administratif",
      "Épreuve de procédure",
      "Épreuve de culture générale",
      "Grand oral",
    ],
    duree: "3 jours d'épreuves écrites + oral",
    nombrePlaces: "Très limité (20-30 places pour la magistrature)",
    difficulte: "Très élevée",
    conseils: [
      "Excellente maîtrise des différentes branches du droit",
      "Suivre l'actualité juridique",
      "Pratiquer les cas pratiques",
      "Se préparer aux oraux avec des professionnels",
    ],
    liens: {
      officiel: "http://www.justice.gouv.ci",
      informations: "https://www.ordre-avocats.ci/",
      programme: "https://www.ecole-magistrature.ci",
    },
    categorie: "juridique",
  },

  police: {
    nom: "Concours de la Police Nationale",
    description:
      "Concours d'entrée à l'École de Police pour devenir officier, commissaire ou gardien de la paix.",
    date: "Concours organisé plusieurs fois dans l'année.",
    conditions:
      "Niveau variable selon le grade visé (Bac à Bac+3). Condition physique exigée. Nationalité ivoirienne.",
    epreuves: [
      "Épreuves physiques (course, natation, parcours d'obstacles)",
      "Épreuve de culture générale",
      "Épreuve de rédaction",
      "Tests psychotechniques",
      "Entretien oral",
      "Examen médical",
    ],
    duree: "Plusieurs jours de sélection",
    nombrePlaces: "Variable selon les besoins",
    difficulte: "Moyenne à élevée",
    conseils: [
      "Préparation physique régulière",
      "Connaissance des institutions et de l'actualité",
      "Développer ses capacités d'analyse",
      "Se préparer aux tests psychotechniques",
    ],
    liens: {
      officiel: "http://www.police.ci",
      informations: "https://www.interieur.gouv.ci/",
      conditions: "https://www.police.ci/recrutement",
    },
    categorie: "securite",
  },

  douanes: {
    nom: "Concours des Douanes Ivoiriennes",
    description:
      "Concours d'entrée à l'École Nationale des Douanes pour devenir agent ou officier des douanes.",
    date: "Concours généralement organisé en septembre.",
    conditions:
      "Niveau Bac à Bac+3 selon le grade. Nationalité ivoirienne. Être âgé de 18 à 35 ans.",
    epreuves: [
      "Épreuve de culture générale",
      "Épreuve de droit douanier et fiscal",
      "Épreuve d'économie",
      "Épreuve de comptabilité",
      "Tests psychotechniques",
      "Épreuve physique",
      "Entretien oral",
    ],
    duree: "2 à 3 jours de sélection",
    nombrePlaces: "Variable (50-100 places par promotion)",
    difficulte: "Élevée",
    conseils: [
      "Bonne connaissance de la législation douanière",
      "Culture économique solide",
      "Préparation physique",
      "Maîtriser les bases de la comptabilité",
    ],
    liens: {
      officiel: "http://www.douanes.gouv.ci",
      informations: "https://www.finances.gouv.ci/",
      programme: "https://www.douanes.gouv.ci/recrutement",
    },
    categorie: "administratif",
  },

  "culture-generale": {
    nom: "Concours Commun de la Fonction Publique",
    description:
      "Concours commun pour l'accès à divers corps de la fonction publique ivoirienne. Tests de culture générale et de compétences.",
    date: "Concours organisé généralement en novembre.",
    conditions:
      "Niveau variable selon le poste (Bac à Bac+5). Nationalité ivoirienne. Conditions d'âge variables.",
    epreuves: [
      "Tests de culture générale",
      "Épreuve de français",
      "Épreuve de logique et raisonnement",
      "Épreuve de spécialité selon le poste",
      "Tests informatiques",
      "Entretien oral",
    ],
    duree: "1 à 2 jours de sélection",
    nombrePlaces: "Variable selon les postes ouverts",
    difficulte: "Moyenne",
    conseils: [
      "Large culture générale",
      "Pratique des tests de logique",
      "Maîtrise des outils bureautiques",
      "Suivi de l'actualité nationale et internationale",
    ],
    liens: {
      officiel: "https://www.fonction-publique.gouv.ci",
      informations: "https://www.concours-fonction-publique.ci/",
      annales: "https://www.concours.net/fonction-publique",
    },
    categorie: "general",
  },
};

// Fonction pour obtenir les catégories disponibles
function getCategories() {
  const categories = new Set();
  Object.values(concoursInfo).forEach((concours) => {
    categories.add(concours.categorie);
  });
  return Array.from(categories);
}

// Fonction pour obtenir les concours par catégorie
function getConcoursByCategory(category) {
  return Object.entries(concoursInfo)
    .filter(([key, info]) => info.categorie === category)
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
}

// Fonction pour obtenir le nom de la catégorie en français
function getCategoryName(category) {
  const categoryNames = {
    administratif: "Administratif",
    enseignement: "Enseignement",
    sante: "Santé",
    technique: "Technique",
    commerce: "Commerce",
    juridique: "Juridique",
    securite: "Sécurité",
    general: "Général",
  };
  return categoryNames[category] || category;
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("concours-select");
  const categoryFilter = document.getElementById("category-filter");
  const detailsContainer = document.getElementById("concours-details");
  const concoursList = document.getElementById("concours-list");

  // Initialiser le filtre par catégorie
  initializeCategoryFilter();

  // Initialiser la liste des concours
  initializeConcoursList();

  // Gérer le changement de sélection
  if (select) {
    select.addEventListener("change", function () {
      const selectedConcours = this.value;
      if (selectedConcours && concoursInfo[selectedConcours]) {
        displayConcoursInfo(concoursInfo[selectedConcours]);
      } else {
        showNoSelection();
      }
    });
  }

  // Gérer le filtre par catégorie
  if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
      filterConcoursByCategory(this.value);
    });
  }

  function initializeCategoryFilter() {
    if (!categoryFilter) return;

    const categories = getCategories();

    // Ajouter l'option "Toutes les catégories"
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Toutes les catégories";
    categoryFilter.appendChild(allOption);

    // Ajouter les catégories
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = getCategoryName(category);
      categoryFilter.appendChild(option);
    });
  }

  function initializeConcoursList() {
    if (!concoursList) return;
    displayConcoursCards(concoursInfo);
  }

  function filterConcoursByCategory(category) {
    if (!concoursList) return;

    let filteredConcours;
    if (category === "all") {
      filteredConcours = concoursInfo;
    } else {
      filteredConcours = getConcoursByCategory(category);
    }

    displayConcoursCards(filteredConcours);
  }

  function displayConcoursCards(concoursData) {
    if (!concoursList) return;

    concoursList.innerHTML = "";

    if (Object.keys(concoursData).length === 0) {
      concoursList.innerHTML = `
        <div class="no-results">
          <p>Aucun concours trouvé dans cette catégorie.</p>
        </div>
      `;
      return;
    }

    Object.entries(concoursData).forEach(([key, info]) => {
      const card = createConcoursCard(key, info);
      concoursList.appendChild(card);
    });
  }

  function createConcoursCard(key, info) {
    const card = document.createElement("div");
    card.className = "concours-card-info";
    card.innerHTML = `
      <div class="card-header">
        <h3>${info.nom}</h3>
        <span class="categorie-badge ${info.categorie}">
          ${getCategoryName(info.categorie)}
        </span>
      </div>
      <div class="card-description">
        ${info.description}
      </div>
      <div class="card-details">
        <div class="detail-item">
          <span class="detail-label">📅 Date :</span>
          <span class="detail-value">${info.date}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">🎯 Difficulté :</span>
          <span class="detail-value">${info.difficulte}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">👥 Places :</span>
          <span class="detail-value">${info.nombrePlaces}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">⏱️ Durée :</span>
          <span class="detail-value">${info.duree}</span>
        </div>
      </div>
      <button class="btn-details" onclick="showConcoursDetails('${key}')">
        Voir les détails complets
      </button>
    `;
    return card;
  }

  function displayConcoursInfo(info) {
    let epreuvesHTML = "";
    if (info.epreuves && info.epreuves.length) {
      epreuvesHTML = "<ul>";
      info.epreuves.forEach((epreuve) => {
        epreuvesHTML += `<li>${epreuve}</li>`;
      });
      epreuvesHTML += "</ul>";
    }

    let conseilsHTML = "";
    if (info.conseils && info.conseils.length) {
      conseilsHTML = "<ul>";
      info.conseils.forEach((conseil) => {
        conseilsHTML += `<li>${conseil}</li>`;
      });
      conseilsHTML += "</ul>";
    }

    let liensHTML = "";
    if (info.liens) {
      for (const [type, url] of Object.entries(info.liens)) {
        const typeText =
          type === "officiel"
            ? "Site officiel"
            : type === "informations"
            ? "Informations"
            : type === "preparation"
            ? "Préparation"
            : type === "annales"
            ? "Annales"
            : type === "programme"
            ? "Programme"
            : "Lien";
        liensHTML += `<a href="${url}" target="_blank" class="lien-concours">${typeText}</a>`;
      }
    }

    const detailsHTML = `
      <div class="concours-info">
        <div class="info-header">
          <h3>${info.nom}</h3>
          <span class="categorie-badge ${info.categorie}">
            ${getCategoryName(info.categorie)}
          </span>
        </div>
        
        <div class="info-grid">
          <div class="info-item">
            <h4>📖 Description</h4>
            <p>${info.description}</p>
          </div>
          
          <div class="info-item">
            <h4>📅 Informations pratiques</h4>
            <p><strong>Date :</strong> ${info.date}</p>
            <p><strong>Durée :</strong> ${info.duree}</p>
            <p><strong>Difficulté :</strong> ${info.difficulte}</p>
            <p><strong>Nombre de places :</strong> ${info.nombrePlaces}</p>
          </div>
        </div>

        <div class="info-section">
          <h4>✅ Conditions d'accès</h4>
          <p>${info.conditions}</p>
        </div>

        <div class="info-section">
          <h4>📝 Épreuves du concours</h4>
          ${epreuvesHTML}
        </div>

        <div class="info-section">
          <h4>💡 Conseils de préparation</h4>
          ${conseilsHTML}
        </div>

        <div class="info-section">
          <h4>🔗 Liens utiles</h4>
          <div class="liens-utiles">
            ${liensHTML}
          </div>
        </div>
      </div>
    `;

    if (detailsContainer) {
      detailsContainer.innerHTML = detailsHTML;
    }
  }

  function showNoSelection() {
    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <div class="no-selection">
          <p>🎯 Veuillez sélectionner un concours pour voir les détails.</p>
          <p>Utilisez le menu déroulant ou parcourez les cartes ci-dessous.</p>
        </div>
      `;
    }
  }

  // Afficher les détails par défaut si un concours est sélectionné dans l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const concoursFromUrl = urlParams.get("concours");
  if (concoursFromUrl && concoursInfo[concoursFromUrl]) {
    if (select) select.value = concoursFromUrl;
    displayConcoursInfo(concoursInfo[concoursFromUrl]);
  } else {
    showNoSelection();
  }
});

// Fonction globale pour afficher les détails d'un concours (utilisée dans les boutons)
window.showConcoursDetails = function (concoursKey) {
  const info = concoursInfo[concoursKey];
  if (info) {
    const detailsContainer = document.getElementById("concours-details");
    const select = document.getElementById("concours-select");

    if (select) select.value = concoursKey;
    if (detailsContainer) {
      // Scroll vers la section des détails
      detailsContainer.scrollIntoView({ behavior: "smooth" });

      const event = new Event("change");
      if (select) select.dispatchEvent(event);
    }
  }
};

// Fonction pour rechercher des concours
window.searchConcours = function (searchTerm) {
  const filtered = {};
  Object.entries(concoursInfo).forEach(([key, info]) => {
    if (
      info.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      info.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getCategoryName(info.categorie)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      filtered[key] = info;
    }
  });

  const concoursList = document.getElementById("concours-list");
  if (concoursList) {
    displayConcoursCards(filtered);
  }
};

// Exporter pour une utilisation dans d'autres modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { concoursInfo, getCategories, getConcoursByCategory };
}
