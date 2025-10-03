// stats-app.js - Application de statistiques pour Quiz Concours Côte d'Ivoire

class StatsApp {
  constructor() {
    this.statsData = this.loadStatsData();
    this.init();
  }

  init() {
    this.initializeCharts();
    this.renderGlobalStats();
    this.renderCategoryStats();
    this.renderHistory();
    this.setupEventListeners();
    this.renderRecommendations();
  }

  // Chargement des données
  loadStatsData() {
    const savedData = localStorage.getItem("quizStats");
    if (savedData) {
      return JSON.parse(savedData);
    }

    // Données par défaut pour la démonstration
    return {
      user: {
        name: "Utilisateur",
        joinDate: new Date().toISOString(),
        totalTests: 0,
        averageScore: 0,
        totalTime: 0,
        bestScore: 0,
      },
      tests: [],
      categories: {
        ena: { name: "ENA", tests: 0, average: 0, best: 0 },
        ens: { name: "ENS", tests: 0, average: 0, best: 0 },
        medecine: { name: "Médecine", tests: 0, average: 0, best: 0 },
        infirmier: { name: "Infirmier", tests: 0, average: 0, best: 0 },
        polytechnique: { name: "Polytechnique", tests: 0, average: 0, best: 0 },
        commerce: { name: "Commerce", tests: 0, average: 0, best: 0 },
        droit: { name: "Droit", tests: 0, average: 0, best: 0 },
        police: { name: "Police", tests: 0, average: 0, best: 0 },
        douanes: { name: "Douanes", tests: 0, average: 0, best: 0 },
        "culture-generale": {
          name: "Culture Générale",
          tests: 0,
          average: 0,
          best: 0,
        },
      },
    };
  }

  // Sauvegarde des données
  saveStatsData() {
    localStorage.setItem("quizStats", JSON.stringify(this.statsData));
  }

  // Initialisation des graphiques
  initializeCharts() {
    this.createPerformanceChart();
    this.createCategoryChart();
    this.createProgressChart();
    this.createTimeChart();
  }

