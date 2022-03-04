function getSubmittedItems(){
fetch(url+"/getoffereditemlist")
.then((response)=>{
  return response.json();
})
.then((data)=>{
  let resultString="";
  for(let y= 0; y<data.length; y++){
    resultString += `
    <div class="col">
      <div class="card">
        <img src="kaas.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[y].name}  
            <button type="button" type="button" class="btn btn-success" onclick="aanbieden(${data[y].id})">Reageer</button>
            </h5>
            <p class="card-text">
              houdbaarheidsdatum: ${data[y].expirationDate}
            </p>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("itemList").innerHTML = resultString;
})
}