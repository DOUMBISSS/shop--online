let rightContent= document.querySelector('.right--part--content');
let rightPart= document.querySelector('.right--part');


let cartContainer= document.querySelector('.cart--container');
let cartIcon= document.querySelector('.cart--icon');
let btnClose= document.querySelector('.btn--close');



cartIcon.addEventListener('click',open);
btnClose.addEventListener('click',close);
let counter = document.querySelector('.counter');

function open() {
    cartContainer.classList.add("OpenCart");
}
function close(){
    cartContainer.classList.remove("OpenCart"); 
}



let newArt = document.querySelector('.cart--articles');
let btnAdd= document.querySelectorAll('.btn--add');
for (i = 0 ; i < btnAdd.length ; i++)
btnAdd[i].addEventListener('click',addArticle);


function addArticle () {
    document.querySelector('.counter').innerText = parseInt(document.querySelector('.counter').innerText) + 1 ;
    numArticle();
}

let number = document.querySelector('.numbers--articles');
function numArticle(){
    document.querySelector('.numbers--articles').innerText = parseInt(document.querySelector('.counter').innerText) + 1 ;
}

let btnCloseLogin = document.querySelector('.btn--close--login');
let btnConnexion = document.querySelector('#btn--open--login');
let btnOpenRegister = document.querySelector('#btn--open--register');
let btnCloseRegister = document.querySelector('.btn--close--register');

let Connexion = document.querySelector('.login--part--connexion');
let registerCard = document.querySelector('.register--part');

btnCloseLogin.addEventListener('click',closeBtnLogins)
btnConnexion.addEventListener('click',openLoginConnexion);
function openLoginConnexion(){
    if (
        Connexion.classList.add("show")
    )
    closeBtnLogins();
}

btnOpenRegister.addEventListener('click',toggleRegisterCard);
btnCloseRegister.addEventListener('click',toggleRegisterCard);
function toggleRegisterCard(){
    registerCard.classList.toggle("shows") 
}

function closeBtnLogins(){
    Connexion.classList.remove("show")
//     for ( i =0 ; i < btnCloseLogin ; i++)
// btnCloseLogin[i].classList.remove("show");
    
}

let profil = document.querySelector('.sub-menu');
let liste = document.querySelector('.liste');

liste.addEventListener('mouseover',openProfil);

function openProfil(){
    profil.classList.toggle("openProfils")
}

// let selectCat = document.querySelectorAll('.cols');
// for (let i = 0 ; i < selectCat.length ; i++)
// selectCat[i].addEventListener('mouseover',choiceCategories);

// function choiceCategories(){
//     this.classList.add("overlay");

// }
// function choiceCategories(){
//     this.classList.remove("overlay");
// }
//

// 