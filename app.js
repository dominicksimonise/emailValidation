let input = document.getElementById("inputbox");

input.addEventListener("keydown", validate);

function validate() {
    let form = document.querySelector('.mainForm');
    let pattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;

    if (input.value.match(pattern)) {
        form.classList.remove('invalid');
        form.classList.add('valid');
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
    }
}
