document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Welcome to Rout Raid! Booking feature is coming soon.");
    });
  });
});
