function logOut() {
    localStorage.removeItem("userId")
    goToHome()
}

function goToHome() {
    window.location = "index.html";
  }