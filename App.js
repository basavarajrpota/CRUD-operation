
var row = null;
function SubmitForm(){
  var dataEntered=dataRetrieved();
  let readData=readingDataFromStorage(dataEntered);
  if( dataEntered == false){
    msg.innerHTML="Please fill the Data"
  }
  else{
    if(row == null){
      insert(readData);
      msg.innerHTML= "Data Inserted!";
    }
    else{
      update();
      msg.innerHTML= "Data Updated!";
    }
  }
document.getElementById("form").reset();

}

//Create
//retrieving data from FORM
function dataRetrieved(){
  var empCode=document.getElementById("empCode").value;
  var fullName=document.getElementById("fullName").value;
  var salary=document.getElementById("salary").value;
  let arr=[empCode, fullName, salary]
  if (arr.includes("")){
    return false;
  }
  else{
  return arr;
  }
}


//Read
//data in local Storage
function readingDataFromStorage(dataEntered){
  // storing data in local storage
let eC=localStorage.setItem("EmpCode", dataEntered[0]);
let fN=localStorage.setItem("FullName", dataEntered[1]);
let sal=localStorage.setItem("Salary", dataEntered[2]);


//getting value from local storage
let eC1=localStorage.getItem("EmpCode", eC);
let fN1=localStorage.getItem("FullName", fN)
let sal1=localStorage.getItem("Salary", sal)

let arr1=[eC1, fN1, sal1]
return arr1
}

function insert(readData){
  var row=table.insertRow();
  row.insertCell(0).innerHTML=readData[0];
  row.insertCell(1).innerHTML=readData[1];
  row.insertCell(2).innerHTML=readData[2];
  row.insertCell(3).innerHTML=`<button onclick=edit(this)>Edit</button>
                               <button onclick=remove(this)>Delete</button> `;



  //let cell1=row.insertCell(0);
  // let cell2=row.insertCell(1);
  // let cell3=row.insertCell(2);

  // cell1.innerHTML=readData[0];
  // cell2.innerHTML=readData[1];
  // cell3.innerHTML=readData[2];
}

//Edit function
function edit(x){
row=x.parentElement.parentElement;
document.getElementById("empCode").value=row.cells[0].innerHTML;
document.getElementById("fullName").value=row.cells[1].innerHTML;
document.getElementById("salary").value=row.cells[2].innerHTML;
}

//Update function

function update(){
  row.cells[0].innerHTML=document.getElementById("empCode").value;
  row.cells[1].innerHTML=document.getElementById("fullName").value;
  row.cells[2].innerHTML=document.getElementById("salary").value;
  row = null;
}

//delete function

function remove(x){
  let ans = confirm("Are you sure want to delete the record")
if(ans == true){
  row=x.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}
}