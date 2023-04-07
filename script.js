//Article object
let article = {
    name: 'Fall Limited Edition Sneakers',
    price: 250,
    reduction: 50,
    img: ['images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg']
}

let cart = {};

//Modify the price onclick plus or minus
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let sum = document.getElementById('sum');

plusButton.addEventListener("click", buyMore);
minusButton.addEventListener("click", buyLess);

function buyMore() {
    if (sum.textContent < 10) {
        sum.textContent++;
    }
    showPrice();
}

function buyLess() {
    console.log(sum.textContent);
    if (sum.textContent > 0) {
        sum.textContent--;
    }
    showPrice();
}

//Show the price in HTML, before and after reduction
function calcCurrentPrice(currentPrice, currentReduction) {
    return currentPrice - (currentPrice * currentReduction / 100);
}

function showPrice() {
    let newPrice = document.getElementById('newPrice');
    let currentReduction = document.getElementById('currentReduction');
    let currentPrice = document.getElementById('currentPrice');

    currentPrice.textContent = `$${article.price * sum.textContent}.00`;
    currentReduction.textContent = `${article.reduction}%`;
    newPrice.textContent = `$${calcCurrentPrice(article.price, article.reduction) * sum.textContent}.00`;
}

showPrice();

//Create element in cart & stock in table "cart"
let addToCart = document.getElementById('addToCart');

//Swap pic on click
function showThisPic(p) {
    let currentPic = document.getElementById('currentPic');
    console.log(currentPic);
    currentPic.innerHTML = `<img onclick="modalTrigger()" src="${article.img[p]}" alt="">`;
}

showThisPic(0);

//modal window onclick
function displayModalImg(p) {
    let modal = document.querySelector('.modal');
    modal.innerHTML = `<img src="${article.img[p]}" alt=""><div class="imageSelect">

    <img onclick="displayModalImg(0)" src="images/image-product-1-thumbnail.jpg" alt="">
    <img onclick="displayModalImg(1)" src="images/image-product-2-thumbnail.jpg" alt="">
    <img onclick="displayModalImg(2)" src="images/image-product-3-thumbnail.jpg" alt="">
    <img onclick="displayModalImg(3)" src="images/image-product-4-thumbnail.jpg" alt="">

  </div>`;
}

displayModalImg(0);

function modalTrigger() {
    let containerModal = document.querySelector('.containerModal');
    containerModal.classList.toggle('active');
}

//Display article in cart
function displayCart() {
    let cart = document.getElementById('cart');
}

