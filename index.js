const loadingPage = document.querySelector('.loading-page');
const mainPage = document.querySelector('.main-page');
const homePage = document.querySelector('.main-page');
const optionPage = document.querySelector('.container-option-search');
const loginPage = document.querySelector('.container-page-login');
const categoryPage = document.querySelector('.container-page-category');
const notificationPage = document.querySelector('.container-page-notifications');
const profilePage = document.querySelector('.container-page-profile');
const orderNShipping = document.querySelector('.container-order-shipping');


const shipNoderText = document.querySelector('.container-order-shipping .box-info .title-text');
const input = document.querySelector('#search-input');
const moreOption = document.getElementById('more-options');
const footer = document.querySelector('footer');


input.addEventListener('touchstart', () => {
 optionPage.classList.add('active');
 moreOption.name = 'arrow-back';
})

function moreOptions() {
 const isArrowBack = moreOption.name === 'arrow-back';
 moreOption.name = isArrowBack ? 'ellipsis-vertical' : 'arrow-back';
 optionPage.classList.toggle('active');
}

function handleSwitchPage(page) {
 const allPages = [homePage, categoryPage, notificationPage, loginPage,profilePage];
 allPages.forEach((page) => {
  page.classList.remove('actives');
 });
 
 switch(page) {
  case 'home':
   homePage.classList.toggle('actives');
   mainPage.appendChild(footer);
  break;
  case 'category':
   categoryPage.classList.toggle('actives');
   categoryPage.appendChild(footer);
  break;
  case 'notification':
   notificationPage.classList.toggle('actives');
   notificationPage.appendChild(footer);
  break;
  case 'profile':
   profilePage.classList.toggle('actives');
   profilePage.appendChild(footer);
  break;
  default:
   mainPage.appendChild(footer);
   homePage.classList.toggle('actives');
 }
}

const amountProduct = 10; //nilai untuk mengatur jumlah banyak nya product
const containerProduct = document.querySelector('.wrapper-content-items');
const itemProduct = document.querySelector('.items-product');

const productRecomended = document.querySelector('.product-recomended');
const containerRecomended = document.querySelector('.wrapper-recomended-product');

const arrayNameProduct = ["two-tone shirt", "long-sleeved shirt", "cute women's sweaters", "Girls Pikachu Shirt", "skirt jumpsuit", "cute Hoodie Dino", "Kartini's kebaya", "kebaya encim", "cute Teddy bear Hoodie", "women's crop tops", "white long-sleeved dress"];

for (let i = 0; i <= amountProduct; i++) {
 const cloneItemProduct = itemProduct.cloneNode(true);
 const cloneRecomendedProduct = productRecomended.cloneNode(true);
 
 //variabel untuk mengambil image product dari setiap parents
 const imgProduct = cloneItemProduct.querySelector('.image');
 const imgRecomendedProduct = cloneRecomendedProduct.querySelector('.image');
 
 //variabel untuk mengambil nama product dari setiap parents
 const nameRecomendedProduct = cloneRecomendedProduct.querySelector('.title-product');
 const nameProduct = cloneItemProduct.querySelector('.name-product');
 
 
 imgProduct.src = `assets/product/sell/product${i}.jpeg`;
 imgRecomendedProduct.src = `assets/product/sell/product${i}.jpeg`;
 
 nameProduct.textContent = arrayNameProduct[i] || 'Null';
 nameRecomendedProduct.textContent = arrayNameProduct[i] || 'Null';
 
 containerProduct.appendChild(cloneItemProduct);
 containerRecomended.appendChild(cloneRecomendedProduct);
}

let amountCategory = 14;
const arrayNameCategory = ["Cottagecore", "Summer Fits", "Elegant", "Classic", "Y2K", "90s Gems", "Beuty", "Tops", "Dresses", "Camisoles", "Skirts", "Bags", "Outers", "Accessories"];

const wrapperCategory = document.querySelector('.wrapper-category-list');
const categoryList = document.querySelector('.items-list');

for (let x = 1; x < amountCategory; x++) {
 const cloneCategoryList = categoryList.cloneNode(true);
 const nameCategory = cloneCategoryList.querySelector('.title-category');
 
 wrapperCategory.appendChild(cloneCategoryList);
 nameCategory.textContent = arrayNameCategory[x];
}

function handleAction(action) {
 setTimeout(() => {
  profilePage.classList.toggle('actives');
  orderNShipping.classList.toggle('actives');
 }, 1500);
 switch(action) {
  case 'packing':
   shipNoderText.textContent = "Belum ada pesanan di sini";
  break;
  case 'shipping':
   shipNoderText.textContent = "Belum ada pengiriman barang di sini";
  break;
 }
}

function openMainPage() {
  loginPage.classList.remove('actives');
  mainPage.classList.add('actives');
}

setTimeout(() => {
  loginPage.classList.add('actives');
  loadingPage.classList.add('actives');
}, 3500);