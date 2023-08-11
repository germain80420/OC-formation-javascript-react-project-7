function getFiltersResultsByRecipes(recipes, filter, keyword) {
    let listFiltered = [];
    recipes.forEach(recipe => {
        switch (filter) {
            case 1:
                recipe.ingredients.forEach(ingredient => {
                    if (!listFiltered.includes(ingredient.ingredient.toLowerCase())) {
                        listFiltered.push(ingredient.ingredient.toLowerCase());
                    }
                })
                break;
            case 2:
                if (!listFiltered.includes(recipe.appliance)) {
                    listFiltered.push(recipe.appliance);
                }
                break;
            case 3:
                recipe.ustensils.forEach(ustensil => {
                    if (!listFiltered.includes(ustensil)) {
                        listFiltered.push(ustensil);
                    }
                });
                break;
        }
    });
    if (keyword.length > 2 && checkInputFormValidity(keyword)) {
        let filteredByKeyword = [];
        listFiltered.forEach(elementFilter => {
            if (elementFilter.toLowerCase().includes(keyword.toLowerCase())) {
                filteredByKeyword.push(elementFilter);
            }
        })
        return filteredByKeyword;
    }
    return listFiltered;
}
function deleteTag(tag) {
    let filterTags = [[], [], []];
    let tags = [tagsIngredient, tagsAppareil, tagsUstensil];
    ulTag.innerHTML = "";
    for (let i = 0; i < tags.length; i++) {
        for (let j = 0; j < tags[i].length; j++) {
            if (tags[i][j] != tag) {
                filterTags[i].push(tags[i][j]);
            }
        }
    }
    tagsIngredient = filterTags[0];
    tagsAppareil = filterTags[1];
    tagsUstensil = filterTags[2];
    displayTags();
    filterRecipes();
}
function checkInputFormValidity(keyword){
    const letters = /^[A-Za-z\s]*$/;
    return letters.test(keyword);
}
function init() {
    const filters = document.getElementsByClassName("filter");
    tabElement = ["Ingredient", "Appareil", "Ustensile"];
    for (let i = 0; i < filters.length; i++) {
        filters[i].getElementsByTagName("p")[0].addEventListener("click", function () {
            document.getElementById("chevron" + tabElement[i]).classList.toggle("fa-chevron-down");
            document.getElementById("chevron" + tabElement[i]).classList.toggle("fa-chevron-up");
            document.getElementById("contentFilter" + tabElement[i]).classList.toggle("hidden");
            document.getElementById("contentFilter" + tabElement[i]).classList.toggle("contentFilter");
        })
    }
    filterRecipes();
}
function displayTags() {
    ulTag.innerHTML = "";
    let tags = [];
    tagsIngredient.forEach(tag => {
        tags.push(tag);
    })
    tagsAppareil.forEach(tag => {
        tags.push(tag);
    })
    tagsUstensil.forEach(tag => {
        tags.push(tag);
    })

    for (let i = 0; i < tags.length; i++) {

        ulTag.appendChild(tagFactory(tags[i]));
    }
    filterRecipes();
}

function displayFilters(listFiltered, divElement, tags) {
    let ulFilters = document.createElement("ul");
    listFiltered.forEach(filterElement => {
        ulFilters.appendChild(filterFactory(filterElement, tags));
    })
    divElement.innerHTML = "";
    divElement.appendChild(ulFilters);
}

function displayRecipes(recipes) {
    const divSearchResult = document.getElementById("recipe-container");
    divSearchResult.innerHTML = "";
    recipes.forEach(recipe => {
        divSearchResult.appendChild(recipeFactory(recipe));

    })
    if(recipes.length==0){
        divSearchResult.innerHTML="<p>Aucune recette ne contient \""+inputSearch.value+"\", vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>"
    }
    document.getElementById("nbRecettes").innerHTML = "<p>" + recipes.length + " Recette"+(recipes.length>1?"s":"")+"</p>";
}
const inputSearch = document.getElementById("search_input");
const inputSearchIngredients = document.getElementById("inputSearchIngredient");
const inputSearchAppareils = document.getElementById("inputSearchAppareil");
const inputSearchUstensiles = document.getElementById("inputSearchUstensile");
const filterResultIngredients = document.getElementById("filterResultIngredients");
const filterResultAppareils = document.getElementById("filterResultAppareils");
const filterResultUstensiles = document.getElementById("filterResultUstensiles");
const divTags = document.getElementById("listTags");
const ulTag = document.createElement("ul");
let tagsIngredient = [];
let tagsAppareil = [];
let tagsUstensil = [];
divTags.appendChild(ulTag);
document.addEventListener("keyup", function (e) {
    filterRecipes();
})
init();