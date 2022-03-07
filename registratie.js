//async function to make sure the user is registered first and then logged in.
async function createUser(){
    let form = {};
    form.userName = document.getElementById("name").value;
    form.email = document.getElementById("email").value;
    form.password = document.getElementById("password").value;
    form.passwordRepeat = document.getElementById("password-repeat").value;
    //Check if password and passwordRepeat are equal.
    if(form.password == form.passwordRepeat)
    {
        //Put the data in json format and wait until the user is registered.
        let data = JSON.stringify(form);
        await fetch(url + "/createuser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'
            },
            body: data
        })
        .then(() => {
            //The user is logged in and travels to the 'mijn voorraadkast' page
            checkLogin(form.userName, form.password);
        })
        .catch(error => {
            alert('Er is iets fout gegaan');
        });
    }else
    {
        alert("Het wachtwoord en het herhaal wachtwoord zijn niet gelijk!")
    }
    
}