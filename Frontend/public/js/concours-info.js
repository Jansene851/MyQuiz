// concours-info.js

const concoursInfo = {
  ena: {
    nom: "École Nationale d'Administration (ENA)",
    description:
      "L'École Nationale d'Administration (ENA) de Côte d'Ivoire a pour mission de former les hauts fonctionnaires de l'État. Le concours d'entrée est très sélectif et exige une préparation rigoureuse.",
    date: "Le concours est généralement organisé au mois de septembre.",
    conditions:
      "Être titulaire d'au moins une licence (Bac+3) ou d'un diplôme équivalent. Être âgé de 35 ans au plus au 1er janvier de l'année du concours.",
    epreuves: [
      "Épreuve de culture générale",
      "Épreuve de droit public",
      "Épreuve d'économie",
      "Épreuve de langue étrangère (anglais, espagnol ou allemand)",
      "Épreuve de note de synthèse",
    ],
    liens: {
      officiel: "http://www.ena.ci",
    },
  },
  // ... Ajouter les autres concours avec des informations similaires
};

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("concours-select");
  const detailsContainer = document.getElementById("concours-details");

  select.addEventListener("change", function () {
    const selectedConcours = this.value;
    if (selectedConcours && concoursInfo[selectedConcours]) {
      displayConcoursInfo(concoursInfo[selectedConcours]);
    } else {
      detailsContainer.innerHTML =
        '<p class="no-selection">Veuillez sélectionner un concours pour voir les détails.</p>';
    }
  });

  function displayConcoursInfo(info) {
    let epreuvesHTML = "";
    if (info.epreuves && info.epreuves.length) {
      epreuvesHTML = "<ul>";
      info.epreuves.forEach((epreuve) => {
        epreuvesHTML += `<li>${epreuve}</li>`;
      });
      epreuvesHTML += "</ul>";
    }

    let liensHTML = "";
    if (info.liens) {
      for (const [type, url] of Object.entries(info.liens)) {
        liensHTML += `<a href="${url}" target="_blank">Site officiel</a>`;
      }
    }

    detailsContainer.innerHTML = `
      <div class="concours-info">
        <h3>${info.nom}</h3>
        <p><strong>Description :</strong> ${info.description}</p>
        <p><strong>Date :</strong> ${info.date}</p>
        <p><strong>Conditions d'accès :</strong> ${info.conditions}</p>
        <div class="epreuves">
          <strong>Épreuves :</strong>
          ${epreuvesHTML}
        </div>
        <div class="liens">
          ${liensHTML}
        </div>
      </div>
    `;
  }
});
