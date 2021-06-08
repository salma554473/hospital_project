let depFormBtn = document.querySelector('.user');
depFormBtn.addEventListener("click",
function validateForm() {
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["password"].value;
    if (x == "") {
        alert(" error! username can not be empty");
    }
    if (x == "") {
        alert(" error! username can not be empty");
    }
    if (x == "") {
        alert(" error! username can not be empty");
    }
    if (y == "" || y.length < 8) {
        alert("error! inavlid password 8 characters min");
    }
}
);