  // Graphique de performance des 10 derniers tests
  createPerformanceChart() {
    const lastTests = this.statsData.tests.slice(-10);
    const categories = lastTests.map((test) => test.category);
    const scores = lastTests.map((test) => test.score);
    const dates = lastTests.map((test) =>
      new Date(test.date).toLocaleDateString()
    );

    Highcharts.chart("performance-chart", {
      chart: {
        type: "line",
        backgroundColor: "transparent",
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: dates,
        title: {
          text: "Dates des tests",
        },
      },
      yAxis: {
        title: {
          text: "Score (%)",
        },
        min: 0,
        max: 100,
      },
      series: [
        {
          name: "Score",
          data: scores,
          color: "#f9c700",
          lineWidth: 3,
          marker: {
            enabled: true,
            radius: 5,
          },
        },
      ],
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.x}</b><br/>Score: <b>${this.y}%</b>`;
        },
      },
    });
  }

  // Graphique des moyennes par catégorie
  createCategoryChart() {
    const categories = Object.values(this.statsData.categories)
      .filter((cat) => cat.tests > 0)
      .sort((a, b) => b.average - a.average);

    const categoryNames = categories.map((cat) => cat.name);
    const averages = categories.map((cat) => cat.average);

    Highcharts.chart("category-chart", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: categoryNames,
        title: {
          text: "Types de concours",
        },
      },
      yAxis: {
        title: {
          text: "Score moyen (%)",
        },
        min: 0,
        max: 100,
      },
      series: [
        {
          name: "Score moyen",
          data: averages,
          color: "#2c3e50",
        },
      ],
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          const category = categories[this.point.index];
          return `<b>${this.x}</b><br/>
                            Score moyen: <b>${this.y}%</b><br/>
                            Tests: ${category.tests}<br/>
                            Meilleur: ${category.best}%`;
        },
      },
    });
  }

  // Graphique de progression mensuelle
  createProgressChart() {
    // Regrouper les tests par mois
    const monthlyData = {};
    this.statsData.tests.forEach((test) => {
      const date = new Date(test.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      const monthName = date.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric",
      });

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          name: monthName,
          scores: [],
          average: 0,
        };
      }
      monthlyData[monthKey].scores.push(test.score);
    });

    // Calculer les moyennes mensuelles
    const months = Object.keys(monthlyData).sort();
    const monthlyAverages = months.map((month) => {
      const data = monthlyData[month];
      data.average =
        data.scores.reduce((a, b) => a + b, 0) / data.scores.length;
      return {
        name: data.name,
        average: Math.round(data.average),
      };
    });

    Highcharts.chart("progress-chart", {
      chart: {
        type: "areaspline",
        backgroundColor: "transparent",
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: monthlyAverages.map((m) => m.name),
      },
      yAxis: {
        title: {
          text: "Score moyen (%)",
        },
        min: 0,
        max: 100,
      },
      series: [
        {
          name: "Progression",
          data: monthlyAverages.map((m) => m.average),
          color: "#27ae60",
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "rgba(39, 174, 96, 0.3)"],
              [1, "rgba(39, 174, 96, 0.1)"],
            ],
          },
        },
      ],
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
    });
  }

  // Graphique du temps par test
  createTimeChart() {
    const lastTests = this.statsData.tests.slice(-15);
    const testNames = lastTests.map((test, index) => `Test ${index + 1}`);
    const times = lastTests.map((test) => test.duration);

    Highcharts.chart("time-chart", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: testNames,
      },
      yAxis: {
        title: {
          text: "Temps (minutes)",
        },
      },
      series: [
        {
          name: "Temps",
          data: times,
          color: "#3498db",
        },
      ],
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
    });
  }

  // Affichage des statistiques globales
  renderGlobalStats() {
    const stats = this.statsData.user;

    // Animation des compteurs
    this.animateValue("total-tests", 0, stats.totalTests, 1000);
    this.animateValue("average-score", 0, stats.averageScore, 1000);
    this.animateValue("best-score", 0, stats.bestScore, 1000);

    // Format du temps total
    const totalHours = Math.floor(stats.totalTime / 60);
    const totalMinutes = stats.totalTime % 60;
    document.getElementById(
      "total-time"
    ).textContent = `${totalHours}h ${totalMinutes}min`;

    // Mise à jour des barres de progression
    this.updateProgressBars();
  }

  // Animation des valeurs numériques
  animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const startTime = performance.now();

    function updateValue(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function pour une animation plus naturelle
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = start + range * easeOutQuart;

      if (elementId === "average-score" || elementId === "best-score") {
        element.textContent = Math.round(value) + "%";
      } else {
        element.textContent = Math.round(value);
      }

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    }

    requestAnimationFrame(updateValue);
  }

  // Mise à jour des barres de progression
  updateProgressBars() {
    const stats = this.statsData.user;

    // Barre de progression pour les tests (basée sur un objectif de 50 tests)
    const testsProgress = Math.min((stats.totalTests / 50) * 100, 100);
    document.getElementById("tests-progress").style.width = testsProgress + "%";

    // Barre de progression pour la précision
    document.getElementById("accuracy-progress").style.width =
      stats.averageScore + "%";

    // Barre de progression pour le temps (basée sur 100 heures)
    const timeProgress = Math.min((stats.totalTime / 6000) * 100, 100);
    document.getElementById("time-progress").style.width = timeProgress + "%";

    // Barre de progression pour le meilleur score
    document.getElementById("best-progress").style.width =
      stats.bestScore + "%";
  }

  // Affichage des statistiques par catégorie
  renderCategoryStats() {
    const grid = document.getElementById("category-stats-grid");
    grid.innerHTML = "";

    Object.entries(this.statsData.categories).forEach(([key, category]) => {
      if (category.tests > 0) {
        const card = this.createCategoryCard(key, category);
        grid.appendChild(card);
      }
    });

    // Message si aucune catégorie n'a de tests
    if (grid.children.length === 0) {
      grid.innerHTML = `
                <div class="no-data">
                    <p>📊 Aucune statistique disponible</p>
                    <p>Complétez votre premier quiz pour voir vos statistiques par catégorie.</p>
                </div>
            `;
    }
  }

  // Création d'une carte de catégorie
  createCategoryCard(key, category) {
    const card = document.createElement("div");
    card.className = "category-stat-card";
    card.innerHTML = `
            <div class="category-header">
                <h4>${category.name}</h4>
                <span class="test-count">${category.tests} test${
      category.tests > 1 ? "s" : ""
    }</span>
            </div>
            <div class="category-stats">
                <div class="category-stat">
                    <span class="stat-label">Score moyen</span>
                    <span class="stat-value ${this.getScoreClass(
                      category.average
                    )}">${Math.round(category.average)}%</span>
                </div>
                <div class="category-stat">
                    <span class="stat-label">Meilleur score</span>
                    <span class="stat-value ${this.getScoreClass(
                      category.best
                    )}">${Math.round(category.best)}%</span>
                </div>
                <div class="category-stat">
                    <span class="stat-label">Progression</span>
                    <div class="score-progress">
                        <div class="score-progress-fill" style="width: ${
                          category.average
                        }%"></div>
                    </div>
                </div>
            </div>
            <div class="category-footer">
                ${this.getCategoryAdvice(category.average)}
            </div>
        `;
    return card;
  }

  // Classe CSS en fonction du score
  getScoreClass(score) {
    if (score >= 80) return "excellent";
    if (score >= 60) return "good";
    if (score >= 40) return "average";
    return "poor";
  }

  // Conseil personnalisé par catégorie
  getCategoryAdvice(score) {
    if (score >= 80) return "🎉 Excellente maîtrise !";
    if (score >= 60) return "📚 Bonnes bases, continuez à progresser";
    if (score >= 40) return "💪 Des efforts supplémentaires sont nécessaires";
    return "🔍 Revoyez les bases de cette catégorie";
  }

  // Affichage de l'historique
  renderHistory() {
    const historyList = document.getElementById("history-list");
    const filteredTests = this.getFilteredTests();

    historyList.innerHTML = "";

    if (filteredTests.length === 0) {
      historyList.innerHTML = `
                <div class="no-data">
                    <p>📝 Aucun test trouvé</p>
                    <p>Aucun test ne correspond à vos critères de recherche.</p>
                </div>
            `;
      return;
    }

    filteredTests.forEach((test, index) => {
      const historyItem = this.createHistoryItem(test, index);
      historyList.appendChild(historyItem);
    });
  }

  // Filtrage des tests
  getFilteredTests() {
    let tests = [...this.statsData.tests].reverse(); // Plus récents en premier

    // Filtre par catégorie
    const categoryFilter = document.getElementById("filter-category").value;
    if (categoryFilter !== "all") {
      tests = tests.filter((test) => test.category === categoryFilter);
    }

    // Filtre par date
    const dateFilter = document.getElementById("filter-date").value;
    const now = new Date();

    switch (dateFilter) {
      case "today":
        tests = tests.filter((test) => {
          const testDate = new Date(test.date);
          return testDate.toDateString() === now.toDateString();
        });
        break;
      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        tests = tests.filter((test) => new Date(test.date) >= weekAgo);
        break;
      case "month":
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        tests = tests.filter((test) => new Date(test.date) >= monthAgo);
        break;
      case "year":
        const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        tests = tests.filter((test) => new Date(test.date) >= yearAgo);
        break;
    }

    // Filtre par recherche
    const searchFilter = document
      .getElementById("search-history")
      .value.toLowerCase();
    if (searchFilter) {
      tests = tests.filter(
        (test) =>
          test.category.toLowerCase().includes(searchFilter) ||
          test.concoursName.toLowerCase().includes(searchFilter)
      );
    }

    return tests;
  }

  // Création d'un élément d'historique
  createHistoryItem(test, index) {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
            <div class="quiz-info">
                <div class="quiz-name">${test.concoursName}</div>
                <div class="quiz-details">
                    <span>📅 ${new Date(test.date).toLocaleDateString(
                      "fr-FR"
                    )}</span>
                    <span>⏱️ ${test.duration} min</span>
                    <span>📝 ${test.totalQuestions} questions</span>
                </div>
            </div>
            <div class="quiz-result">
                <span class="score">${test.score}%</span>
                <span class="percentage ${this.getScoreClass(
                  test.score
                )}">${this.getPerformanceText(test.score)}</span>
                <span class="points">${test.correctAnswers}/${
      test.totalQuestions
    }</span>
            </div>
            <div class="test-actions">
                <button class="test-action-btn primary" onclick="statsApp.viewTestDetails(${index})">
                    <span class="btn-icon">👁️</span>
                    Voir
                </button>
                <button class="test-action-btn danger" onclick="statsApp.deleteTest(${index})">
                    <span class="btn-icon">🗑️</span>
                    Supprimer
                </button>
            </div>
        `;
    return item;
  }

  // Texte de performance
  getPerformanceText(score) {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Bon";
    if (score >= 40) return "Moyen";
    return "À améliorer";
  }

  // Affichage des recommandations
  renderRecommendations() {
    const grid = document.getElementById("recommendations-grid");

    const recommendations = this.generateRecommendations();

    if (recommendations.length === 0) {
      grid.innerHTML = `
                <div class="no-data">
                    <p>🎯 Complétez quelques tests pour obtenir des recommandations personnalisées</p>
                </div>
            `;
      return;
    }

    grid.innerHTML = recommendations
      .map(
        (rec) => `
            <div class="recommendation-card ${rec.priority}">
                <div class="recommendation-icon">${rec.icon}</div>
                <div class="recommendation-content">
                    <h4>${rec.title}</h4>
                    <p>${rec.description}</p>
                    <div class="recommendation-meta">
                        <span class="priority-badge ${rec.priority}">${rec.priorityText}</span>
                        <span class="category-tag">${rec.category}</span>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Génération des recommandations personnalisées
  generateRecommendations() {
    const recommendations = [];
    const stats = this.statsData;

    // Recommandation basée sur le nombre total de tests
    if (stats.user.totalTests < 5) {
      recommendations.push({
        icon: "🚀",
        title: "Augmentez votre pratique",
        description:
          "Complétez au moins 5 tests pour établir une base solide de progression.",
        priority: "high",
        priorityText: "Priorité haute",
        category: "Général",
      });
    }

    // Recommandation basée sur le score moyen
    if (stats.user.averageScore < 60) {
      recommendations.push({
        icon: "📚",
        title: "Renforcez vos bases",
        description:
          "Votre score moyen indique des lacunes. Revoyez les concepts fondamentaux.",
        priority: "high",
        priorityText: "Priorité haute",
        category: "Général",
      });
    }

    // Recommandations par catégorie faible
    Object.entries(stats.categories).forEach(([key, category]) => {
      if (category.tests > 2 && category.average < 50) {
        recommendations.push({
          icon: "🎯",
          title: `Améliorez vos résultats en ${category.name}`,
          description: `Votre score moyen de ${Math.round(
            category.average
          )}% dans cette catégorie nécessite une attention particulière.`,
          priority: "medium",
          priorityText: "Priorité moyenne",
          category: category.name,
        });
      }
    });

    // Recommandation de variété
    const activeCategories = Object.values(stats.categories).filter(
      (cat) => cat.tests > 0
    ).length;
    if (activeCategories < 3 && stats.user.totalTests > 10) {
      recommendations.push({
        icon: "🔄",
        title: "Diversifiez votre préparation",
        description:
          "Essayez différents types de concours pour une préparation plus complète.",
        priority: "medium",
        priorityText: "Priorité moyenne",
        category: "Général",
      });
    }

    return recommendations.slice(0, 4); // Limiter à 4 recommandations
  }

  // Configuration des écouteurs d'événements
  setupEventListeners() {
    // Filtres de l'historique
    document
      .getElementById("filter-category")
      .addEventListener("change", () => this.renderHistory());
    document
      .getElementById("filter-date")
      .addEventListener("change", () => this.renderHistory());
    document
      .getElementById("search-history")
      .addEventListener("input", () => this.renderHistory());

    // Bouton d'export
    document
      .getElementById("export-btn")
      .addEventListener("click", () => this.exportData());

    // Bouton de suppression de l'historique
    document
      .getElementById("clear-history-btn")
      .addEventListener("click", () => this.showClearConfirmation());

    // Modal de confirmation
    document
      .getElementById("confirm-clear")
      .addEventListener("click", () => this.clearHistory());
    document
      .getElementById("cancel-clear")
      .addEventListener("click", () => this.hideClearConfirmation());

    // Fermeture du modal en cliquant à l'extérieur
    document.getElementById("confirm-modal").addEventListener("click", (e) => {
      if (e.target.id === "confirm-modal") {
        this.hideClearConfirmation();
      }
    });
  }

  // Export des données
  exportData() {
    const dataStr = JSON.stringify(this.statsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(dataBlob);
    link.download = `quiz-stats-${new Date().toISOString().split("T")[0]}.json`;
    link.click();

    // Notification
    this.showNotification("📊 Données exportées avec succès !", "success");
  }

  // Affichage de la confirmation de suppression
  showClearConfirmation() {
    document.getElementById("confirm-modal").style.display = "flex";
  }

  // Masquage de la confirmation
  hideClearConfirmation() {
    document.getElementById("confirm-modal").style.display = "none";
  }

  // Suppression de l'historique
  clearHistory() {
    this.statsData.tests = [];
    this.statsData.user.totalTests = 0;
    this.statsData.user.averageScore = 0;
    this.statsData.user.totalTime = 0;
    this.statsData.user.bestScore = 0;

    // Réinitialiser les catégories
    Object.keys(this.statsData.categories).forEach((key) => {
      this.statsData.categories[key].tests = 0;
      this.statsData.categories[key].average = 0;
      this.statsData.categories[key].best = 0;
    });

    this.saveStatsData();
    this.hideClearConfirmation();
    this.renderGlobalStats();
    this.renderCategoryStats();
    this.renderHistory();
    this.renderRecommendations();
    this.initializeCharts();

    this.showNotification("🗑️ Historique supprimé avec succès", "success");
  }

  // Visualisation des détails d'un test
  viewTestDetails(testIndex) {
    const test = this.statsData.tests[testIndex];
    if (!test) return;

    // Stocker le test à visualiser et rediriger vers la page de résultats
    localStorage.setItem("currentQuizResults", JSON.stringify(test));
    window.location.href = "quiz-results.html";
  }

  // Suppression d'un test individuel
  deleteTest(testIndex) {
    const test = this.statsData.tests[testIndex];
    if (!test) return;

    if (
      confirm(
        `Êtes-vous sûr de vouloir supprimer le test "${test.concoursName}" ?`
      )
    ) {
      // Mettre à jour les statistiques de la catégorie
      const category = this.statsData.categories[test.category];
      if (category) {
        category.tests--;
        // Recalculer la moyenne et le meilleur score pour la catégorie
        if (category.tests > 0) {
          const categoryTests = this.statsData.tests.filter(
            (t) => t.category === test.category
          );
          category.average =
            categoryTests.reduce((sum, t) => sum + t.score, 0) /
            categoryTests.length;
          category.best = Math.max(...categoryTests.map((t) => t.score));
        } else {
          category.average = 0;
          category.best = 0;
        }
      }

      // Mettre à jour les statistiques globales
      this.statsData.tests.splice(testIndex, 1);
      this.updateGlobalStats();

      this.saveStatsData();
      this.renderGlobalStats();
      this.renderCategoryStats();
      this.renderHistory();
      this.renderRecommendations();
      this.initializeCharts();

      this.showNotification("Test supprimé avec succès", "success");
    }
  }

  // Mise à jour des statistiques globales
  updateGlobalStats() {
    const tests = this.statsData.tests;
    const user = this.statsData.user;

    user.totalTests = tests.length;
    user.averageScore =
      tests.length > 0
        ? tests.reduce((sum, test) => sum + test.score, 0) / tests.length
        : 0;
    user.totalTime = tests.reduce((sum, test) => sum + test.duration, 0);
    user.bestScore =
      tests.length > 0 ? Math.max(...tests.map((test) => test.score)) : 0;
  }

  // Affichage de notifications
  showNotification(message, type = "info") {
    // Créer l'élément de notification
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">×</button>
        `;

    // Styles pour la notification
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "#27ae60"
                : type === "error"
                ? "#e74c3c"
                : "#3498db"
            };
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;

    // Style du bouton de fermeture
    notification.querySelector(".notification-close").style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

    document.body.appendChild(notification);

    // Suppression automatique après 5 secondes
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }
}

// Initialisation de l'application quand la page est chargée
document.addEventListener("DOMContentLoaded", () => {
  window.statsApp = new StatsApp();
});

// CSS pour l'animation de notification
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        font-family: inherit;
    }
    
    .notification-message {
        flex: 1;
    }
`;
document.head.appendChild(notificationStyles);
