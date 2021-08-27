const getRecipes = async() => {
    const rawRecipe = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8afd87aa&app_key=72cfa3fc7d6fa6ab53a7d76ee0291b57`
    );
    const recipes = await rawRecipe.json();
    const data = await recipes.hits
    setRecipeData(data);
};