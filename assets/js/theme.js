// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-light");
    }
})();

// fonction pour mettre un theme aux card
function setCardTheme(cardThemeName) {
    localStorage.setItem("cardTheme", cardThemeName);
    document.getElementsByClassName("card-container").className = cardThemeName;
}

//charger immédiatement theme blanc pour les cards
(function () {
    if (localStorage.getItem("cardTheme") === "card-theme-dark") {
        setCardTheme("card-theme-light");
    } else {
        setCardTheme("card-theme-light");
    }
});
