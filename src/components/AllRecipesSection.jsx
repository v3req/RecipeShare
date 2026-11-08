import RecipeCard from "./RecipeCard";

export default function AllRecipesSection({ recipes }) {
  return ( 
    <section id="explore" >
    <div className="container">
      <div className="page-header">
        <h1>Explore Recipes</h1>
        <p>Browse delicious ideas for your next meal.</p>
      </div>
      <div className="recipe-grid">
        
        {recipes.map(recipe => <RecipeCard key = {recipe.id} {...recipe}/>)}
          
      </div>
    </div>
  </section>
  );
}