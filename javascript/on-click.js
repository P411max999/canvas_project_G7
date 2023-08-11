// Get references to all the buttons
var buttons = document.querySelectorAll(".button");

// Add a click event listener to each button except the last four
buttons.forEach(function(button, index) {
  if (index < buttons.length - 4) {
    button.addEventListener("click", function() {
      // Remove the "active" class from all buttons except the last four
      buttons.forEach(function(btn, btnIndex) {
        if (btnIndex < buttons.length - 4) {
          btn.classList.remove("active");
        }
      });

      // Add the "active" class to the clicked button
      button.classList.add("active");
    });
  }
});