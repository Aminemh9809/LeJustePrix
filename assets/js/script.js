// exercise 1 
let gender = document.getElementById("gender");
let button = document.getElementById("button");
let message = document.getElementById("message");



function impot() {
    let age = document.getElementById("age").value;
    let selectElement = document.getElementById("gender").value;

    if (selectElement == 'h' && age > 20) {
        message.classList.add("blue");
        message.classList.remove("pink");
        message.classList.remove("red");
        message.innerHTML = "Vous Payez Les impots";
    } else if (selectElement == 'f' && age >= 18 && age <= 35) {
        message.innerHTML = "Vous Payez Les impots";
        message.classList.add("pink");
        message.classList.remove("blue");
        message.classList.remove("red");
    } else  {
        message.innerHTML = "Vous Payez Pas Les impots";
        message.classList.add("red");
        message.classList.remove("blue");
        message.classList.remove("pink");
    }
};
button.addEventListener("click", function () {
    impot();
})
