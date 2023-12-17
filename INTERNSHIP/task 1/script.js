function showRecipes() {
    document.getElementById("recipes").style.display = "block";
    document.getElementById("addRecipeForm").style.display = "none";
}

function showAddRecipeForm() {
    document.getElementById("recipes").style.display = "none";
    document.getElementById("addRecipeForm").style.display = "block";
}

function addRecipe() {
    const title = document.getElementById("recipeTitle").value;
    const ingredients = document.getElementById("recipeIngredients").value;
    const instructions = document.getElementById("recipeInstructions").value;

    // Validate if fields are not empty
    if (title.trim() === "" || ingredients.trim() === "" || instructions.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    // Create a new recipe post
    const recipePost = document.createElement("div");
    recipePost.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
    `;

    // Append the new recipe post to the recipes section
    document.getElementById("recipes").appendChild(recipePost);

    // Clear the form fields
    document.getElementById("recipeForm").reset();

    // Switch back to the recipes view
    showRecipes();
}
