function filterRecipes() {
    let recipesFiltered = [];
    //on tri sur le mot clé si il y a plus de 2 caracteres
    if (inputSearch.value.length > 2) {
        for(let i=0;i<recipes.length;i++){
            let ingredientsRecettes = "";
            for (let j = 0; j < recipes[i].ingredients.length; j++) {
                ingredientsRecettes += recipes[i].ingredients[j].ingredient.toLowerCase() + " ";
            }
            if (recipes[i].name.toLowerCase().includes(inputSearch.value.toLowerCase()) || ingredientsRecettes.includes(inputSearch.value.toLowerCase()) || recipes[i].description.toLowerCase().includes(inputSearch.value.toLowerCase())) {
                recipesFiltered.push(recipes[i]);
            }
        }
    }
    //si le champ de recherche fait moins de 3 caracteres on récupére toutes les recettes
    else {
        recipesFiltered = recipes;
    }
    let recipesFilterByTag = [];
    recipesFiltered.forEach(recipe => {
        let listeIngredientsRecettes = [];
        for (let i = 0; i < recipe.ingredients.length; i++) {
            listeIngredientsRecettes.push(recipe.ingredients[i].ingredient.toLowerCase());
        }
        let nb = 0;
        //on filtre sur les tags ingredients
        for (let i = 0; i < tagsIngredient.length; i++) {
            if (listeIngredientsRecettes.includes(tagsIngredient[i].toLowerCase())) {
                nb++;
            }
        }
        //on filtre sur les tags appareils
        for (let i = 0; i < tagsAppareil.length; i++) {
            if (recipe.appliance.toLowerCase() == tagsAppareil[i].toLowerCase()) {
                nb++
            }
        }
        //on filtre sur les tags ustensiles
        for (let i = 0; i < tagsUstensil.length; i++) {
            if (recipe.ustensils.includes(tagsUstensil[i])) {
                nb++;
            }
        }
        if (nb == (tagsIngredient.length + tagsAppareil.length + tagsUstensil.length)) {
            recipesFilterByTag.push(recipe);
        }
    })
    displayRecipes(recipesFilterByTag);
    displayFilters(getFiltersResultsByRecipes(recipesFilterByTag,1,inputSearchIngredients.value),filterResultIngredients,tagsIngredient);
    displayFilters(getFiltersResultsByRecipes(recipesFilterByTag,2,inputSearchAppareils.value),filterResultAppareils,tagsAppareil);
    displayFilters(getFiltersResultsByRecipes(recipesFilterByTag,3,inputSearchUstensiles.value),filterResultUstensiles,tagsUstensil);
    return recipesFilterByTag;
}