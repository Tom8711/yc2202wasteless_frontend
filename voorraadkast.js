

function updateOffered(itemId, offered) {
    fetch(`${url}/updateoffered/${itemId}/${offered}`, {//// =====>> nieuw endpoint invullen
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            refreshItems();
        })
        .catch(error => {
            alert('Er is iets fouts gegaan');
        });
}

function createItem() {
    const createItemDto = {
        "item": {
            "name": document.getElementById("name").value,
            "expirationDate": document.getElementById("date").value,
            "amount": document.getElementById("amount").value,
            "offered": document.getElementById("offered").checked
        },
        "userId": localStorage.getItem("userId")
    }

    let data = JSON.stringify(createItemDto);
    console.log(data);
    fetch(url + "/createitem", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
        .then(() => {
            refreshItems();
        })
        .catch(error => {
            alert('Er is iets fouts gegaan');
        });
}

function acceptClaim(claimId) {
    console.log(claimId)
    let result = fetch(url + "/claim/" + claimId + "/accept", {
        method: 'POST'

    })
}


function declineClaim(claimId) {
    console.log("Claim geweigerd")
    let result = fetch(`${url}/claim/${claimId}/declined`, {
        method: 'POST'

    })
}


function getAllItemsWithClaim() {
    fetch(`${url}/getclaimeditemswithuserid/${localStorage.getItem("userId")}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let resultString = "";
            for (let y = 0; y < data.length; y++) {
                resultString +=
                    `<div class="col">
        <div class="card">
        <img src="kaas.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${data[y].name} </h5>
            <p class="card-text">
            <div class="d-grid gap-2">
            <button type="button" type="button" class="btn btn-success" onclick="acceptClaim()">
                Accepteren
            </button> 
            <button type="button" type="button" class="btn btn-danger" onclick="declineClaim()">
                Weigeren
            </button> 
            </div>
            </p>
            </div>
        </div>
        </div>`;
            }
            if (resultString) {
                document.getElementById("claimedItemsHeader").classList.remove("d-none")
            } else {
                document.getElementById("claimedItemsHeader").classList.add("d-none")
            }
            document.getElementById("claimedItemList").innerHTML = resultString;
        })
}

function getAllItemsSortedByDate() {

    fetch(url + "/getitemswithuserid/" + localStorage.getItem("userId"))//// =====>> nieuw endpoint invullen
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let resultString = "";
            for (let y = 0; y < data.length; y++) {
                if (!data[y].claim) {
                    resultString +=
                        `<div class="col">
        <div class="card">
        <img src="kaas.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data[y].name} `
                    if (!data[y].offered) {
                        resultString += `<button type="button" type="button" class="btn btn-success me-1" onclick="updateOffered(${data[y].id}, true)">aanbieden</button>`
                    } else {
                        resultString += `<button type="button" type="button" class="btn btn-primary me-1" onmouseout="onHoverCancel(this, false)" onmouseover="onHoverCancel(this, true)" onclick="updateOffered(${data[y].id}, false)">Aangeboden</button>`
                    }

                    resultString += `<button type="button" type="button" class="btn btn-danger" onclick="deleteItem(${data[y].id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button> 
            </h5>
            <p class="card-text">
                houdbaarheidsdatum: ${data[y].expirationDate}
            </p>
            </div>
        </div>
        </div>`;
                }
            }
            document.getElementById("itemList").innerHTML = resultString;
        })
}

function deleteItem(userId) {
    fetch(url + "/deleteitem/" + userId, {//// =====>> nieuw endpoint invullen
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            refreshItems();
        })
        .catch(error => {
            alert('Er is iets fouts gegaan');
        });
}

function onHoverCancel(x, bool) {
    if (bool) {
        x.classList.remove("btn-primary")
        x.classList.add("btn-danger")
        x.innerHTML = "Cancel";
    } else {
        x.classList.remove("btn-danger")
        x.classList.add("btn-primary")
        x.innerHTML = "Aangeboden";
    }

}

function refreshItems() {
    getAllItemsWithClaim();
    getAllItemsSortedByDate();
}

refreshItems();
