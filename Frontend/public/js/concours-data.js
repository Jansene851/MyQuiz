// concours-data.js

const concoursData = {
  // Concours administratifs
  ena: {
    id: "ena",
    nom: "École Nationale d'Administration (ENA)",
    categorie: "administratif",
    description:
      "Formation des cadres supérieurs de l'administration publique ivoirienne. L'ENA assure la formation initiale et continue des hauts fonctionnaires et constitue un instrument essentiel de la réforme de l'État.",
    dateConcours: "15 Juillet 2024",
    dateInscription: "1er Mars - 30 Avril 2024",
    conditions: [
      "Être de nationalité ivoirienne",
      "Être âgé de 35 ans au plus au 31 décembre de l'année du concours",
      "Détenir au moins une licence (Bac+3) ou diplôme équivalent",
      "Jouir de ses droits civiques et avoir un casier judiciaire vierge",
      "Être physiquement apte pour la fonction publique",
    ],
    epreuves: [
      "Culture générale (coefficient 3)",
      "Droit public et administratif (coefficient 3)",
      "Économie et finances publiques (coefficient 2)",
      "Langue étrangère (anglais) - coefficient 2",
      "Épreuve de spécialité selon la filière - coefficient 4",
      "Entretien avec le jury - coefficient 3",
    ],
    nombrePlaces: "120 places",
    dureeFormation: "2 ans",
    lienOfficiel: "http://www.ena.ci",
    contact: "info@ena.ci - (+225) 27 20 21 22 23",
    fraisInscription: "25 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké", "Daloa", "Korhogo", "San-Pédro"],
    debouches: [
      "Administrateur civil",
      "Attaché d'administration",
      "Inspecteur des impôts",
      "Cadre des collectivités territoriales",
    ],
  },

  ens: {
    id: "ens",
    nom: "École Normale Supérieure (ENS)",
    categorie: "administratif",
    description:
      "Établissement de formation des enseignants du second cycle et des cadres de l'éducation nationale. L'ENS contribue à la formation des futurs professeurs de collèges et lycées.",
    dateConcours: "20 Juillet 2024",
    dateInscription: "1er Mars - 15 Mai 2024",
    conditions: [
      "Être de nationalité ivoirienne",
      "Être âgé de 30 ans au plus au 31 décembre de l'année du concours",
      "Détenir au moins une licence (Bac+3) dans la discipline concernée",
      "Avoir une aptitude physique et morale à l'enseignement",
      "Maîtriser la langue française",
    ],
    epreuves: [
      "Culture générale (coefficient 3)",
      "Dissertation philosophique (coefficient 2)",
      "Épreuve de spécialité (Mathématiques, Lettres, Sciences, etc.) - coefficient 4",
      "Langue vivante (anglais) - coefficient 2",
      "Psychopédagogie - coefficient 2",
      "Entretien oral - coefficient 2",
    ],
    nombrePlaces: "200 places",
    dureeFormation: "3 ans",
    lienOfficiel: "http://www.ens.ci",
    contact: "concours@ens.ci - (+225) 27 20 24 25 26",
    fraisInscription: "20 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké", "Daloa", "Man"],
    debouches: [
      "Professeur de collège et lycée",
      "Conseiller pédagogique",
      "Inspecteur de l'éducation nationale",
      "Cadre administratif de l'éducation",
    ],
  },

  medecine: {
    id: "medecine",
    nom: "Concours de Médecine",
    categorie: "sante",
    description:
      "Concours d'entrée en première année de médecine (PCEM1). Formation des futurs médecins dans les facultés de médecine de Côte d'Ivoire. Formation exigeante et sélective.",
    dateConcours: "10 Août 2024",
    dateInscription: "15 Avril - 30 Juin 2024",
    conditions: [
      "Être titulaire du Baccalauréat série C ou D de moins de 2 ans",
      "Être âgé de 24 ans au plus au 31 décembre de l'année du concours",
      "Avoir une moyenne minimum de 12/20 au Baccalauréat",
      "Certificat médical d'aptitude physique et mentale",
      "Réussir les tests d'orientation",
    ],
    epreuves: [
      "Biologie cellulaire et moléculaire (coefficient 4)",
      "Chimie organique et minérale (coefficient 3)",
      "Physique (coefficient 3)",
      "Mathématiques (coefficient 2)",
      "Culture générale et raisonnement logique (coefficient 2)",
    ],
    nombrePlaces: "350 places",
    dureeFormation: "7 ans (médecine générale)",
    lienOfficiel: "http://www.ufr-sms.ci",
    contact: "medecine@ufr-sms.ci - (+225) 27 20 27 28 29",
    fraisInscription: "30 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké"],
    debouches: [
      "Médecin généraliste",
      "Spécialiste (après internat)",
      "Chercheur en sciences médicales",
      "Médecin de santé publique",
    ],
  },

  infirmier: {
    id: "infirmier",
    nom: "Concours d'Infirmier d'État",
    categorie: "sante",
    description:
      "Formation des infirmiers diplômés d'État, professionnels de santé essentiels dans le système de soins. Formation pratique et théorique de qualité.",
    dateConcours: "5 Septembre 2024",
    dateInscription: "1er Mai - 15 Juillet 2024",
    conditions: [
      "Être titulaire du Baccalauréat (toutes séries) ou diplôme équivalent",
      "Être âgé de 28 ans au plus au 31 décembre de l'année du concours",
      "Certificat médical d'aptitude physique et mentale",
      "Réussir les tests psychotechniques",
      "Avoir un casier judiciaire vierge",
    ],
    epreuves: [
      "Biologie humaine (coefficient 3)",
      "Physique-Chimie (coefficient 2)",
      "Culture générale sanitaire et sociale (coefficient 3)",
      "Tests psychotechniques (coefficient 2)",
      "Entretien oral (coefficient 2)",
    ],
    nombrePlaces: "180 places",
    dureeFormation: "3 ans",
    lienOfficiel: "http://www.ecole-infirmiers.ci",
    contact: "infirmier@ecole.ci - (+225) 27 20 30 31 32",
    fraisInscription: "15 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké", "Daloa", "Korhogo"],
    debouches: [
      "Infirmier d'État en milieu hospitalier",
      "Infirmier en santé publique",
      "Infirmier scolaire",
      "Cadre de santé (après formation complémentaire)",
    ],
  },

  polytechnique: {
    id: "polytechnique",
    nom: "Institut National Polytechnique",
    categorie: "technique",
    description:
      "Formation d'ingénieurs dans diverses spécialités techniques et technologiques. L'INP prépare aux métiers d'ingénieur dans les secteurs industriels et technologiques.",
    dateConcours: "25 Juillet 2024",
    dateInscription: "1er Avril - 20 Juin 2024",
    conditions: [
      "Être titulaire du Baccalauréat série C, D, E ou technique",
      "Être âgé de 25 ans au plus au 31 décembre de l'année du concours",
      "Avoir une moyenne minimum de 11/20 au Baccalauréat",
      "Aptitude pour les études techniques et scientifiques",
    ],
    epreuves: [
      "Mathématiques (coefficient 4)",
      "Physique (coefficient 3)",
      "Chimie (coefficient 2)",
      "Français (coefficient 2)",
      "Anglais (coefficient 1)",
    ],
    nombrePlaces: "280 places",
    dureeFormation: "5 ans",
    lienOfficiel: "http://www.inp.ci",
    contact: "polytechnique@inp.ci - (+225) 27 20 33 34 35",
    fraisInscription: "25 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké", "Yamoussoukro"],
    specialites: [
      "Génie Civil",
      "Génie Électrique",
      "Génie Mécanique",
      "Génie Informatique",
      "Génie Chimique",
    ],
  },

  police: {
    id: "police",
    nom: "Concours de la Police Nationale",
    categorie: "securite",
    description:
      "Recrutement des officiers, sous-officiers et agents de la Police Nationale. Formation aux métiers de la sécurité publique et de la protection des citoyens.",
    dateConcours: "15 Août 2024",
    dateInscription: "1er Mars - 31 Mai 2024",
    conditions: [
      "Être de nationalité ivoirienne",
      "Être âgé de 18 à 35 ans selon le grade",
      "Taille minimum: 1.70m (hommes), 1.65m (femmes)",
      "Casier judiciaire vierge",
      "Aptitude physique et médicale",
      "Niveau d'étude variable selon le grade visé",
    ],
    epreuves: [
      "Culture générale (coefficient 3)",
      "Tests psychotechniques (coefficient 2)",
      "Épreuves sportives (course, endurance) - coefficient 3",
      "Épreuve de personnalité (coefficient 2)",
      "Entretien avec le jury (coefficient 2)",
    ],
    nombrePlaces: "500 places (tous grades confondus)",
    dureeFormation: "18 mois à 2 ans selon le grade",
    lienOfficiel: "http://www.police.ci",
    contact: "recrutement@police.ci - (+225) 27 20 36 37 38",
    fraisInscription: "10 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké", "Daloa", "Korhogo", "San-Pédro"],
    grades: [
      "Commissaire de police (Bac+4)",
      "Officier de police (Bac+2)",
      "Agent de police (Bac)",
    ],
  },

  douanes: {
    id: "douanes",
    nom: "Concours des Douanes",
    categorie: "securite",
    description:
      "Recrutement des agents et officiers des douanes. Métiers liés au contrôle des frontières, à la lutte contre la fraude et à la perception des droits et taxes.",
    dateConcours: "20 Août 2024",
    dateInscription: "1er Avril - 15 Juin 2024",
    conditions: [
      "Être de nationalité ivoirienne",
      "Être âgé de 18 à 32 ans selon le grade",
      "Casier judiciaire vierge",
      "Aptitude physique et médicale",
      "Niveau d'étude variable selon le grade",
    ],
    epreuves: [
      "Culture générale (coefficient 3)",
      "Droit douanier et fiscal (coefficient 3)",
      "Économie et commerce international (coefficient 2)",
      "Tests psychotechniques (coefficient 2)",
      "Épreuves sportives (coefficient 2)",
    ],
    nombrePlaces: "150 places",
    dureeFormation: "12 à 24 mois selon le grade",
    lienOfficiel: "http://www.douanes.ci",
    contact: "douanes-concours@gouv.ci - (+225) 27 20 39 40 41",
    fraisInscription: "12 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké", "San-Pédro"],
    debouches: [
      "Inspecteur des douanes",
      "Contrôleur des douanes",
      "Agent de constatation",
      "Spécialiste en lutte contre la fraude",
    ],
  },

  droit: {
    id: "droit",
    nom: "Concours de la Magistrature et du Barreau",
    categorie: "juridique",
    description:
      "Concours d'accès aux professions juridiques : magistrature, avocature, greffiers. Formation des futurs acteurs de la justice ivoirienne.",
    dateConcours: "10 Septembre 2024",
    dateInscription: "1er Mai - 31 Juillet 2024",
    conditions: [
      "Être de nationalité ivoirienne",
      "Détenir un Master en droit (Bac+4)",
      "Être âgé de 35 ans au plus pour la magistrature",
      "Casier judiciaire vierge",
      "Aptitude morale et physique",
    ],
    epreuves: [
      "Droit civil et procédure civile (coefficient 3)",
      "Droit pénal et procédure pénale (coefficient 3)",
      "Droit administratif (coefficient 2)",
      "Culture générale juridique (coefficient 2)",
      "Épreuve de langue (coefficient 1)",
      "Entretien oral (coefficient 2)",
    ],
    nombrePlaces: "80 places",
    dureeFormation: "2 à 3 ans selon la spécialité",
    lienOfficiel: "http://www.ecole-magistrature.ci",
    contact: "concours@magistrature.ci - (+225) 27 20 42 43 44",
    fraisInscription: "30 000 FCFA",
    centresExamen: ["Abidjan"],
    specialites: [
      "Magistrature assise (juge)",
      "Magistrature debout (procureur)",
      "Avocat",
      "Greffier",
    ],
  },

  commerce: {
    id: "commerce",
    nom: "Concours des Écoles de Commerce",
    categorie: "technique",
    description:
      "Concours d'entrée dans les grandes écoles de commerce et de gestion ivoiriennes. Formation aux métiers du management, du marketing et de la finance.",
    dateConcours: "5 Août 2024",
    dateInscription: "15 Mars - 30 Juin 2024",
    conditions: [
      "Être titulaire du Baccalauréat (toutes séries)",
      "Être âgé de 26 ans au plus",
      "Avoir une moyenne minimum de 10/20 au Bac",
      "Tests d'aptitude au management",
    ],
    epreuves: [
      "Culture générale (coefficient 3)",
      "Mathématiques et logique (coefficient 3)",
      "Économie et gestion (coefficient 3)",
      "Langue vivante (anglais) - coefficient 2",
      "Entretien de motivation (coefficient 2)",
    ],
    nombrePlaces: "200 places",
    dureeFormation: "3 à 5 ans selon l'école",
    lienOfficiel: "http://www.ecoles-commerce.ci",
    contact: "info@commerce-ecoles.ci - (+225) 27 20 45 46 47",
    fraisInscription: "20 000 FCFA",
    centresExamen: ["Abidjan", "Bouaké"],
    ecoles: [
      "École Supérieure de Commerce d'Abidjan",
      "Institut de Management et de Gestion",
      "École des Hautes Études Commerciales",
    ],
  },

  "culture-generale": {
    id: "culture-generale",
    nom: "Culture Générale - Tous Concours",
    categorie: "general",
    description:
      "Préparation commune à tous les concours administratifs et professionnels. Tests de culture générale, actualité, histoire-géographie et institutions ivoiriennes.",
    dateConcours: "Variable selon les concours",
    dateInscription: "Inscriptions permanentes",
    conditions: [
      "Aucune condition spécifique",
      "Accessible à tous les candidats",
      "Pour la préparation aux concours",
    ],
    epreuves: [
      "Histoire et géographie de la Côte d'Ivoire",
      "Institutions politiques et administratives",
      "Actualité nationale et internationale",
      "Arts et littérature",
      "Sciences et technologies",
      "Sports et culture populaire",
    ],
    nombrePlaces: "Illimité",
    dureeFormation: "Préparation libre",
    lienOfficiel: "http://www.quizconcours.ci",
    contact: "contact@quizconcours.ci - (+225) 27 20 48 49 50",
    fraisInscription: "Gratuit",
    centresExamen: "Tous les centres de concours",
    objectifs: [
      "Renforcer la culture générale",
      "Préparer les épreuves communes",
      "Améliorer ses chances de réussite",
      "S'entraîner aux QCM",
    ],
  },
};

