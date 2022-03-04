function createUser(){
    let form = {};
    form.userName = document.getElementById("name").value;
    form.email = document.getElementById("email").value;
    form.password = document.getElementById("password").value;
    form.passwordRepeat = document.getElementById("password-repeat").value;
    let data = JSON.stringify(form);
    console.log(data);
    fetch(url + "/createuser", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
        },
        body: data
    })
    .then(() => {
        alert("succes")
    })
    .catch(error => {
        alert('Er is iets fout gegaan');
    });
}