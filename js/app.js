let onglet = document.querySelector('h4');
let onglets= document.querySelector('.onglet');
let rightContent= document.querySelector('.right--part--content');
let rightPart= document.querySelector('.right--part');



onglets.addEventListener('click',ongletVente);
onglet.addEventListener('click',ongletArrivage);

function ongletVente(){
    document.querySelector('.right--part--content').remove();
}
function ongletArrivage(){
    document.querySelector('.right--part').innerHTML = `<div class="right--part--content">
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="#"><img src="images/jupe.png" alt=""></a>
            </div>

            <div class="card--product--content">
                <div class="name--product">
                    <p>Jupe volante</p>
                </div>

                <div class="descrption--product">
                    <p class="prices"> 3500 F<span> / unite</span></p>
                    <p class="prices"> 3500 F<span> / a partir de 5 unités</span></p>
                </div>
                <div class="button--block">
                    <button class="btn--one">Achetez</button>
                    <button class="btn--two">+</button>
                </div>
                
            </div>

        </div>

    </div>

</div>

<div class="more">
    <button>Voir plus</button>
</div>`;
}

// let buy = document.querySelector('.buy');
// let container = document.querySelector('.container') 
// buy.addEventListener('click',buyArticle);

// function buyArticle(){
//     document.querySelector('.container').innerHTML = 
// }

let cartContainer= document.querySelector('.cart--container');
let cartIcon= document.querySelector('.cart--icon');
let btnClose= document.querySelector('.btn--close');



cartIcon.addEventListener('click',Open);
btnClose.addEventListener('click',close);
let counter = document.querySelector('.counter');

function Open() {
    cartContainer.classList.add("OpenCart");
}
function close (){
    cartContainer.classList.remove("OpenCart"); 
}
let newArt = document.querySelector('.cart--articles');
let btnAdd= document.querySelectorAll('.btn--add');
for (i = 0 ; i < btnAdd.length ; i++)
btnAdd[i].addEventListener('click',addArticle);


function addArticle () {
    document.querySelector('.counter').innerText = parseInt(document.querySelector('.counter').innerText) + 1 ;
    // newArticle();

    
//     document.querySelector('.cart--container').innerHTML = `<div class="cart--container--block">
//     <div class="cart--container--header">
//         <div class="cart--description">
//             <i class="fa-solid fa-bag-shopping"></i>
//             <p>3 articles</p>
//         </div>
//         <div class="btn--close">
//             <i class="fa-solid fa-xmark"></i>
//         </div>
//     </div>

//     <div class="cart--container--content">
//         <div class="cart--articles">
//             <div class="button-block">
//                 <div class="handle--quantity">
//                   <div class="minus"><h5>-</h5></div>
//                   <div class="qty"><h5>1</h5></div>
//                   <div class="plus"><h5>+</h5></div>
//                 </div>
//             </div>

//             <div class="cart--articles--descriptions">
//                 <div class="block--articles">
//                     <div class="articles">
//                         <img src="images/jupe.png" alt="">
//                     </div>

//                     <div class="articles--details">
//                         <p class="names--articles">Jupe volante</p>
//                         <p class="price--articles"> 2000 F</p>
//                         <p class="quantity">3 unités</p>
//                     </div>
//                 </div>
//             </div>

//             <div class="btn--remove--article">
//                 <i class="fa-solid fa-xmark"></i>
//             </div>
//         </div>
//     </div>
// </div>`
// btnClose();




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
