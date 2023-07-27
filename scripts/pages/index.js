
function getIngredients(recipes) {
    let listeIngredients = [];

    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredients => {
            if (!listeIngredients.includes(ingredients.ingredient.toLowerCase()))
                listeIngredients.push(ingredients.ingredient.toLowerCase());
        });
    }

    );
    return listeIngredients;
}

function getAppareils(recipes) {
    let listeAppareils = [];
    recipes.forEach(recipe => {
        if (!listeAppareils.includes(recipe.appliance))
            listeAppareils.push(recipe.appliance);
    }
    );
    return listeAppareils;
}

function getUstensiles(recipes) {
    let listeUstensilles = [];
    recipes.forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            if (!listeUstensilles.includes(ustensil))
                listeUstensilles.push(ustensil);
        });
    }

    );

    return listeUstensilles;
}

function init() {
    const divIngredient = document.getElementById("filterIngredientHeading");
    const filters = document.getElementsByClassName("filter");
    for (let i = 0; i < filters.length; i++) {
        filters[i].getElementsByTagName("p")[0].addEventListener("click", function () {
            switch (i) {
                case 0:
                    document.getElementById("chevronIngredient").classList.toggle("fa-chevron-down");
                    document.getElementById("chevronIngredient").classList.toggle("fa-chevron-up");
                    document.getElementById("contentFilterIngredient").classList.toggle("hidden");
                    document.getElementById("contentFilterIngredient").classList.toggle("contentFilter");
                    break;
                case 1:
                    document.getElementById("chevronAppareil").classList.toggle("fa-chevron-down");
                    document.getElementById("chevronAppareil").classList.toggle("fa-chevron-up");
                    document.getElementById("contentFilterAppareil").classList.toggle("hidden");
                    document.getElementById("contentFilterAppareil").classList.toggle("contentFilter");
                    break;
                case 2:
                    document.getElementById("chevronUstensile").classList.toggle("fa-chevron-down");
                    document.getElementById("chevronUstensile").classList.toggle("fa-chevron-up");
                    document.getElementById("contentFilterUstensile").classList.toggle("hidden");
                    document.getElementById("contentFilterUstensile").classList.toggle("contentFilter");
                    break;
            }


        })

    }
    let filterResultIngredients = document.getElementById("filterResultIngredients");
    let ulIngredients = document.createElement("ul");
    let ingredients = getIngredients(recipes);
    ingredients.forEach(ingredient => {
        let liIngredient = document.createElement("li");
        liIngredient.innerText = ingredient;
        ulIngredients.appendChild(liIngredient);
    })

    let filterResultAppareils = document.getElementById("filterResultAppareils");
    let ulAppareils = document.createElement("ul");
    let appareils = getAppareils(recipes);
    appareils.forEach(appareil => {
        let liAppareil = document.createElement("li");
        liAppareil.innerText = appareil;
        ulAppareils.appendChild(liAppareil);
    })
    let filterResultUstensiles = document.getElementById("filterResultUstensiles");
    let ulUstensiles = document.createElement("ul");
    let ustensiles = getUstensiles(recipes);
    ustensiles.forEach(ustensile => {
        let liUstensiles = document.createElement("li");
        liUstensiles.innerText = ustensile;
        ulUstensiles.appendChild(liUstensiles);
    })
    filterResultIngredients.appendChild(ulIngredients);
    filterResultAppareils.appendChild(ulAppareils);
    filterResultUstensiles.appendChild(ulUstensiles);
    const containerRecipes = document.getElementById("recipe-container");
    recipes.forEach(recipe=>{
        containerRecipes.appendChild(recipeFactory(recipe));
    })

    

}
init();



