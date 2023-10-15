let displayBtn = document.getElementById('display');
const pictures = [
    { src: '../assets/images/leather-bag.jpg', title: '18 Inch Vintage Handmade Leather bag', price: 150 },
    { src: '../assets/images/chaise.png', title: 'Chaise Roulante', price: 75 },
    { src: '../assets/images/costume-haloween.png', title: 'Halloween Costume', price: 30 },
    { src: '../assets/images/grill.png', title: 'Barbecue Grill', price: 200 },
    { src: '../assets/images/guitare.png', title: 'Acoustic Guitar', price: 300 },
];
function getRandomPicture() {
    return pictures[Math.floor(Math.random() * pictures.length)];
}
function display() {
    const container = document.getElementById('picture-container');

    const randomPicture = getRandomPicture();
    const col = document.createElement('div'); // creating a div
    col.className = 'col-md-4'; // Adjust column size as needed

    const img = document.createElement('img');
    img.src = randomPicture.src;
    img.className = 'img-fluid'; // Make the image responsive

    const title = document.createElement('h2');
    title.innerText = randomPicture.title;
    container.appendChild(col);
    col.appendChild(title);
    col.appendChild(img);
    console.log(randomPicture.price); // This will print the price of the randomly selected picture
    // creating input
    const input = document.createElement('input');
    input.className = 'form-control border rounded-pill p-3 text-center font-weight-bold';
    input.type = 'number';
    input.style.fontSize = '1.5rem'; // Custom font size
    input.style.color = '#000'; // Custom text color
    input.style.borderStyle = 'solid'; // Specify border style
    input.style.borderColor = '#ccc'; // Specify border color
    col.appendChild(input);
    // remaining attempts counter   
    const count = document.createElement('h5');
    count.className = 'mb-0';

    count.innerHTML = '';
    col.appendChild(count);

    // creating button
    const button = document.createElement('button');
    button.className = 'btn btn-primary mt-3'; // Apply Bootstrap classes
    button.innerText = 'Click Me'; // Set button text


    col.appendChild(button);
    var element = document.getElementById('displayDiv');
    element.remove();
    let win = document.getElementById('win');
    let wrong =document.getElementById('wrong');
    let lose = document.getElementById('lose');
    let compteur = 10;
    function algo() {
        const userPrice = parseInt(input.value); // Parse the input value to an integer
        if (randomPicture.price == userPrice) {
            count.innerHTML = `well done with price and you still had  ${compteur} tries`;
            win.play();
            button.disabled = true;
        } else if (randomPicture.price < userPrice) {
            compteur--;
            count.innerHTML = `The price is lower ,you still have ${compteur} tries`;
            wrong.play()
        } else if (randomPicture.price > userPrice) {
            compteur--;
            count.innerHTML = `The price is higher ,you still have ${compteur} tries`;
            wrong.play()
        }
        if (compteur == 0) {
            count.innerHTML = `You have run out of tries. Game over.`;
            lose.play();
            button.disabled = true;
        }
    }
    button.addEventListener('click', function () {
        // Algorithms
        algo();
    
    })
}

displayBtn.addEventListener('click', function () {
    display();
})