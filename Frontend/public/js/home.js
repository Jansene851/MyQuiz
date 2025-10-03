// home.js - Script principal pour la page d'accueil

class HomePageManager {
  constructor() {
    this.concoursData = [];
    this.init();
  }

  async init() {
    try {
      await this.loadConcoursData();
      this.initializeEventListeners();
      this.renderConcoursGrid();
      this.renderTestimonials();
      this.displayConcoursList(this.getAllConcours());
    } catch (error) {
      console.error("Erreur lors de l'initialisation:", error);
      this.showError("Erreur de chargement des données");
    }
  }

  async loadConcoursData() {
    // Simulation de chargement - à adapter selon votre structure de données
    if (typeof getAllConcours === "function") {
      this.concoursData = Object.values(getAllConcours());
    } else {
      // Fallback si la fonction n'existe pas
      this.concoursData = await this.fetchConcoursData();
    }
  }

  async fetchConcoursData() {
    try {
      const response = await fetch("api/concours.json");
      if (!response.ok) throw new Error("Données non disponibles");
      return await response.json();
    } catch (error) {
      return this.getDefaultConcoursData();
    }
  }

  getDefaultConcoursData() {
    return [
      {
        id: "ena",
        nom: "Concours ENA",
        description: "École Nationale d'Administration",
        categorie: "administratif",
        questions: 15,
      },
      // ... autres concours par défaut
    ];
  }

  initializeEventListeners() {
    // Filtre des concours
    const categoryFilter = document.getElementById("category-filter");
    if (categoryFilter) {
      categoryFilter.addEventListener("change", (e) => {
        this.filterConcours(e.target.value);
      });
    }

    // Modal
    this.setupModalEvents();

    // Navigation clavier
    this.setupKeyboardNavigation();
  }

