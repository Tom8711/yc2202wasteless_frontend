function claimItem(itemId) {
  localStorage.removeItem("itemid")
  let result = fetch(url + '/claim/' + itemId + '/createclaim', {
    method: 'POST'
   })
  }

function localVariable(itemid) {
    localStorage.setItem("itemid", itemid)
  }


function removeLocalStorage(itemid){
  localStorage.removeItem("itemid")
}


function getSubmittedItems() {
  fetch(url + "/getoffereditemlist")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let resultString = "";
      for (let y = 0; y < data.length; y++) {
        resultString += `
    <div class="col">
      <div class="card">
        <img src="kaas.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[y].name}`
            //Check if the user is logged in with if-else statement.
            let userId = localStorage.getItem("userId");
            if(userId == null){
              resultString += `<p class="card-text">
                          houdbaarheidsdatum: ${data[y].expirationDate}
                        </p>
                          <p class="card-text">
                          Log in om te reageren
                        </p>
                      </div>
                    </div>
                  </div>`;
            }else{
              resultString += `<button type="button" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="localVariable(${data[y].id})">Claim!</button>
                        <p class="card-text">
                        houdbaarheidsdatum: ${data[y].expirationDate}
                      </p>
                    </div>
                  </div>
                </div>`;}
      }
      document.getElementById("itemList").innerHTML = resultString;
    })
}



// onclick="claimItem(${data[y].id})