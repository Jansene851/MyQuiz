// quiz-app.js - Application de Quiz Complète et Optimisée
class QuizApp {
  constructor() {
    this.questions = [];
    this.shuffledQuestions = [];
    this.userAnswers = [];
    this.quizId = null;
    this.quizCompleted = false;
    this.startTime = null;
    this.endTime = null;
    this.quizName = "";
    this.isInitialized = false;

    this.initializeElements();
    this.setupEventListeners();
  }

  initializeElements() {
    try {
      // Éléments principaux
      this.allQuestionsContainer = document.getElementById(
        "all-questions-container"
      );
      this.validateBtn = document.getElementById("validate-btn");
      this.fixedValidateBtn = document.getElementById("fixed-validate-btn");
      this.restartBtn = document.getElementById("restart-btn");

      // Éléments de progression
      this.currentQuestionElement = document.getElementById("current-question");
      this.totalQuestionsElement = document.getElementById("total-questions");
      this.answeredCountElement = document.getElementById("answered-count");
      this.answeredCountFixedElement = document.getElementById(
        "answered-count-fixed"
      );
      this.totalQuestionsFixedElement = document.getElementById(
        "total-questions-fixed"
      );

      // Modal des résultats
      this.resultsModal = document.getElementById("results-modal");
      this.scorePercentageElement = document.getElementById("score-percentage");
      this.correctCountElement = document.getElementById("correct-count");
      this.incorrectCountElement = document.getElementById("incorrect-count");
      this.unansweredCountElement = document.getElementById("unanswered-count");
      this.detailedResultsElement = document.getElementById("detailed-results");

      // Boutons du modal
      this.reviewBtn = document.getElementById("review-btn");
      this.newQuizBtn = document.getElementById("new-quiz-btn");
      this.homeBtn = document.getElementById("home-btn");

      this.quizTitle = document.getElementById("quiz-title");

      this.validateElements();
    } catch (error) {
      console.error("Erreur lors de l'initialisation des éléments:", error);
      this.showFatalError("Erreur de chargement de l'interface");
    }
  }

  validateElements() {
    const elements = {
      "Conteneur questions": this.allQuestionsContainer,
      "Bouton valider": this.validateBtn,
      "Bouton valider fixe": this.fixedValidateBtn,
      "Modal résultats": this.resultsModal,
    };

    for (const [name, element] of Object.entries(elements)) {
      if (!element) {
        throw new Error(`Élément manquant: ${name}`);
      }
    }
  }