  setupModalEvents() {
    const modal = document.getElementById("info-modal");
    const closeBtn = document.querySelector(".close-modal");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) this.closeModal();
      });

      // Fermeture avec Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
          this.closeModal();
        }
      });
    }
  }

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Tab" &&
        document.getElementById("info-modal").style.display === "block"
      ) {
        this.trapFocusInModal(e);
      }
    });
  }

  trapFocusInModal(event) {
    const modal = document.getElementById("info-modal");
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  renderConcoursGrid() {
    const gridContainer = document.querySelector(".grid-container");
    if (!gridContainer) return;

    const concoursList = this.getAllConcours();
    gridContainer.innerHTML = concoursList
      .map((concours) => this.createConcoursCard(concours))
      .join("");
  }

  createConcoursCard(concours) {
    return `
            <a href="quiz.html?concours=${
              concours.id
            }" class="concours-card" role="gridcell" aria-label="${
      concours.nom
    } - ${concours.description}">
                <div class="card-icon" aria-hidden="true">${this.getConcoursIcon(
                  concours.id
                )}</div>
                <h3>${concours.nom}</h3>
                <p>${concours.description}</p>
                <span class="question-count">${
                  concours.questions || 15
                } questions</span>
            </a>
        `;
  }

  getConcoursIcon(concoursId) {
    const icons = {
      ena: "🎓",
      ens: "✏️",
      medecine: "❤️",
      infirmier: "🏥",
      polytechnique: "⚙️",
      commerce: "💼",
      droit: "⚖️",
      police: "👮",
      douanes: "📦",
      "culture-generale": "🌍",
    };
    return icons[concoursId] || "📚";
  }

  renderTestimonials() {
    const testimonialsGrid = document.querySelector(".testimonials-grid");
    if (!testimonialsGrid) return;

    const testimonials = this.getTestimonials();
    testimonialsGrid.innerHTML = testimonials
      .map((testimonial) => this.createTestimonialCard(testimonial))
      .join("");
  }

  createTestimonialCard(testimonial) {
    return `
            <div class="testimonial-card" role="listitem">
                <div class="testimonial-header">
                    <div class="user-avatar" aria-hidden="true">${testimonial.avatar}</div>
                    <div class="user-info">
                        <h4>${testimonial.name}</h4>
                        <span class="user-concours">${testimonial.concours}</span>
                    </div>
                    <div class="rating" aria-label="Note: ${testimonial.rating} sur 5">${testimonial.ratingStars}</div>
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-source">
                    <span class="verified-badge">${testimonial.verified}</span>
                </div>
            </div>
        `;
  }

  getTestimonials() {
    return [
      {
        avatar: "👨‍🎓",
        name: "Kouamé B.",
        concours: "Concours ENA",
        rating: 5,
        ratingStars: "★★★★★",
        text: "Les explications détaillées après chaque question m'ont permis d'identifier mes lacunes en droit administratif. Je me sens beaucoup plus prêt pour les épreuves écrites !",
        verified: "✓ Avis vérifié",
      },
      // ... autres témoignages
    ];
  }

  displayConcoursList(concoursList) {
    const container = document.getElementById("concours-list");
    if (!container) return;

    if (concoursList.length === 0) {
      container.innerHTML =
        '<p class="no-results">Aucun concours trouvé pour cette catégorie.</p>';
      return;
    }

    container.innerHTML = concoursList
      .map((concours) => this.createConcoursInfoCard(concours))
      .join("");
  }

  createConcoursInfoCard(concours) {
    return `
            <div class="concours-card-info" data-id="${
              concours.id
            }" role="listitem">
                <div class="card-header">
                    <h3>${concours.nom}</h3>
                    <span class="categorie-badge ${
                      concours.categorie
                    }">${this.getCategoryLabel(concours.categorie)}</span>
                </div>
                <p class="card-description">${concours.description}</p>
                <div class="card-details">
                    <div class="detail-item">
                        <span class="detail-label">📅 Date du concours:</span>
                        <span class="detail-value">${
                          concours.dateConcours || "Non spécifiée"
                        }</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">📝 Inscriptions:</span>
                        <span class="detail-value">${
                          concours.dateInscription || "Non spécifiées"
                        }</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">👥 Places:</span>
                        <span class="detail-value">${
                          concours.nombrePlaces || "Non spécifié"
                        }</span>
                    </div>
                </div>
                <button class="btn-details" onclick="homeManager.showConcoursDetails('${
                  concours.id
                }')" aria-label="Voir les détails du concours ${concours.nom}">
                    Voir tous les détails
                </button>
            </div>
        `;
  }

  filterConcours(category) {
    const filteredConcours =
      category === "all"
        ? this.getAllConcours()
        : this.getConcoursByCategory(category);
    this.displayConcoursList(filteredConcours);
  }

  getAllConcours() {
    return this.concoursData;
  }

  getConcoursByCategory(category) {
    return this.concoursData.filter(
      (concours) => concours.categorie === category
    );
  }

  getConcoursById(concoursId) {
    return this.concoursData.find((concours) => concours.id === concoursId);
  }

  showConcoursDetails(concoursId) {
    const concours = this.getConcoursById(concoursId);
    if (!concours) return;

    const modal = document.getElementById("info-modal");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = this.createModalContent(concours);
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");

    // Focus sur le premier élément focusable du modal
    const firstFocusable = modal.querySelector(
      "button, [href], input, [tabindex]"
    );
    if (firstFocusable) firstFocusable.focus();
  }

  createModalContent(concours) {
    return `
            <h2 id="modal-title">${concours.nom}</h2>
            <div class="modal-section">
                <h3>📖 Description</h3>
                <p>${concours.description}</p>
            </div>
            
            <div class="modal-grid">
                <div class="modal-item">
                    <h3>📅 Dates importantes</h3>
                    <p><strong>Inscriptions:</strong> ${
                      concours.dateInscription || "Non spécifiée"
                    }</p>
                    <p><strong>Concours:</strong> ${
                      concours.dateConcours || "Non spécifiée"
                    }</p>
                </div>
                
                <div class="modal-item">
                    <h3>👥 Informations pratiques</h3>
                    <p><strong>Places disponibles:</strong> ${
                      concours.nombrePlaces || "Non spécifié"
                    }</p>
                    <p><strong>Durée de formation:</strong> ${
                      concours.dureeFormation || "Non spécifiée"
                    }</p>
                    <p><strong>Frais d'inscription:</strong> ${
                      concours.fraisInscription || "Non spécifiés"
                    }</p>
                </div>
            </div>

            <div class="modal-section">
                <h3>✅ Conditions d'accès</h3>
                <ul>
                    ${(concours.conditions || ["Non spécifiées"])
                      .map((condition) => `<li>${condition}</li>`)
                      .join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h3>📝 Épreuves du concours</h3>
                <ul>
                    ${(concours.epreuves || ["Non spécifiées"])
                      .map((epreuve) => `<li>${epreuve}</li>`)
                      .join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h3>📞 Contacts</h3>
                <p><strong>Site officiel:</strong> ${
                  concours.lienOfficiel
                    ? `<a href="${concours.lienOfficiel}" target="_blank" rel="noopener">${concours.lienOfficiel}</a>`
                    : "Non spécifié"
                }</p>
                <p><strong>Email:</strong> ${
                  concours.contact || "Non spécifié"
                }</p>
            </div>
        `;
  }

  closeModal() {
    const modal = document.getElementById("info-modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  getCategoryLabel(categorie) {
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

  showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    errorDiv.setAttribute("role", "alert");

    document.body.prepend(errorDiv);

    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
}

// Fonction globale pour partager son expérience
function shareExperience() {
  const email = "contact@quizconcours.ci";
  const subject = "Mon témoignage - Quiz Concours Côte d'Ivoire";
  const body = "Je souhaite partager mon expérience avec la plateforme...";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

// Initialisation
let homeManager;

document.addEventListener("DOMContentLoaded", function () {
  homeManager = new HomePageManager();
});

// Gestion du chargement des ressources
window.addEventListener("load", function () {
  // Ajouter une classe de chargement terminé pour les animations
  document.body.classList.add("loaded");
});
