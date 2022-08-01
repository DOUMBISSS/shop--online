
let rightContent= document.querySelector('.right--part--content');
let rightPart= document.querySelector('.right--part');

let cartContainer= document.querySelector('.cart--container');
let cartIcon= document.querySelector('.cart--icon');
let btnClose= document.querySelector('.btn--close');


let newArt = document.querySelector('.cart--articles');
let btnAdd= document.querySelectorAll('.btn--add');
for (i = 0 ; i < btnAdd.length ; i++)
btnAdd[i].addEventListener('click',addArticle);


function addArticle () {
    document.querySelector('.counter').innerText = parseInt(document.querySelector('.counter').innerText) + 1 ;
}

function closeBtnLogins(){
    Connexion.classList.remove("show")
}

let profil = document.querySelector('.sub-menu');
let liste = document.querySelector('.liste');

liste.addEventListener('mouseover',openProfil);

function openProfil(){
    profil.classList.toggle("openProfils")
}

// let btnCloseLogin = document.querySelector('.btn--close--login');
// let btnConnexion = document.querySelector('#btn--open--login');
// let btnOpenRegister = document.querySelector('#btn--open--register');
// let btnCloseRegister = document.querySelector('.btn--close--register');

// let Connexion = document.querySelector('.login--part--connexion');
// let registerCard = document.querySelector('.register--part');

// btnCloseLogin.addEventListener('click',closeBtnLogins)
// btnConnexion.addEventListener('click',openLoginConnexion);
// function openLoginConnexion(){
//     if (Connexion.classList.add("show"))
//     closeBtnLogins();
// }

// btnOpenRegister.addEventListener('click',toggleRegisterCard);
// btnCloseRegister.addEventListener('click',toggleRegisterCard);
// function toggleRegisterCard(){
//     registerCard.classList.toggle("shows") 
// }

const thumbs = document.querySelectorAll('.images--thumbails img');
thumbs.forEach(thumb => {thumb.addEventListener('click',changeImage)})

function changeImage(){
    /* let image = '';
    let imagePaths = ['jupe.png','jupe.png','xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp','jupe.png'];
    for (let i=0; i < imagePaths.length; i++){
        if (imagePaths[i]==this.src.substring(6,this.src.length)){
            image = imagePaths[i];
        }
    } */
    let imageSelected = document.querySelector('.images--container img');
    imageSelected.src = this.src;
}

let BtnMenuSidebar = document.querySelector('.menu--sidebar');
let MenuSidebar = document.querySelector('.navbar--container');
let BtnCloseMenuSidebar = document.querySelector('.btn--close--navbar');

BtnMenuSidebar.addEventListener('click',sidebar);
BtnCloseMenuSidebar.addEventListener('click',sidebar);

function sidebar(){
    MenuSidebar.classList.toggle("openSidebar")
}

let BtnSearchbar = document.querySelector('.menu--search');
let searchBarNav = document.querySelector('.navbar--search');
let BtnCloseSearch = document.querySelector('.btn--close--searchbar');

BtnSearchbar.addEventListener('click',searchBar);
BtnCloseSearch.addEventListener('click',searchBar);

function searchBar(){
    searchBarNav.classList.toggle("openSearchbar")
}