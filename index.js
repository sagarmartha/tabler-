function myfunction() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('passwordi').value;
 
  if (email == 'sagar111@gmail.com' && password == '123456') {
    alert("successfull")
    window.location.href("form.html")
  }
  else {
    alert{"wrong entry invalid"}
  }
}