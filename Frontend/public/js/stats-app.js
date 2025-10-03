// stats-app.js - Gestionnaire de statistiques optimisé
class StatsApp {
  constructor() {
    this.savedTests = [];
    this.filteredTests = [];
    this.currentFilters = {
      category: "all",
      date: "all",
      search: "",
    };

    this.charts = {};
    this.isInitialized = false;

    this.initializeElements();
    this.setupEventListeners();
    this.loadStats();
  }

  initializeElements() {
    try {
      // Éléments principaux
      this.historyList = document.getElementById("history-list");
      this.categoryStatsGrid = document.getElementById("category-stats-grid");
      this.totalTestsElement = document.getElementById("total-tests");
      this.averageScoreElement = document.getElementById("average-score");
      this.totalTimeElement = document.getElementById("total-time");

      // Filtres
      this.filterCategory = document.getElementById("filter-category");
      this.filterDate = document.getElementById("filter-date");
      this.searchInput = document.getElementById("search-history");

      // Boutons
      this.exportBtn = document.getElementById("export-btn");
      this.clearHistoryBtn = document.getElementById("clear-history-btn");

      // Modal de confirmation
      this.confirmModal = document.getElementById("confirm-modal");
      this.confirmClear = document.getElementById("confirm-clear");
      this.cancelClear = document.getElementById("cancel-clear");

      this.validateElements();
    } catch (error) {
      console.error("Erreur initialisation StatsApp:", error);
      this.showError("Erreur de chargement des statistiques");
    }
  }

  validateElements() {
    const requiredElements = {
      historyList: this.historyList,
      categoryStatsGrid: this.categoryStatsGrid,
      totalTestsElement: this.totalTestsElement,
      averageScoreElement: this.averageScoreElement,
      totalTimeElement: this.totalTimeElement,
    };

    for (const [name, element] of Object.entries(requiredElements)) {
      if (!element) {
        throw new Error(`Élément manquant: ${name}`);
      }
    }
  }

