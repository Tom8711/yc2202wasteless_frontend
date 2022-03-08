function checkLoggedIn() {
  let userId = localStorage.getItem("userId");
  let loginButton = document.getElementById("inlogbutton");
  if (userId == null) {
    loginButton.innerHTML = "Inloggen";
    loginButton.onclick = goToLogin;
  } else {
    loginButton.innerHTML = "Mijn Voorraadkast";
    loginButton.onclick = goToMijnVoorraad;
  }
}
window.onload = checkLoggedIn;

function goToLogin() {
  window.location = "login.html";
}
function goToMijnVoorraad() {
  window.location = "voorraadkast.html";
}