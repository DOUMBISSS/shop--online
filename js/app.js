let onglet = document.querySelector('h4');
let onglets= document.querySelector('.onglet');
let rightContent= document.querySelector('.right--part--content');
let rightPart= document.querySelector('.right--part');


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
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
    <div class="card">
        <div class="card--product">
            <div class="card--product--image">
                <a href="details articles.html"><img src="images/jupe.png" alt=""></a>
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
                    <button class="btn--buy"><a href="details articles.html">Achetez</a></button>
                    <button class="btn--add">+</button>
                </div>
                
            </div>

        </div>

    </div>
</div>`;
}

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
    document.querySelector('.counter').innerText = parseInt(document.querySelector('.counter').innerText) + 1;
    numArticle();
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


let leftContainer = document.querySelector('.left--part--container');
let btnCloseLeftPart = document.querySelector('.btn--close--left--part');
let btnFilter= document.querySelector('.filter');

btnFilter.addEventListener('click',openLeftContainer)
btnCloseLeftPart.addEventListener('click',closeLeftContainer)

function openLeftContainer(){
    if(
        leftContainer.classList.add("showLeftContainer")
    )
    closeLeftContainer();
}

function closeLeftContainer(){
    leftContainer.classList.remove("showLeftContainer")
}

let number = document.querySelector('.numbers--articles');
function numArticle(){
    document.querySelector('.numbers--articles').innerText = parseInt(document.querySelector('.counter').innerText) + 1 ;
}