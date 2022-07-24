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


// let selectCat = document.querySelectorAll('.cols');
// for (let i = 0 ; i < selectCat.length ; i++)
// selectCat[i].addEventListener('mouseover',choiceCategories);
// selectCat[i].addEventListener('mouseout',choiceCategories);

// function choiceCategories(){
//     this.classList.add("overlay");

// }
// function choiceCategories(){
//     this.classList.remove("overlay");
// }
//

// 