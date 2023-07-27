function recipeFactory(recipe){
    const article = document.createElement("article");
        article.setAttribute("class", "card_recipe");
        const imgRecipe = document.createElement("img");
        imgRecipe.setAttribute("class", "img_recipe");
        imgRecipe.src = "./assets/images/"+recipe.image;
        const recipeHeading = document.createElement("div");
        recipeHeading.setAttribute("class", "recipe_heading");
        recipeHeading.innerHTML = "<h2>" + recipe.name + "</h2><span>" + recipe.time + " min</span>";
        const recipeContent = document.createElement("div");
        recipeContent.setAttribute("class", "recipe_content");
        
        const divDescriptionRecipe = document.createElement("div");
        divDescriptionRecipe.setAttribute("class", "recipe_description");
        divDescriptionRecipe.innerHTML = "<p>RECETTE</p><p>" + recipe.description + "</p>";
        const divHeadingIngredients = document.createElement("div");
        divHeadingIngredients.setAttribute("class","headingIngredients");
        divHeadingIngredients.innerHTML="<p>INGREDIENTS</p>";
        const divIngredients = document.createElement("div");
        divIngredients.setAttribute("class", "recipe_ingredients");
        divIngredients.innerHTML = "<ul>";
        recipe.ingredients.forEach(ingredient => {
            divIngredients.innerHTML += "<li><span>" + ingredient.ingredient + (ingredient.quantity != undefined ? "</span><br> " + ingredient.quantity : "</span><br>-") + (ingredient.unit != undefined ? (ingredient.unit == "grammes" ? "g" : " " + ingredient.unit) : "") + "</li>";
        });
        divIngredients.innerHTML += "</ul>";
        article.appendChild(imgRecipe);
        article.appendChild(recipeHeading);
        recipeContent.appendChild(divDescriptionRecipe);
        recipeContent.appendChild(divHeadingIngredients);
        recipeContent.appendChild(divIngredients);
        article.appendChild(recipeContent);

        return article;
}