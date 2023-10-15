let button = document.getElementById("button");
let message = document.getElementById("message");

function count() {
    let prix = 0;

    let number = document.getElementById("number").value;
    if (number <= 10) {
        prix = 0.10 * number;
        message.innerHTML = `le prix pour ${number} copie est : ${prix} `
        message.classList.add("blue");
        message.classList.remove("pink");
        message.classList.remove("red");
    } else if (number > 10 && number <= 30) {
        prix = 0.09 * number;
        // console.log(`le prix pour ${number} copie est : ${prix} `);
        message.innerHTML = `le prix pour ${number} copie est : ${prix} `
        message.classList.add("pink");
        message.classList.remove("blue");
        message.classList.remove("red");

    } else if (number > 30 && number <= 50) {
        prix = 0.08 * number;
        // console.log(`le prix pour ${number} copie est : ${prix} `);
        message.innerHTML = `le prix pour ${number} copie est : ${prix} `
        message.classList.add("red");
        message.classList.remove("blue");
        message.classList.remove("pink");
    }
};

button.addEventListener('click', function () {
    count();
});