// Fonction pour obtenir tous les concours
function getAllConcours() {
  return concoursData;
}

// Fonction pour obtenir un concours par son ID
function getConcoursById(id) {
  return concoursData[id];
}

// Fonction pour obtenir les concours par catégorie
function getConcoursByCategory(categorie) {
  return Object.values(concoursData).filter((concours) =>
    categorie === "all" ? true : concours.categorie === categorie
  );
}

// Fonction pour obtenir les catégories disponibles
function getCategories() {
  const categories = [
    ...new Set(
      Object.values(concoursData).map((concours) => concours.categorie)
    ),
  ];
  return categories;
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Vérifier si nous sommes sur la page d'accueil avec la section informations concours
  const concoursListElement = document.getElementById("concours-list");
  const categoryFilterElement = document.getElementById("category-filter");

  if (concoursListElement && categoryFilterElement) {
    // Afficher tous les concours au départ
    const allConcours = Object.values(getAllConcours());
    displayConcoursList(allConcours);

    // Configurer le filtre
    categoryFilterElement.addEventListener("change", function () {
      const filteredConcours = getConcoursByCategory(this.value);
      displayConcoursList(filteredConcours);
    });

    // Gestion de la fermeture du modal
    const closeModalElement = document.querySelector(".close-modal");
    if (closeModalElement) {
      closeModalElement.addEventListener("click", function () {
        document.getElementById("info-modal").style.display = "none";
      });
    }

    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener("click", function (event) {
      const modal = document.getElementById("info-modal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});

// Fonction pour afficher la liste des concours
function displayConcoursList(concoursList) {
  const container = document.getElementById("concours-list");

  if (!container) return;

  if (concoursList.length === 0) {
    container.innerHTML =
      '<p class="no-results">Aucun concours trouvé pour cette catégorie.</p>';
    return;
  }

  container.innerHTML = concoursList
    .map(
      (concours) => `
    <div class="concours-card-info" data-id="${concours.id}">
      <div class="card-header">
        <h3>${concours.nom}</h3>
        <span class="categorie-badge ${concours.categorie}">${getCategoryLabel(
        concours.categorie
      )}</span>
      </div>
      <p class="card-description">${concours.description}</p>
      <div class="card-details">
        <div class="detail-item">
          <span class="detail-label">📅 Date du concours:</span>
          <span class="detail-value">${concours.dateConcours}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">📝 Inscriptions:</span>
          <span class="detail-value">${concours.dateInscription}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">👥 Places:</span>
          <span class="detail-value">${concours.nombrePlaces}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">💰 Frais:</span>
          <span class="detail-value">${concours.fraisInscription}</span>
        </div>
      </div>
      <button class="btn-details" onclick="showConcoursDetails('${
        concours.id
      }')">
        📋 Voir tous les détails
      </button>
    </div>
  `
    )
    .join("");
}

// Fonction pour afficher les détails d'un concours dans le modal
function showConcoursDetails(concoursId) {
  const concours = getConcoursById(concoursId);
  const modal = document.getElementById("info-modal");
  const modalContent = document.getElementById("modal-content");

  if (!concours || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <h2>${concours.nom}</h2>
    
    <div class="modal-section">
      <h3>📖 Description</h3>
      <p>${concours.description}</p>
    </div>
    
    <div class="modal-grid">
      <div class="modal-item">
        <h3>📅 Calendrier</h3>
        <p><strong>Période d'inscription:</strong> ${
          concours.dateInscription
        }</p>
        <p><strong>Date du concours:</strong> ${concours.dateConcours}</p>
        <p><strong>Frais d'inscription:</strong> ${
          concours.fraisInscription
        }</p>
      </div>
      
      <div class="modal-item">
        <h3>👥 Informations pratiques</h3>
        <p><strong>Places disponibles:</strong> ${concours.nombrePlaces}</p>
        <p><strong>Durée de formation:</strong> ${concours.dureeFormation}</p>
        <p><strong>Catégorie:</strong> ${getCategoryLabel(
          concours.categorie
        )}</p>
      </div>
    </div>

    <div class="modal-section">
      <h3>✅ Conditions d'accès</h3>
      <ul>
        ${concours.conditions
          .map((condition) => `<li>${condition}</li>`)
          .join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h3>📝 Épreuves du concours</h3>
      <ul>
        ${concours.epreuves.map((epreuve) => `<li>${epreuve}</li>`).join("")}
      </ul>
    </div>

    ${
      concours.centresExamen
        ? `
    <div class="modal-section">
      <h3>🏛️ Centres d'examen</h3>
      <p>${concours.centresExamen.join(", ")}</p>
    </div>
    `
        : ""
    }

    ${
      concours.debouches
        ? `
    <div class="modal-section">
      <h3>🎯 Débouchés professionnels</h3>
      <ul>
        ${concours.debouches.map((debouche) => `<li>${debouche}</li>`).join("")}
      </ul>
    </div>
    `
        : ""
    }

    ${
      concours.specialites
        ? `
    <div class="modal-section">
      <h3>🎓 Spécialités offertes</h3>
      <ul>
        ${concours.specialites
          .map((specialite) => `<li>${specialite}</li>`)
          .join("")}
      </ul>
    </div>
    `
        : ""
    }

    ${
      concours.grades
        ? `
    <div class="modal-section">
      <h3>⭐ Grades concernés</h3>
      <ul>
        ${concours.grades.map((grade) => `<li>${grade}</li>`).join("")}
      </ul>
    </div>
    `
        : ""
    }

    ${
      concours.ecoles
        ? `
    <div class="modal-section">
      <h3>🏫 Écoles participantes</h3>
      <ul>
        ${concours.ecoles.map((ecole) => `<li>${ecole}</li>`).join("")}
      </ul>
    </div>
    `
        : ""
    }

    ${
      concours.objectifs
        ? `
    <div class="modal-section">
      <h3>🎯 Objectifs de la préparation</h3>
      <ul>
        ${concours.objectifs.map((objectif) => `<li>${objectif}</li>`).join("")}
      </ul>
    </div>
    `
        : ""
    }

    <div class="modal-section">
      <h3>📞 Contacts et informations</h3>
      <p><strong>Site officiel:</strong> <a href="${
        concours.lienOfficiel
      }" target="_blank" rel="noopener">${concours.lienOfficiel}</a></p>
      <p><strong>Contact:</strong> ${concours.contact}</p>
    </div>

    <div class="modal-actions">
      <button class="modal-btn primary" onclick="startQuiz('${concours.id}')">
        🚀 Commencer le quiz
      </button>
      <button class="modal-btn secondary" onclick="addToFavorites('${
        concours.id
      }')">
        ⭐ Ajouter aux favoris
      </button>
      <button class="modal-btn" onclick="document.getElementById('info-modal').style.display='none'">
        ✕ Fermer
      </button>
    </div>
  `;

  modal.style.display = "block";
}

// Fonction pour obtenir le libellé de la catégorie
function getCategoryLabel(categorie) {
  const labels = {
    administratif: "Administratif",
    sante: "Santé",
    technique: "Technique",
    juridique: "Juridique",
    securite: "Sécurité",
    general: "Général",
  };
  return labels[categorie] || categorie;
}

// Fonction pour démarrer le quiz (à intégrer avec votre système existant)
function startQuiz(concoursId) {
  window.location.href = `quiz.html?concours=${concoursId}`;
}

// Fonction pour ajouter aux favoris (fonctionnalité future)
function addToFavorites(concoursId) {
  const favorites = JSON.parse(
    localStorage.getItem("favoritesConcours") || "[]"
  );
  if (!favorites.includes(concoursId)) {
    favorites.push(concoursId);
    localStorage.setItem("favoritesConcours", JSON.stringify(favorites));

    // Afficher une notification
    alert("Concours ajouté aux favoris !");
  } else {
    alert("Ce concours est déjà dans vos favoris.");
  }
}

// Fonction de recherche (fonctionnalité future)
function searchConcours(query) {
  const allConcours = Object.values(getAllConcours());
  const filtered = allConcours.filter(
    (concours) =>
      concours.nom.toLowerCase().includes(query.toLowerCase()) ||
      concours.description.toLowerCase().includes(query.toLowerCase())
  );
  displayConcoursList(filtered);
}

// Export pour les modules (si nécessaire)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getAllConcours,
    getConcoursById,
    getConcoursByCategory,
    getCategories,
  };
}