  setupEventListeners() {
    // Filtres
    this.filterCategory?.addEventListener("change", () => this.applyFilters());
    this.filterDate?.addEventListener("change", () => this.applyFilters());
    this.searchInput?.addEventListener("input", () => this.applyFilters());

    // Actions
    this.exportBtn?.addEventListener("click", () => this.exportData());
    this.clearHistoryBtn?.addEventListener("click", () =>
      this.showClearConfirmation()
    );
    this.confirmClear?.addEventListener("click", () => this.clearHistory());
    this.cancelClear?.addEventListener("click", () =>
      this.hideClearConfirmation()
    );

    // Fermeture modale
    this.confirmModal?.addEventListener("click", (e) => {
      if (e.target === this.confirmModal) {
        this.hideClearConfirmation();
      }
    });

    // Touche Échap
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.confirmModal.style.display === "flex") {
        this.hideClearConfirmation();
      }
    });
  }

  loadStats() {
    try {
      this.savedTests = this.getSavedTests();
      this.applyFilters();
      this.updateGlobalStats();
      this.updateCategoryStats();
      this.renderCharts();
      this.isInitialized = true;
    } catch (error) {
      console.error("Erreur chargement stats:", error);
      this.showError("Erreur lors du chargement des statistiques");
    }
  }

  getSavedTests() {
    try {
      const tests = JSON.parse(localStorage.getItem("savedQuizzes") || "[]");

      // Valider et nettoyer les données
      return tests.filter((test) => this.validateTestData(test)).slice(0, 1000); // Limite de sécurité
    } catch (error) {
      console.error("Erreur lecture tests sauvegardés:", error);
      return [];
    }
  }

  validateTestData(test) {
    return (
      test &&
      test.id &&
      test.quizId &&
      typeof test.percentage === "number" &&
      test.percentage >= 0 &&
      test.percentage <= 100 &&
      !isNaN(new Date(test.date).getTime())
    );
  }

  applyFilters() {
    const category = this.filterCategory?.value || "all";
    const date = this.filterDate?.value || "all";
    const search = this.searchInput?.value.toLowerCase() || "";

    this.currentFilters = { category, date, search };

    this.filteredTests = this.savedTests.filter((test) => {
      // Filtre par catégorie
      if (category !== "all" && test.quizId !== category) {
        return false;
      }

      // Filtre par date
      if (date !== "all") {
        const testDate = new Date(test.date);
        if (!this.isInDateRange(testDate, date)) {
          return false;
        }
      }

      // Filtre par recherche
      if (search && !this.matchesSearch(test, search)) {
        return false;
      }

      return true;
    });

    this.renderHistoryList();
  }

  isInDateRange(testDate, range) {
    const now = new Date();

    switch (range) {
      case "today":
        return testDate.toDateString() === now.toDateString();
      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return testDate >= weekAgo;
      case "month":
        const monthAgo = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          now.getDate()
        );
        return testDate >= monthAgo;
      case "year":
        const yearAgo = new Date(
          now.getFullYear() - 1,
          now.getMonth(),
          now.getDate()
        );
        return testDate >= yearAgo;
      default:
        return true;
    }
  }

  matchesSearch(test, searchTerm) {
    const quizName = this.getQuizName(test.quizId).toLowerCase();
    const testName = (test.name || "").toLowerCase();
    const date = new Date(test.date).toLocaleDateString("fr-FR");

    return (
      quizName.includes(searchTerm) ||
      testName.includes(searchTerm) ||
      date.includes(searchTerm) ||
      test.percentage.toString().includes(searchTerm)
    );
  }

  updateGlobalStats() {
    if (this.savedTests.length === 0) {
      this.showEmptyState();
      return;
    }

    const stats = this.calculateGlobalStats();

    this.totalTestsElement.textContent = stats.totalTests;
    this.averageScoreElement.textContent = `${stats.averageScore}%`;
    this.totalTimeElement.textContent = stats.formattedTime;

    this.updateProgressBars(stats);
  }

  calculateGlobalStats() {
    const totalTests = this.savedTests.length;

    // Score moyen
    const totalScore = this.savedTests.reduce(
      (sum, test) => sum + test.percentage,
      0
    );
    const averageScore =
      totalTests > 0 ? Math.round(totalScore / totalTests) : 0;

    // Temps total (en minutes)
    const totalTimeMs = this.savedTests.reduce((sum, test) => {
      let duration = Math.abs(test.duration || 0); // Valeur absolue pour sécurité
      return sum + duration;
    }, 0);

    const totalMinutes = Math.round(totalTimeMs / (1000 * 60));
    const formattedTime = this.formatTime(totalMinutes);

    // Meilleur score
    const bestScore = this.savedTests.reduce(
      (max, test) => Math.max(max, test.percentage),
      0
    );

    return {
      totalTests,
      averageScore,
      bestScore,
      totalMinutes,
      formattedTime,
    };
  }

  formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    } else {
      return `${minutes}min`;
    }
  }

  updateProgressBars(stats) {
    // Mettre à jour les barres de progression si elles existent
    const progressBars = {
      "accuracy-progress": stats.averageScore,
      "tests-progress": Math.min((stats.totalTests / 100) * 100, 100), // Max 100%
      "time-progress": Math.min((stats.totalMinutes / 600) * 100, 100), // Max 10h
    };

    Object.entries(progressBars).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.width = `${value}%`;
      }
    });
  }

  showEmptyState() {
    this.totalTestsElement.textContent = "0";
    this.averageScoreElement.textContent = "0%";
    this.totalTimeElement.textContent = "0min";

    const emptyHTML = `
            <div class="empty-state">
                <div class="empty-icon">📊</div>
                <h3>Aucune donnée statistique</h3>
                <p>Complétez des quizzes pour voir vos statistiques ici</p>
                <div class="empty-actions">
                    <a href="index.html" class="nav-btn primary">Voir les concours</a>
                    <a href="quiz.html?concours=culture-generale" class="nav-btn secondary">Quiz Culture Générale</a>
                </div>
            </div>
        `;

    this.historyList.innerHTML = emptyHTML;
    this.categoryStatsGrid.innerHTML = emptyHTML;
  }

  updateCategoryStats() {
    if (this.savedTests.length === 0) return;

    const categories = this.calculateCategoryStats();
    this.renderCategoryCards(categories);
  }

  calculateCategoryStats() {
    const categories = {};

    this.savedTests.forEach((test) => {
      if (!categories[test.quizId]) {
        categories[test.quizId] = {
          count: 0,
          totalScore: 0,
          bestScore: 0,
          totalTime: 0,
          lastAttempt: new Date(0),
        };
      }

      const category = categories[test.quizId];
      const testDate = new Date(test.date);

      category.count++;
      category.totalScore += test.percentage;
      category.bestScore = Math.max(category.bestScore, test.percentage);
      category.totalTime += Math.abs(test.duration || 0);
      category.lastAttempt = new Date(Math.max(category.lastAttempt, testDate));
    });

    // Calculer les moyennes
    Object.keys(categories).forEach((quizId) => {
      const category = categories[quizId];
      category.averageScore = Math.round(category.totalScore / category.count);
      category.averageTime = Math.round(
        category.totalTime / category.count / (1000 * 60)
      );
    });

    return categories;
  }

  renderCategoryCards(categories) {
    this.categoryStatsGrid.innerHTML = "";

    const sortedCategories = Object.entries(categories).sort(
      ([, a], [, b]) => b.averageScore - a.averageScore
    );

    sortedCategories.forEach(([quizId, stats]) => {
      const card = this.createCategoryCard(quizId, stats);
      this.categoryStatsGrid.appendChild(card);
    });
  }

  createCategoryCard(quizId, stats) {
    const card = document.createElement("div");
    card.className = "category-stat-card";
    card.innerHTML = `
            <div class="category-header">
                <h4>${this.getQuizName(quizId)}</h4>
                <span class="test-count">${stats.count} test(s)</span>
            </div>
            
            <div class="score-display">
                <div class="main-score ${this.getScoreClass(
                  stats.averageScore
                )}">
                    ${stats.averageScore}%
                </div>
                <div class="score-label">Moyenne</div>
            </div>

            <div class="category-stats">
                <div class="stat-row">
                    <span class="stat-label">Meilleur score:</span>
                    <span class="stat-value ${this.getScoreClass(
                      stats.bestScore
                    )}">
                        ${stats.bestScore}%
                    </span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Temps moyen:</span>
                    <span class="stat-value">${stats.averageTime} min</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Dernier test:</span>
                    <span class="stat-value">
                        ${stats.lastAttempt.toLocaleDateString("fr-FR")}
                    </span>
                </div>
            </div>

            <div class="category-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${
                      stats.averageScore
                    }%"></div>
                </div>
                <div class="progress-text">Performance globale</div>
            </div>
        `;

    return card;
  }

  getQuizName(quizId) {
    const quizNames = {
      ena: "🎓 ENA",
      ens: "✏️ ENS",
      medecine: "❤️ Médecine",
      infirmier: "🏥 Infirmier",
      polytechnique: "⚙️ Polytechnique",
      commerce: "💼 Commerce",
      droit: "⚖️ Droit",
      police: "👮 Police",
      douanes: "📦 Douanes",
      "culture-generale": "🌍 Culture Générale",
    };
    return quizNames[quizId] || quizId;
  }

  getScoreClass(score) {
    if (score >= 80) return "excellent";
    if (score >= 60) return "good";
    if (score >= 40) return "average";
    return "poor";
  }

  renderHistoryList() {
    if (this.filteredTests.length === 0) {
      this.showNoResults();
      return;
    }

    // Trier par date (plus récent en premier)
    const sortedTests = [...this.filteredTests].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    this.historyList.innerHTML = sortedTests
      .map((test) => this.createHistoryItem(test))
      .join("");

    this.attachItemEventListeners();
  }

  createHistoryItem(test) {
    const testDate = new Date(test.date);
    const quizName = this.getQuizName(test.quizId);
    const scoreClass = this.getScoreClass(test.percentage);
    const duration =
      test.timeSpent ||
      this.formatTime(Math.round(Math.abs(test.duration || 0) / (1000 * 60)));

    return `
            <div class="history-item" data-test-id="${test.id}">
                <div class="test-main-info">
                    <div class="test-header">
                        <h4 class="test-name">${test.name || quizName}</h4>
                        <span class="test-date">
                            ${testDate.toLocaleDateString("fr-FR")} 
                            à ${testDate.toLocaleTimeString("fr-FR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                        </span>
                    </div>
                    
                    <div class="test-details">
                        <span class="test-type">${quizName}</span>
                        <span class="test-duration">⏱️ ${duration}</span>
                        <span class="test-questions">${test.score}/${
      test.totalQuestions
    } questions</span>
                    </div>
                </div>

                <div class="test-result">
                    <div class="score-circle ${scoreClass}">
                        <span class="score-percentage">${
                          test.percentage
                        }%</span>
                    </div>
                </div>

                <div class="test-actions">
                    <button class="action-btn view-btn" data-test-id="${
                      test.id
                    }" title="Voir les détails">
                        <span class="btn-icon">📊</span>
                        <span class="btn-text">Détails</span>
                    </button>
                    <button class="action-btn delete-btn" data-test-id="${
                      test.id
                    }" title="Supprimer ce test">
                        <span class="btn-icon">🗑️</span>
                    </button>
                </div>
            </div>
        `;
  }

  attachItemEventListeners() {
    // Boutons de visualisation
    this.historyList.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const testId = e.currentTarget.dataset.testId;
        this.viewTestDetails(testId);
      });
    });

    // Boutons de suppression
    this.historyList.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const testId = e.currentTarget.dataset.testId;
        this.deleteTest(testId);
      });
    });

    // Clic sur l'item entier (sauf les boutons)
    this.historyList.querySelectorAll(".history-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (!e.target.closest(".test-actions")) {
          const testId = item.dataset.testId;
          this.viewTestDetails(testId);
        }
      });
    });
  }

  showNoResults() {
    this.historyList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h4>Aucun test correspondant</h4>
                <p>Aucun test ne correspond à vos critères de recherche</p>
                <button class="nav-btn secondary" onclick="statsApp.clearFilters()">
                    Réinitialiser les filtres
                </button>
            </div>
        `;
  }

  clearFilters() {
    if (this.filterCategory) this.filterCategory.value = "all";
    if (this.filterDate) this.filterDate.value = "all";
    if (this.searchInput) this.searchInput.value = "";
    this.applyFilters();
  }

  viewTestDetails(testId) {
    const test = this.savedTests.find((t) => t.id === testId);
    if (!test) {
      this.showNotification("Test non trouvé", "error");
      return;
    }

    // Stocker les données pour la page de détail
    try {
      sessionStorage.setItem("currentTestView", JSON.stringify(test));
      window.location.href = "quiz-results.html?review=" + testId;
    } catch (error) {
      console.error("Erreur navigation détail:", error);
      this.showNotification("Erreur de navigation", "error");
    }
  }

  deleteTest(testId) {
    const test = this.savedTests.find((t) => t.id === testId);
    if (!test) return;

    const quizName = this.getQuizName(test.quizId);
    const confirmation = confirm(
      `Êtes-vous sûr de vouloir supprimer le test "${
        test.name || quizName
      }" ?\n` +
        `Score: ${test.percentage}% - Date: ${new Date(
          test.date
        ).toLocaleDateString("fr-FR")}`
    );

    if (confirmation) {
      this.savedTests = this.savedTests.filter((test) => test.id !== testId);
      this.saveTests();
      this.loadStats(); // Recharger tout
      this.showNotification("Test supprimé avec succès", "success");
    }
  }

  saveTests() {
    try {
      localStorage.setItem("savedQuizzes", JSON.stringify(this.savedTests));
    } catch (error) {
      console.error("Erreur sauvegarde tests:", error);
      this.showNotification("Erreur lors de la sauvegarde", "error");
    }
  }

  renderCharts() {
    if (this.savedTests.length === 0) {
      this.hideCharts();
      return;
    }

    this.showCharts();

    // Utiliser requestAnimationFrame pour de meilleures performances
    requestAnimationFrame(() => {
      this.renderPerformanceChart();
      this.renderCategoryChart();
      this.renderProgressChart();
      this.renderTimeChart();
    });
  }

  hideCharts() {
    const chartContainers = document.querySelectorAll(".chart-container");
    chartContainers.forEach((container) => {
      container.style.display = "none";
    });
  }

  showCharts() {
    const chartContainers = document.querySelectorAll(".chart-container");
    chartContainers.forEach((container) => {
      container.style.display = "block";
    });
  }

  renderPerformanceChart() {
    const recentTests = this.getRecentTests(10);
    if (recentTests.length === 0) return;

    const dates = recentTests.map((test) =>
      new Date(test.date).toLocaleDateString("fr-FR", {
        month: "short",
        day: "numeric",
      })
    );

    const scores = recentTests.map((test) => test.percentage);

    // Détruire le chart existant s'il y en a un
    if (this.charts.performance) {
      this.charts.performance.destroy();
    }

    this.charts.performance = Highcharts.chart("performance-chart", {
      chart: {
        type: "line",
        backgroundColor: "transparent",
      },
      title: {
        text: "Performance des 10 derniers tests",
        style: { color: "#2C3E50", fontSize: "16px" },
      },
      xAxis: {
        categories: dates,
        labels: { style: { color: "#566573" } },
      },
      yAxis: {
        title: {
          text: "Score (%)",
          style: { color: "#566573" },
        },
        min: 0,
        max: 100,
        labels: { style: { color: "#566573" } },
        gridLineColor: "#ECF0F1",
      },
      series: [
        {
          name: "Score",
          data: scores,
          color: "#F18F01",
          marker: {
            symbol: "circle",
            radius: 6,
          },
          lineWidth: 3,
        },
      ],
      credits: { enabled: false },
      legend: { enabled: false },
    });
  }

  renderCategoryChart() {
    const categories = this.calculateCategoryStats();
    const data = Object.entries(categories)
      .sort(([, a], [, b]) => b.averageScore - a.averageScore)
      .map(([quizId, stats]) => ({
        name: this.getQuizName(quizId),
        y: stats.averageScore,
        count: stats.count,
      }));

    if (this.charts.category) {
      this.charts.category.destroy();
    }

    this.charts.category = Highcharts.chart("category-chart", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: "Moyenne par type de concours",
        style: { color: "#2C3E50", fontSize: "16px" },
      },
      xAxis: {
        type: "category",
        labels: {
          style: { color: "#566573" },
          rotation: -45,
        },
      },
      yAxis: {
        title: {
          text: "Score moyen (%)",
          style: { color: "#566573" },
        },
        min: 0,
        max: 100,
        labels: { style: { color: "#566573" } },
        gridLineColor: "#ECF0F1",
      },
      series: [
        {
          name: "Score moyen",
          data: data,
          colorByPoint: true,
          dataLabels: {
            enabled: true,
            format: "{point.y}%",
            style: { color: "#2C3E50", fontWeight: "bold" },
          },
        },
      ],
      credits: { enabled: false },
      tooltip: {
        pointFormat:
          "Moyenne: <b>{point.y}%</b><br>Tests: <b>{point.count}</b>",
      },
    });
  }

  renderProgressChart() {
    const monthlyData = this.calculateMonthlyProgress();
    if (Object.keys(monthlyData).length === 0) return;

    const months = Object.keys(monthlyData).sort();
    const averages = months.map((month) => monthlyData[month].average);

    const monthNames = months.map((month) => {
      const [year, monthNum] = month.split("-");
      return new Date(year, monthNum - 1).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "short",
      });
    });

    if (this.charts.progress) {
      this.charts.progress.destroy();
    }

    this.charts.progress = Highcharts.chart("progress-chart", {
      title: {
        text: "Progression mensuelle",
        style: { color: "#2C3E50", fontSize: "16px" },
      },
      xAxis: {
        categories: monthNames,
        labels: { style: { color: "#566573" } },
      },
      yAxis: {
        title: {
          text: "Score moyen (%)",
          style: { color: "#566573" },
        },
        min: 0,
        max: 100,
        labels: { style: { color: "#566573" } },
        gridLineColor: "#ECF0F1",
      },
      series: [
        {
          name: "Score moyen",
          data: averages,
          type: "line",
          color: "#27AE60",
          lineWidth: 3,
          marker: { symbol: "circle", radius: 5 },
        },
      ],
      credits: { enabled: false },
    });
  }

  renderTimeChart() {
    const recentTests = this.getRecentTests(8);
    if (recentTests.length === 0) return;

    const dates = recentTests.map((test) =>
      new Date(test.date).toLocaleDateString("fr-FR", {
        month: "short",
        day: "numeric",
      })
    );

    const times = recentTests.map((test) =>
      Math.round(Math.abs(test.duration || 0) / (1000 * 60))
    );

    if (this.charts.time) {
      this.charts.time.destroy();
    }

    this.charts.time = Highcharts.chart("time-chart", {
      title: {
        text: "Temps par test (minutes)",
        style: { color: "#2C3E50", fontSize: "16px" },
      },
      xAxis: {
        categories: dates,
        labels: { style: { color: "#566573" } },
      },
      yAxis: {
        title: {
          text: "Temps (min)",
          style: { color: "#566573" },
        },
        labels: { style: { color: "#566573" } },
        gridLineColor: "#ECF0F1",
      },
      series: [
        {
          name: "Durée",
          data: times,
          type: "column",
          color: "#2E86AB",
          dataLabels: {
            enabled: true,
            format: "{point.y} min",
            style: { color: "#2C3E50", fontWeight: "bold" },
          },
        },
      ],
      credits: { enabled: false },
    });
  }

  getRecentTests(limit) {
    return [...this.savedTests]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
      .reverse(); // Plus ancien -> plus récent pour l'affichage
  }

  calculateMonthlyProgress() {
    const monthlyData = {};

    this.savedTests.forEach((test) => {
      const date = new Date(test.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = { total: 0, count: 0 };
      }
      monthlyData[monthKey].total += test.percentage;
      monthlyData[monthKey].count++;
    });

    // Calculer les moyennes
    Object.keys(monthlyData).forEach((month) => {
      monthlyData[month].average = Math.round(
        monthlyData[month].total / monthlyData[month].count
      );
    });

    return monthlyData;
  }

  exportData() {
    if (this.savedTests.length === 0) {
      this.showNotification("Aucune donnée à exporter", "warning");
      return;
    }

    try {
      const exportData = {
        exportedAt: new Date().toISOString(),
        totalTests: this.savedTests.length,
        tests: this.savedTests,
      };

      const dataStr = JSON.stringify(exportData, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `quiz-statistics-${
        new Date().toISOString().split("T")[0]
      }.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      this.showNotification("Données exportées avec succès", "success");
    } catch (error) {
      console.error("Erreur export:", error);
      this.showNotification("Erreur lors de l'export", "error");
    }
  }

  showClearConfirmation() {
    if (this.savedTests.length === 0) {
      this.showNotification("Aucune donnée à supprimer", "warning");
      return;
    }

    this.confirmModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  hideClearConfirmation() {
    this.confirmModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  clearHistory() {
    try {
      localStorage.removeItem("savedQuizzes");
      this.savedTests = [];
      this.hideClearConfirmation();
      this.loadStats();
      this.showNotification("Historique effacé avec succès", "success");
    } catch (error) {
      console.error("Erreur suppression historique:", error);
      this.showNotification("Erreur lors de la suppression", "error");
    }
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <span class="notification-icon">${this.getNotificationIcon(
              type
            )}</span>
            <span class="notification-text">${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">×</button>
        `;

    // Styles de base pour la notification
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;

    document.body.appendChild(notification);

    // Auto-suppression après 5 secondes
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  getNotificationIcon(type) {
    const icons = {
      success: "✅",
      error: "❌",
      warning: "⚠️",
      info: "ℹ️",
    };
    return icons[type] || "ℹ️";
  }

  getNotificationColor(type) {
    const colors = {
      success: "#27AE60",
      error: "#E74C3C",
      warning: "#F39C12",
      info: "#3498DB",
    };
    return colors[type] || "#3498DB";
  }

  showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "stats-error";
    errorDiv.innerHTML = `
            <h3>❌ Erreur</h3>
            <p>${message}</p>
            <button onclick="location.reload()" class="nav-btn primary">Réessayer</button>
        `;

    const main = document.querySelector("main");
    if (main) {
      main.innerHTML = "";
      main.appendChild(errorDiv);
    }
  }

  // Méthode de nettoyage
  destroy() {
    // Détruire tous les charts Highcharts
    Object.values(this.charts).forEach((chart) => {
      if (chart && chart.destroy) {
        chart.destroy();
      }
    });

    // Nettoyer les écouteurs d'événements
    this.charts = {};
  }
}

// Initialisation globale
let statsApp;

document.addEventListener("DOMContentLoaded", () => {
  statsApp = new StatsApp();
});

// Nettoyage avant déchargement de la page
window.addEventListener("beforeunload", () => {
  if (statsApp) {
    statsApp.destroy();
  }
});
