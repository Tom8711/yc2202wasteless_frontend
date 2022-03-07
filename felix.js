function checkLoggedIn() {
  let userid = localStorage.getItem("userid");
  let loginButton = document.getElementById("inlogbutton");
  if (userid == null) {
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