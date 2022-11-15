var loginBtn = document.getElementById('login');
var signinBtn = document.getElementById('signin');

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "dangnhap.html";
})

signinBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "dangky.html";
})