//checklogin fetches the endpoint that finds the user by username and checks if the password is correct.
function checkLogin(username, password) {
    fetch(url + "/finduserbyusername/" + username + "/" + password)
        //If the username or the password is incorrect, response.ok will not pass and an error is thrown.
        .then((response) => {
            if (response.ok) {   //If both the username and the password are correct, the user will be returned and put in json format.
              return response.json();
            }
            throw new Error()
        })
        //The method setUserId will be called with the userid as an argument.
        .then((data) => {
            setUserId(data.id);
        })
        .catch(error => {
            alert("Wachtwoord of Username is onjuist")
        })
}

//loginUser() takes the values of the inputfield and passes them through loginUser().
function loginUser() {
    username = document.getElementById("name").value;
    password = document.getElementById("password").value;
    checkLogin(username, password);
}

//setUserId() takes the userid and uses it to set the localstorage variable.
function setUserId(userid) {
    localStorage.setItem("userid", userid);
    window.location = "voorraadkast.html";
}