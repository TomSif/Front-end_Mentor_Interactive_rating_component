const buttons = document.querySelectorAll(".footer__rating-btn");
const submitBtn = document.getElementById("submitBtn");
const ratingSection = document.querySelector(".rating");
const thankUSection = document.querySelector(".thank-you");
const ratingResultSpan = document.getElementById("ratingResult");

let boutonActif = null;
let rating = null;

// Fonction qui change la couleur des bouton et qui récupère le résultat du vote
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // clean ative style of button
    if (boutonActif) {
      boutonActif.classList.remove("buttonActive");
    }
    // add active style to clicked button for user to know which is clicked
    button.classList.add("buttonActive");
    boutonActif = button;

    // Réinitialise aria-pressed pour tous les boutons
    buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));

    // Active aria-pressed pour le bouton cliqué
    button.setAttribute("aria-pressed", "true");

    rating = button.dataset.rating;
    console.log(`La valeur du bouton est : ${rating}`);
    //Ecriture dans le span du score rating
    ratingResultSpan.innerHTML = rating;
  });
});

// fonction d'écoute du bouton et apparition du message de remerciement

submitBtn.addEventListener("click", (e) => {
  submitBtn.classList.add("bounce"); // Submit Button animation

  e.preventDefault();

  // Vérifie que rating est un nombre valide et non nul
  if (rating > 0) {
    ratingSection.style.animation =
      "hide 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);"; // animation

    // Utilise setTimeout pour attendre la fin de l'animation avant de masquer la section
    setTimeout(() => {
      ratingSection.style.display = "none"; // Cache la section de notation
      thankUSection.style.display = "flex"; // Affiche la section de remerciement
    }, 300); // Délai de 2 secondes pour correspondre à la durée de l'animation
  }
});
