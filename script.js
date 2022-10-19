
var formTable = `<div>
  <div class="form-group">
    <label for="name">First Name</label>
    <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Your Name">
    <small></small>
  </div>

  <div class="form-group mt-3">
    <label for="email">Last Name</label>
    <input type="text" class="form-control" id="lastname" placeholder="Enter Your Last Name">
    <small></small>
  </div>


  <div class="form-group mt-3">
    <label for="address">Address</label>
    <input type="text" class="form-control" id="address" placeholder="Enter Your Address">
    <small></small>
  </div>

  

  <div class="form-group mt-3">
    <label for="dateOfBirth">Date Of Birth</label>
    <input type="date" class="form-control" id="dateOfBirth" placeholder="Enter Your Date Of Birth">
    <small></small>
  </div>

  <div class="form-group mt-3">
        <label for="gender">Choose gender</label>
        <select id="gender" class="form-select" aria-label="Default select example">
            <option selected="disabled"></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <small></small>
  </div>

  <div class="form-group mt-3">
    <label for="floatingTextarea">Comments</label>
    <textarea type="text" class="form-control" id="floatingTextarea" placeholder="Comments" ></textarea>
    <small></small>
  </div>
  <button type="submit" class="btn btn-primary" onclick="save()">Submit</button>
</div>`;



function table() {
    let table = `<table class="table" id="popupTable">
  <thead>
    <tr id="popupTr">
      <th class="col-1">#</th>
      <th class="col-1">First Name</th>
      <th class="col-1">Last Name</th>
      <th class="col-1">Address</th>
      <th class="col-1">dateOfBirth</th>
      <th class="col-1">Gender</th>
      <th  class="col-1">Comments</th>
      <th class="col-1">Delete</th>
      <th class="col-1">Info</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr id="tableTr">
      <td data-label="#">${i + 1}</td>
      <td data-label="First Name">${details[i].firstname}</td>
      <td data-label="Last Name">${details[i].lastname}</td>
      <td data-label="Address">${details[i].address}</td>
      <td data-label="dateOfBirth">${details[i].dateOfBirth}</td>
      <td data-label="Gender">${details[i].gender}</td>
      <td id="textArea" data-label="Comments">${details[i].floatingTextarea}</td>
      <td data-label="Delete"><button type="button" class="btn btn-danger btn-sm" onclick="deleteData(${i})">Delete</button></td>
      <td data-label="Info"><button type="button" id="infoButton" class="btn btn-primary btn-sm">INFO</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = formTable;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let address = document.getElementById("address");
    let dateOfBirth = document.getElementById("dateOfBirth");
    let gender = document.getElementById("gender");
    let floatingTextarea = document.getElementById("floatingTextarea");

    let letters = /^[a-zA-Z]*$/;
    let lettersAndNumbers = /^([a-zA-Z0-9 _-]+)$/;

    if(firstname.value === '' ) {
        setErrorFor(firstname, 'First name is required');
        return false;
      } else if(!firstname.value.match(letters)) {
        setErrorFor(firstname, 'Only latin characters allowed');
        return false;
       } else  {
        setSuccessFor(firstname, 'Your name is valid') ;
      }
      
        if(lastname.value === '') {
            setErrorFor(lastname, 'Last name is required');
            return false;
          } else if(!(lastname.value.match(letters) )){
            setErrorFor(lastname, 'Only latin characters allowed');
            return false;
          } else {
              setSuccessFor(lastname, 'Your Last name is valid') ;
            }
          
    
    
          if(address.value === '') {
            setErrorFor(address, 'Address is required');
            return false;
          } else if(address.value.length > 35 ) {
            setErrorFor(address, '35 character limit');
            return false;
          } else if (!(address.value.match(lettersAndNumbers))) {
            setErrorFor(address, 'Only latin characters allowed');
            return false;
        } else {
            setSuccessFor(address, 'Address  is valid') ;
          }

          function setErrorFor(input, message) {
            const formControl = input.parentElement; // .form-control ;
            const small = formControl.querySelector('small');
            small.innerText = message;
            formControl.className = 'form-control error' ;
        }
        
        function setSuccessFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-control success';
            small.innerText = message;
        } 

    let data = {
        firstname: firstname.value,
        lastname: lastname.value,
        address: address.value,
        dateOfBirth: dateOfBirth.value,
        gender: gender.value,
        floatingTextarea: floatingTextarea.value,
       
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    firstname.value = "";
    lastname.value = "";
    address.value = "";
    dateOfBirth.value = "";
    gender.value = "";
    floatingTextarea.value = "";


    
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

// const infoButton = document.getElementById('infoButton');
// infoButton.addEventListener('click', ()=>{
//   const popupTable = document.getElementById('popupTable');
//   const tr = popupTable.getElementsByTagName('td');
//   for (var i = 0, len = tr.length; i < len; i++) {
//         tr[i].onclick = function () {
//             alert(this.innerText);
  
//   }
//   }
// })


var tableX = document.getElementById('table'),
    cells = tableX.getElementsByTagName('td');

for (var i = 0, len = cells.length; i < len; i++) {
    cells[i].onclick = function () {
        alert(this.innerText);
        /* if you know it's going to be numeric:
        console.log(parseInt(this.innerHTML),10);
        */
    };
}

