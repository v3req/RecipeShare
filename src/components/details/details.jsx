import { useEffect, useState } from "react";
import request, { apiKey, restUrl } from "../../api/request.js";
import CommentsSection from "../comment-list/CommentList.jsx";
import { Link, useParams } from "react-router";


export default function DetailsPageSection() {
  const [recipe, setRecipe] = useState({});
  const{ recipeId }= useParams(); 

  useEffect(() => {
    request(`/recipes?id=eq.${recipeId}`)
    .then(data => setRecipe(data[0]))
    .catch(error => console.error('Error fetching recipe details:', error));
  },[recipeId]);
  

  return (
    <section id="recipe-details" >
    <div className="container">

    <div className="page-header">
        <Link
          to="/catalog"
          className="small-text"
          style={{ color: "var(--orange)" }}
          
        >
          ← Back to Recipes
        </Link>
      </div>
      <div className="details-layout">
        <div className="details-image">
          <img
            src={recipe.imageUrl}
            
          />
        </div>
        <div className="details-content">
          <span
            className="recipe-tag"
            style={{ position: "static", display: "inline-block" }}
          >
            {recipe.category}
          </span>
          <h1>{recipe.title}</h1>
          <p className="details-description">
            {recipe.description}
          </p>
          <div className="details-meta">
            <span className="meta-pill">{recipe.time}</span>
            <span className="meta-pill">{recipe.difficulty}</span>
          </div>
          <p className="muted small-text">
            Recipe shared by{" "}
            <strong style={{ color: "var(--dark)" }}>{recipe.author}</strong>
          </p>
          <div className="form-actions">
            <a href="#edit-recipe" className="btn btn-primary">
              Edit Recipe
            </a>
            
          </div>
        </div>
      </div>
      <div className="details-layout" style={{ marginTop: 15 }}>
        <div className="details-block">
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingridients}
          </ul>
        </div>
        <div className="details-block">
          <h2>Instructions</h2>
          <div className="instructions">
            {recipe.instructions}
          </div>
        </div>
      </div>
  
    
           <CommentsSection recipeId = {recipeId}/>
    </div>
  </section>
  );
}