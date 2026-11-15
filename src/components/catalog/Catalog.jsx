import RecipeCard from "../recipe-card/RecipeCard";

export default function Catalog({ 
  recipes,
  onClickRecipeCard
 }) {
  return ( 
    <section id="explore" >
    <div className="container">
      <div className="page-header">
        <h1>Explore Recipes</h1>
        <p>Browse delicious ideas for your next meal.</p>
      </div>
      <div className="recipe-grid">
        
        {recipes.map(recipe => <RecipeCard key = {recipe.id} {...recipe} onClickRecipeCard = {onClickRecipeCard}/>)}  
          
      </div>
    </div>
  </section>
  );
}