  setupEventListeners() {
    // Validation du quiz
    this.validateBtn.addEventListener("click", () => this.validateQuiz());
    this.fixedValidateBtn.addEventListener("click", () => this.validateQuiz());
    this.restartBtn.addEventListener("click", () => this.restartQuiz());

    // Modal des résultats
    this.reviewBtn.addEventListener("click", () => this.reviewAnswers());
    this.newQuizBtn.addEventListener("click", () => this.restartQuiz());
    this.homeBtn.addEventListener(
      "click",
      () => (window.location.href = "index.html")
    );

    // Fermeture du modal
    this.resultsModal.addEventListener("click", (e) => {
      if (e.target === this.resultsModal) this.closeResultsModal();
    });

    // Touche Échap pour fermer le modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.resultsModal.style.display === "flex") {
        this.closeResultsModal();
      }
    });

    // Sauvegarde automatique en quittant la page
    window.addEventListener("beforeunload", (e) => {
      if (
        !this.quizCompleted &&
        this.userAnswers.some((answer) => answer !== null)
      ) {
        this.saveProgressAutomatically();
      }
    });
  }

  // Récupérer l'ID du concours depuis l'URL
  getQuizIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get("concours");

    if (!quizId) {
      throw new Error("Aucun concours spécifié dans l'URL");
    }

    return quizId;
  }

  // Initialiser le quiz
  async init() {
    try {
      if (this.isInitialized) return;

      this.quizId = this.getQuizIdFromURL();
      await this.loadQuestions();

      this.shuffleQuestions();
      this.updateQuizTitle();
      this.displayAllQuestions();
      this.updateProgress();
      this.startTimer();
      this.loadSavedProgress(); // Charger la progression sauvegardée

      this.isInitialized = true;
    } catch (error) {
      console.error("Erreur lors de l'initialisation du quiz:", error);
      this.showError(`Erreur: ${error.message}`);
    }
  }

  // SAUVEGARDE AUTOMATIQUE DE LA PROGRESSION
  saveProgressAutomatically() {
    if (this.userAnswers.some((answer) => answer !== null)) {
      const progress = {
        quizId: this.quizId,
        userAnswers: this.userAnswers,
        timestamp: Date.now(),
        shuffledQuestions: this.shuffledQuestions.map((q) => ({
          question: q.question,
          shuffledOptions: q.shuffledOptions,
          correctShuffledIndex: q.correctShuffledIndex,
        })),
      };
      localStorage.setItem(
        `quizProgress_${this.quizId}`,
        JSON.stringify(progress)
      );
    }
  }

  // CHARGER LA PROGRESSION SAUVEGARDÉE
  loadSavedProgress() {
    try {
      const saved = localStorage.getItem(`quizProgress_${this.quizId}`);
      if (saved) {
        const progress = JSON.parse(saved);

        // Vérifier si la sauvegarde est récente (moins de 2 heures)
        const isRecent = Date.now() - progress.timestamp < 2 * 60 * 60 * 1000;

        if (
          isRecent &&
          confirm("Voulez-vous reprendre votre progression sauvegardée ?")
        ) {
          this.userAnswers = progress.userAnswers;
          this.updateProgress();
          this.restoreSelectedAnswers();
        } else {
          localStorage.removeItem(`quizProgress_${this.quizId}`);
        }
      }
    } catch (error) {
      console.warn("Erreur lors du chargement de la progression:", error);
    }
  }

  // RESTAURER LES RÉPONSES SÉLECTIONNÉES
  restoreSelectedAnswers() {
    this.userAnswers.forEach((answer, questionIndex) => {
      if (answer !== null) {
        const optionElement = document.querySelector(
          `.option-item[data-question="${questionIndex}"][data-option="${answer}"]`
        );
        if (optionElement) {
          optionElement.classList.add("selected");
        }
      }
    });
  }

  // Démarrer le chronomètre
  startTimer() {
    this.startTime = new Date();
  }

  // Calculer le temps passé - VERSION CORRIGÉE
  calculateTimeSpent() {
    if (!this.startTime) return "0s";

    this.endTime = new Date();

    // Validation des dates
    if (isNaN(this.startTime.getTime()) || isNaN(this.endTime.getTime())) {
      console.error("Dates invalides détectées");
      return "0s";
    }

    let timeDiff = this.endTime.getTime() - this.startTime.getTime();

    // Empêcher les valeurs négatives
    if (timeDiff < 0) {
      console.warn("Temps négatif détecté, correction automatique");
      timeDiff = Math.abs(timeDiff);
    }

    // Calculs avec la valeur absolue
    const totalSeconds = Math.floor(timeDiff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes.toString().padStart(2, "0")}m ${seconds
        .toString()
        .padStart(2, "0")}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
    } else {
      return `${seconds}s`;
    }
  }

  // Charger les questions
  loadQuestions() {
    return new Promise((resolve, reject) => {
      try {
        this.questions = getQuizQuestions(this.quizId);

        if (!this.questions || this.questions.length === 0) {
          throw new Error(
            `Aucune question trouvée pour le concours: ${this.quizId}`
          );
        }

        this.totalQuestions = this.questions.length;
        this.userAnswers = new Array(this.totalQuestions).fill(null);

        // Mettre à jour les compteurs
        this.totalQuestionsElement.textContent = this.totalQuestions;
        this.totalQuestionsFixedElement.textContent = this.totalQuestions;
        this.currentQuestionElement.textContent = this.totalQuestions;

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  // Mélanger les questions - OPTIMISÉ
  shuffleQuestions() {
    // Créer une copie profonde des questions
    this.shuffledQuestions = JSON.parse(JSON.stringify(this.questions));

    // Mélanger l'ordre des questions (algorithme Fisher-Yates)
    for (let i = this.shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledQuestions[i], this.shuffledQuestions[j]] = [
        this.shuffledQuestions[j],
        this.shuffledQuestions[i],
      ];
    }

    // Mélanger les options pour chaque question
    this.shuffledQuestions.forEach((question) => {
      const optionsWithIndex = question.options.map((option, index) => ({
        option,
        originalIndex: index,
      }));

      // Mélanger les options
      for (let i = optionsWithIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndex[i], optionsWithIndex[j]] = [
          optionsWithIndex[j],
          optionsWithIndex[i],
        ];
      }

      // Mettre à jour les options mélangées et l'index correct
      question.shuffledOptions = optionsWithIndex.map((item) => item.option);
      question.correctShuffledIndex = optionsWithIndex.findIndex(
        (item) => item.originalIndex === question.correctAnswer
      );

      // Supprimer les propriétés originales pour éviter la confusion
      delete question.options;
      delete question.correctAnswer;
    });
  }

  // Mettre à jour le titre du quiz
  updateQuizTitle() {
    const quizTitles = {
      ena: "🎓 Quiz Concours ENA",
      ens: "✏️ Quiz Concours ENS",
      medecine: "❤️ Quiz Concours Médecine",
      infirmier: "🏥 Quiz Concours Infirmier",
      polytechnique: "⚙️ Quiz Concours Polytechnique",
      commerce: "💼 Quiz Concours Commerce",
      droit: "⚖️ Quiz Concours Droit",
      police: "👮 Quiz Concours Police",
      douanes: "📦 Quiz Concours Douanes",
      "culture-generale": "🌍 Quiz Culture Générale",
    };

    const title = quizTitles[this.quizId] || "🌐 Quiz Concours";
    document.title = `${title} - Côte d'Ivoire`;

    if (this.quizTitle) {
      this.quizTitle.textContent = title;
    }
  }

  // Afficher toutes les questions - OPTIMISÉ
  displayAllQuestions() {
    const questionsHTML = this.shuffledQuestions
      .map(
        (question, questionIndex) => `
            <div class="question-block" data-question-index="${questionIndex}">
                <div class="question-text">${
                  questionIndex + 1
                }. ${this.escapeHTML(question.question)}</div>
                <div class="options-grid" id="options-${questionIndex}">
                    ${question.shuffledOptions
                      .map(
                        (option, optionIndex) => `
                        <div class="option-item" data-question="${questionIndex}" data-option="${optionIndex}">
                            <div class="option-radio"></div>
                            <div class="option-label">${this.escapeHTML(
                              option
                            )}</div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `
      )
      .join("");

    this.allQuestionsContainer.innerHTML = questionsHTML;
    this.addOptionEventListeners();
  }

  // Échapper le HTML pour la sécurité
  escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // Ajouter les écouteurs d'événements pour les options
  addOptionEventListeners() {
    // Utiliser la délégation d'événements pour de meilleures performances
    this.allQuestionsContainer.addEventListener("click", (e) => {
      const optionItem = e.target.closest(".option-item");
      if (optionItem) {
        const questionIndex = parseInt(optionItem.dataset.question);
        const optionIndex = parseInt(optionItem.dataset.option);
        this.selectOption(questionIndex, optionIndex);
      }
    });
  }

  // Sélectionner une option - AVEC ANNULATION
  selectOption(questionIndex, optionIndex) {
    const selectedOption = document.querySelector(
      `.option-item[data-question="${questionIndex}"][data-option="${optionIndex}"]`
    );

    if (!selectedOption) return;

    const isAlreadySelected = selectedOption.classList.contains("selected");

    // Désélectionner toutes les options pour cette question
    document
      .querySelectorAll(`.option-item[data-question="${questionIndex}"]`)
      .forEach((opt) => {
        opt.classList.remove("selected");
      });

    // Si l'option n'était PAS déjà sélectionnée, on la sélectionne
    if (!isAlreadySelected) {
      selectedOption.classList.add("selected");
      this.userAnswers[questionIndex] = optionIndex;
    } else {
      // Si elle était déjà sélectionnée, on annule (désélectionne)
      this.userAnswers[questionIndex] = null;
    }

    this.updateProgress();
    this.saveProgressAutomatically(); // Sauvegarde automatique
  }

  // Mettre à jour la progression
  updateProgress() {
    const answeredCount = this.userAnswers.filter(
      (answer) => answer !== null
    ).length;

    // Mettre à jour les compteurs
    this.answeredCountElement.textContent = answeredCount;
    this.answeredCountFixedElement.textContent = answeredCount;

    // Mettre à jour la barre de progression
    const progressPercentage = (answeredCount / this.totalQuestions) * 100;
    document.documentElement.style.setProperty(
      "--progress-width",
      `${progressPercentage}%`
    );

    // Activer/désactiver le bouton de validation
    const canValidate = answeredCount > 0;
    this.validateBtn.disabled = !canValidate;
    this.fixedValidateBtn.disabled = !canValidate;

    // Changer le style du bouton selon l'état
    const updateButtonState = (button) => {
      if (canValidate) {
        button.classList.add("active");
        button.title = "Cliquez pour valider le quiz";
      } else {
        button.classList.remove("active");
        button.title = "Répondez à au moins une question pour valider";
      }
    };

    updateButtonState(this.validateBtn);
    updateButtonState(this.fixedValidateBtn);
  }

  // Valider le quiz
  validateQuiz() {
    const unansweredCount = this.userAnswers.filter(
      (answer) => answer === null
    ).length;

    if (unansweredCount > 0) {
      const confirmValidate = confirm(
        `Vous n'avez pas répondu à ${unansweredCount} question(s). Êtes-vous sûr de vouloir valider le quiz ?`
      );

      if (!confirmValidate) {
        return;
      }
    }

    this.quizCompleted = true;
    this.calculateResults();
    this.recordQuizResults();
    this.saveQuizAutomatically();
    this.showResults();
    this.clearSavedProgress(); // Nettoyer la progression sauvegardée
  }

  // NETTOYER LA PROGRESSION SAUVEGARDÉE
  clearSavedProgress() {
    localStorage.removeItem(`quizProgress_${this.quizId}`);
  }

  // SAUVEGARDER AUTOMATIQUEMENT LE QUIZ
  saveQuizAutomatically() {
    try {
      this.quizName = this.generateDefaultQuizName();

      const quizResult = {
        id: Date.now().toString(),
        name: this.quizName,
        date: new Date().toISOString(),
        quizId: this.quizId,
        score: this.results.correct,
        totalQuestions: this.totalQuestions,
        percentage: this.results.percentage,
        duration: this.endTime - this.startTime,
        timeSpent: this.calculateTimeSpent(),
        userAnswers: [...this.userAnswers],
        shuffledQuestions: this.shuffledQuestions.map((q) => ({
          question: q.question,
          shuffledOptions: [...q.shuffledOptions],
          correctShuffledIndex: q.correctShuffledIndex,
          explanation: q.explanation,
        })),
        results: this.results,
      };

      const savedTests = this.getSavedTests();
      savedTests.push(quizResult);
      this.saveTestsToStorage(savedTests);

      console.log(`Quiz sauvegardé automatiquement: ${this.quizName}`);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde automatique:", error);
    }
  }

  // GÉNÉRER UN NOM PAR DÉFAUT POUR LE QUIZ
  generateDefaultQuizName() {
    const date = new Date().toLocaleDateString("fr-FR");
    const time = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const quizTitles = {
      ena: "ENA",
      ens: "ENS",
      medecine: "Médecine",
      infirmier: "Infirmier",
      polytechnique: "Polytechnique",
      commerce: "Commerce",
      droit: "Droit",
      police: "Police",
      douanes: "Douanes",
      "culture-generale": "Culture Générale",
    };

    const quizType = quizTitles[this.quizId] || "Concours";
    return `Test ${quizType} - ${date} ${time} - ${this.results.percentage}%`;
  }

  // OBTENIR LES TESTS SAUVEGARDÉS
  getSavedTests() {
    try {
      return JSON.parse(localStorage.getItem("savedQuizzes") || "[]");
    } catch (error) {
      console.error("Erreur lors de la lecture des tests sauvegardés:", error);
      return [];
    }
  }

  // SAUVEGARDER LES TESTS DANS LE STOCKAGE
  saveTestsToStorage(tests) {
    try {
      // Trier par date (du plus récent au plus ancien)
      tests.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Garder seulement les 50 derniers tests
      const limitedTests = tests.slice(0, 50);
      localStorage.setItem("savedQuizzes", JSON.stringify(limitedTests));
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des tests:", error);
    }
  }

  // Calculer les résultats
  calculateResults() {
    this.results = {
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      details: [],
    };

    this.shuffledQuestions.forEach((question, questionIndex) => {
      const userAnswerIndex = this.userAnswers[questionIndex];
      const isCorrect = userAnswerIndex === question.correctShuffledIndex;
      const isAnswered = userAnswerIndex !== null;

      if (!isAnswered) {
        this.results.unanswered++;
      } else if (isCorrect) {
        this.results.correct++;
      } else {
        this.results.incorrect++;
      }

      this.results.details.push({
        question: question.question,
        userAnswer: isAnswered
          ? question.shuffledOptions[userAnswerIndex]
          : null,
        userAnswerIndex: userAnswerIndex,
        correctAnswer: question.shuffledOptions[question.correctShuffledIndex],
        correctAnswerIndex: question.correctShuffledIndex,
        explanation: question.explanation,
        isCorrect: isCorrect,
        isAnswered: isAnswered,
      });
    });

    this.results.percentage = Math.round(
      (this.results.correct / this.totalQuestions) * 100
    );
  }

  // Enregistrer les résultats du quiz
  recordQuizResults() {
    if (window.UserStats) {
      const timeSpent = this.calculateTimeSpent();
      window.UserStats.recordQuizResult(
        this.quizId,
        this.results.correct,
        this.totalQuestions,
        this.results.percentage,
        timeSpent || 0
      );
    }
  }

  // Afficher les résultats
  showResults() {
    // Mettre à jour le résumé
    this.scorePercentageElement.textContent = `${this.results.percentage}%`;
    this.correctCountElement.textContent = this.results.correct;
    this.incorrectCountElement.textContent = this.results.incorrect;
    this.unansweredCountElement.textContent = this.results.unanswered;

    // Mettre à jour le cercle de score
    const scoreCircle = document.querySelector(".score-circle");
    if (scoreCircle) {
      scoreCircle.style.background = `conic-gradient(var(--primary-color) ${this.results.percentage}%, #e0e0e0 ${this.results.percentage}%)`;
    }

    // Afficher les résultats
    this.displayDetailedResults();
    this.displayTimeSpent();
    this.showAutoSaveConfirmation();

    // Afficher le modal
    this.resultsModal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Focus sur le premier bouton du modal pour l'accessibilité
    this.reviewBtn.focus();
  }

  // AFFICHER LA CONFIRMATION DE SAUVEGARDE AUTOMATIQUE
  showAutoSaveConfirmation() {
    let saveSection = this.resultsModal.querySelector(
      ".auto-save-confirmation"
    );

    if (!saveSection) {
      saveSection = document.createElement("div");
      saveSection.className = "auto-save-confirmation";
      saveSection.innerHTML = `
                <div class="save-success-message">
                    <span class="save-icon">✅</span>
                    <span class="save-text">"${this.quizName}" sauvegardé dans votre historique</span>
                    <button id="view-history-btn" class="view-history-btn">Voir l'historique</button>
                </div>
            `;

      const modalContent = this.resultsModal.querySelector(".modal-content");
      const detailedResults =
        this.resultsModal.querySelector(".detailed-results");
      modalContent.insertBefore(saveSection, detailedResults);

      document
        .getElementById("view-history-btn")
        .addEventListener("click", () => {
          this.viewSavedTests();
        });
    }
  }

  // VOIR LES TESTS SAUVEGARDÉS
  viewSavedTests() {
    window.location.href = "historique.html";
  }

  // Afficher le temps passé
  displayTimeSpent() {
    const timeSpent = this.calculateTimeSpent();

    // Créer ou mettre à jour l'élément de temps
    let timeElement = document.getElementById("time-spent");
    if (!timeElement) {
      timeElement = document.createElement("div");
      timeElement.id = "time-spent";
      timeElement.className = "time-spent";
      timeElement.innerHTML = `<strong>⏱️ Temps passé:</strong> <span>${timeSpent}</span>`;

      const resultsSummary = document.querySelector(".results-summary");
      if (resultsSummary) {
        resultsSummary.appendChild(timeElement);
      }
    } else {
      timeElement.querySelector("span").textContent = timeSpent;
    }
  }

  // Afficher les résultats détaillés
  displayDetailedResults() {
    const resultsHTML = this.results.details
      .map((result, index) => {
        const statusClass = result.isAnswered
          ? result.isCorrect
            ? "correct"
            : "incorrect"
          : "unanswered";

        const statusText = result.isAnswered
          ? result.isCorrect
            ? "Correct"
            : "Incorrect"
          : "Non répondu";

        const statusIcon = result.isAnswered
          ? result.isCorrect
            ? "✓"
            : "✗"
          : "?";

        return `
                <div class="result-item ${statusClass}">
                    <div class="result-question">
                        <strong>Question ${
                          index + 1
                        }:</strong> ${this.escapeHTML(result.question)}
                    </div>
                    <div class="result-answer">
                        ${
                          result.isAnswered
                            ? `
                            <div class="answer-line user-answer">
                                <span class="answer-status ${statusClass}">${statusIcon}</span>
                                <strong>Votre réponse:</strong> ${this.escapeHTML(
                                  result.userAnswer
                                )}
                            </div>
                        `
                            : `
                            <div class="answer-line user-answer">
                                <span class="answer-status unanswered">${statusIcon}</span>
                                <strong>Vous n'avez pas répondu</strong>
                            </div>
                        `
                        }
                        ${
                          !result.isCorrect || !result.isAnswered
                            ? `
                            <div class="answer-line correct-answer">
                                <span class="answer-status correct">✓</span>
                                <strong>Bonne réponse:</strong> ${this.escapeHTML(
                                  result.correctAnswer
                                )}
                            </div>
                        `
                            : ""
                        }
                    </div>
                    ${
                      result.explanation
                        ? `
                        <div class="result-explanation">
                            <strong>Explication:</strong> ${this.escapeHTML(
                              result.explanation
                            )}
                        </div>
                    `
                        : ""
                    }
                </div>
            `;
      })
      .join("");

    this.detailedResultsElement.innerHTML = resultsHTML;
  }

  // Revoir les réponses
  reviewAnswers() {
    this.closeResultsModal();
    this.highlightAnswers();
    this.disableQuizInteraction();
  }

  // FERMER LE MODAL DES RÉSULTATS
  closeResultsModal() {
    this.resultsModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // METTRE EN ÉVIDENCE LES RÉPONSES
  highlightAnswers() {
    this.results.details.forEach((result, questionIndex) => {
      const optionsContainer = document.getElementById(
        `options-${questionIndex}`
      );
      if (optionsContainer) {
        optionsContainer
          .querySelectorAll(".option-item")
          .forEach((option, optionIndex) => {
            option.classList.remove("correct", "incorrect", "actual-correct");

            // Marquer la bonne réponse
            if (optionIndex === result.correctAnswerIndex) {
              option.classList.add("actual-correct");
            }

            // Marquer la réponse de l'utilisateur
            if (result.userAnswerIndex === optionIndex) {
              if (result.isCorrect) {
                option.classList.add("correct");
              } else {
                option.classList.add("incorrect");
              }
            }
          });
      }
    });

    document.querySelectorAll(".question-block").forEach((block) => {
      block.classList.add("review-mode");
    });
  }

  // DÉSACTIVER L'INTERACTION AVEC LE QUIZ
  disableQuizInteraction() {
    document.querySelectorAll(".option-item").forEach((option) => {
      option.style.pointerEvents = "none";
    });

    this.validateBtn.textContent = "Quiz Terminé";
    this.validateBtn.disabled = true;
    this.fixedValidateBtn.textContent = "✅ Quiz Terminé";
    this.fixedValidateBtn.disabled = true;
  }

  // Redémarrer le quiz
  restartQuiz() {
    this.closeResultsModal();
    this.resetQuizState();
    this.shuffleQuestions();
    this.displayAllQuestions();
    this.updateProgress();
    this.startTimer();
  }

  // RÉINITIALISER L'ÉTAT DU QUIZ
  resetQuizState() {
    this.quizCompleted = false;
    this.userAnswers = new Array(this.totalQuestions).fill(null);

    document.querySelectorAll(".question-block").forEach((block) => {
      block.classList.remove("review-mode");
    });

    this.validateBtn.textContent = "Valider le Quiz";
    this.fixedValidateBtn.textContent = "✅ Valider le Quiz";
    this.validateBtn.classList.remove("active");
    this.fixedValidateBtn.classList.remove("active");
  }

  // Afficher une erreur
  showError(message) {
    this.allQuestionsContainer.innerHTML = `
            <div class="error-message">
                <h3>❌ Erreur</h3>
                <p>${message}</p>
                <a href="index.html" class="nav-btn primary">Retour à l'accueil</a>
            </div>
        `;
  }

  // Afficher une erreur fatale
  showFatalError(message) {
    document.body.innerHTML = `
            <div class="fatal-error">
                <h1>❌ Erreur Critique</h1>
                <p>${message}</p>
                <a href="index.html" class="nav-btn primary">Retour à l'accueil</a>
            </div>
        `;
  }
}

// Initialiser l'application quand la page est chargée
document.addEventListener("DOMContentLoaded", () => {
  const quizApp = new QuizApp();
  quizApp.init().catch((error) => {
    console.error("Erreur lors du démarrage de l'application:", error);
  });
});
