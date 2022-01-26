

function login() {

  var email = document.getElementById('Email').value;
  var password = document.getElementById('Password').value;


  if (email = "" || password == "") {
    alert("Email or Password cannot be empty");
    return;
  }


  if (email = "user@gmail.com" && password == "mypassword") {
    window.location.href = "home.html"
  }

  
}
