function getAllChats() {
    console.log("get all chats")
    fetch(url + `/getAllChats/${localStorage.getItem("userId")}`)//// =====>> nieuw endpoint invullen
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let resultString = '<ol class="list-group">';
            for (let y = 0; y < data.length; y++) {
                resultString+=`
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">${data[y].name}</div>
                    ${data[y].latestMsg} at ${data[y].timeSended}
                    </div>
                    <span class="badge bg-primary rounded-pill">${data[y].chatSize}</span>
                </li>
           `
            }
            resultString += ' </ol>'
            document.getElementById("myChatsList").innerHTML = resultString;
        })
}

getAllChats();