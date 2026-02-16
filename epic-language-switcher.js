// Current language and translations object
let currentLanguage = localStorage.getItem("language") || "en";
let translations = {};

// Load language file
async function loadLanguage(lang) {
  try {
    const response = await fetch(`/languages/${lang}.json`); // Fixed: was missing opening (
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    translations = await response.json();
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    updatePageLanguage();
    updateLanguageSelector();
    console.log("Language loaded:", lang); // Debug
  } catch (error) {
    console.error("Error loading language:", error);
  }
}

// Update all elements with data-i18n attribute
function updatePageLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.getAttribute("data-i18n").split(".");
    let translation = translations;

    // Navigate through nested JSON keys
    for (let key of keys) {
      translation = translation[key];
    }

    if (translation) {
      element.textContent = translation;
    }
  });
}

// Update the language selector to show current language
function updateLanguageSelector() {
  const select = document.getElementById("languageSelect");
  if (select) {
    select.value = currentLanguage;
  }
}

// Change language function - MAKE IT GLOBAL for onclick to work
window.changeLanguage = function (lang) {
  console.log("Changing language to:", lang); // Debug
  loadLanguage(lang);
};

// Event listener for dropdown (if you add one later)
document.getElementById("languageSelect")?.addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded"); // Debug
  loadLanguage(currentLanguage);
});
