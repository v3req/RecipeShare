import { useEffect, useState } from "react";
import { getAll } from "../../api/recipe-api";
import RecipeCard from "../recipe-card/RecipeCard";

export default function Catalog() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getAll()
        .then(data => setRecipes(data))
        .catch(error => console.error('Error fetching recipes:', error));
    }, []);

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