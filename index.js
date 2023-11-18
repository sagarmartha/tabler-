function myfunction() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email == 'sagar111@gmail.com' && password == '123456') {
    alert("successfull")
    window.open('/tabler website/index2.html');
  }
  else {
    alert("wrong entry invalid")
    return false;
  }
}