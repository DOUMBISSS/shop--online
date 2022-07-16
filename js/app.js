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

function Open() {
    cartContainer.classList.add("OpenCart");
}
function close (){
    cartContainer.classList.remove("OpenCart"); 
}
