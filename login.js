let names = [];
let Password = [];
let Email = [];

function findname() {
    const names = document.getElementById("txt").value;
    const Password = document.getElementById("user@gmail.com").value;
    let displayList = document.getElementById("mypassword");
    displayList.innerHTML += "<p>" + names + " , " + Password + "</p>";
  

}