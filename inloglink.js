function checkLoggedIn() {
    let userId = localStorage.getItem("userId");
    let loginButton = document.getElementById("inloglink");
    let dropdownNavbar = document.getElementById("dropdownMenuButton1");
    if (userId == null) {
      dropdownNavbar.classList.add("d-none")
      loginButton.classList.add("d-block")
    } else {
      dropdownNavbar.classList.add("d-block")
      loginButton.classList.add("d-none")
    }
  }
  window.onload = checkLoggedIn;
