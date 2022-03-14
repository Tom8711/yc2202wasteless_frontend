function checkLoggedIn() {
    let userId = localStorage.getItem("userId");
    let loginButton = document.getElementById("inloglink");
    let dropdownNavbar = document.getElementById("dropdownMenuButton1");
    if (userId == null) {
      loginButton.style.display = "block"
      dropdownNavbar.classList.remove("d-block") 
      dropdownNavbar.classList.add("d-none")
      loginButton.onclick = goToLogin;
    } else {
      loginButton.style.display = "none"
      dropdownNavbar.classList.remove("d-none")
      dropdownNavbar.classList.add("d-block")
    }
  }
  window.onload = checkLoggedIn;
  
  function goToLogin() {
    window.location = "login.html";
  }