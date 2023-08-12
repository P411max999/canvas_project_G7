function toggleStylesheet() {
    var stylesheet = document.getElementById("style");
    if (stylesheet.getAttribute("href") === "./css/style-neon.css") {
      stylesheet.setAttribute("href", "./css/style-neu.css");
    } else {
      stylesheet.setAttribute("href", "./css/style-neon.css");
    }
    var navStyle = document.getElementById("style-nav");
    if (navStyle.getAttribute("data-bs-theme") === "grey") {
      navStyle.setAttribute("data-bs-theme", "dark");
    } else {
      navStyle.setAttribute("data-bs-theme", "grey");
    }
  }