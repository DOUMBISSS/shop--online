
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
    // newArticle();
    

// document.querySelector('.cart--container').innerHTML = 'Your cart is empty';
}

// function newArticle(){
//     document.querySelector('.counter').innerHTML =`<div class="cart--articles">
//     <div class="button-block">
//         <div class="handle--quantity">
//           <div class="minus"><h5>-</h5></div>
//           <div class="qty"><h5>1</h5></div>
//           <div class="plus"><h5>+</h5></div>
//         </div>
//     </div>

//     <div class="cart--articles--descriptions">
//         <div class="block--articles">
//             <div class="articles">
//                 <img src="images/jupe.png" alt="">
//             </div>

//             <div class="articles--details">
//                 <p class="names--articles">Jupe volante</p>
//                 <p class="price--articles"> 2000 F</p>
//                 <p class="quantity">3 unités</p>
//             </div>
//         </div>
//     </div>

//     <div class="btn--remove--article">
//         <i class="fa-solid fa-xmark"></i>
//     </div>
// </div>`
// }

// let btnCloseLogin = document.querySelector('.btn--close--login');
// let btnConnexion = document.querySelector('#btn--open--login');
// let btnOpenRegister = document.querySelector('#btn--open--register');
// let btnCloseRegister = document.querySelector('.btn--close--register');

// let Connexion = document.querySelector('.login--part--connexion');
// let registerCard = document.querySelector('.register--part');

// btnCloseLogin.addEventListener('click',closeBtnLogins)
// btnConnexion.addEventListener('click',openLoginConnexion);
// function openLoginConnexion(){
//     if (
//         Connexion.classList.add("show")
//     )
//     closeBtnLogins();
// }

// btnOpenRegister.addEventListener('click',toggleRegisterCard);
// btnCloseRegister.addEventListener('click',toggleRegisterCard);
// function toggleRegisterCard(){
//     registerCard.classList.toggle("shows") 
// }

function closeBtnLogins(){
    Connexion.classList.remove("show")
//     for ( i =0 ; i < btnCloseLogin ; i++)
// btnCloseLogin[i].classList.remove("show");
    
}

let profil = document.querySelector('.sub-menu');
let liste = document.querySelector('.liste');

liste.addEventListener('click',openProfil);

function openProfil(){
    profil.classList.toggle("openProfils")
}
