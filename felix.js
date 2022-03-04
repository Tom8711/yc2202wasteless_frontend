function checkInloggen(){
  console.log("ik ga checkinloggen implementeren");
  let userid = localStorage.getItem("wastelessuserid");
  let inlogknop = document.getElementById("inlogbutton");
  console.log(inlogknop);
  if(userid == undefined){
    inlogknop.innerHTML = "Inloggen"
  }else{
    inlogknop.innerHTML = "Voorraadkast"
  }
}
window.onload = checkInloggen;