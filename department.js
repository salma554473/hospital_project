let depFormBtn = document.querySelector('.register-user');
depFormBtn.addEventListener("click",
function validateForm() {
    let x = document.forms["form"]["username"].value;
    let y = document.forms["form"]["password"].value;
    let z = document.forms["form"]["email"].value;
    if (x == "") {
        alert(" error! username can not be empty");
    }
    if (z == "") {
        alert("email! can not be empty");
    }
    if (y == "" || y.length < 8) {
        alert("error! inavlid password 8 characters min");
    }
}
);



