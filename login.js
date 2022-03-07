function checkLogin(username, password){
    fetch(url + "/finduserbyusername/"+ username + "/" + password)
        .then((response) => {
           return response.json();
        })
        .then((data) => {
           setUserId(data.id);
        })
        .catch(error =>{
            alert("Username bestaat niet.")
        })
}


function loginUser() {
    username = document.getElementById("name").value;
    password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    checkLogin(username, password);
    
    //console.log(userId);
}

function setUserId(userid) {
    localStorage.setItem("userid", userid);
    window.location = "voorraadkast.html";
    console.log("tom was here");
}