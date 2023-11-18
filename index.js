function myfunction() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email == 'sagar111@gmail.com' && password == '123456') {
    alert("successfull")
    window.open('https://sagarmartha.github.io/tabler-/tabler%20website/index2.html');
  }
  else {
    alert("wrong entry invalid")
    return false;
  }
}