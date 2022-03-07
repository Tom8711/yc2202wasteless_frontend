function checkInloggen(){
  console.log("ik ga checkinloggen implementeren");
  let userid = localStorage.getItem("userid");
  let inlogknop = document.getElementById("inlogbutton");
  console.log(inlogknop);
  if(userid == null){
    inlogknop.innerHTML = "Inloggen";
    inlogknop.onclick = naarInloggen;
  }else{
    inlogknop.innerHTML = "Voorraadkast";
    inlogknop.onclick = naarVoorraadKast;
  }
}
window.onload = checkInloggen;

function naarInloggen(){
  window.location = "login.html";
  // localStorage.setItem("wastelessuserid, 3");
}
function naarVoorraadKast(){
  window.location = "voorraadkast.html";
}