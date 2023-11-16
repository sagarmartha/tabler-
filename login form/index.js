function fun() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email == 'sagar999@gmail.com' && password == '123456') {
    window.location.assign("index2.html")
  }


}


function showModel() {
  document.querySelector('.overlay').classList.add('showoverlay');
  document.querySelector('.loginform').classList.add('showloginform');
}
  
  function closeModel() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
    
}
var c = document.querySelector("span");
c.addEventListener("click", closeModel);