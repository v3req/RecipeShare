import { useEffect, useState } from "react";
import { apiKey, restUrl } from "../../api/request.js";
import CommentsSection from "../comment-list/CommentList.jsx";


export default function DetailsPageSection({
  id,
  onClose
}) {
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    fetch(restUrl + `recipes?=eq.${id}`, {
        method: 'GET',
         headers: {
        'apikey': apiKey,}
    })
      .then(response => response.json())
      .then(data => setRecipe(data[0]))
      .catch(error => console.error('Error fetching recipes:', error));
  },[id]);
  

  return (
    <section id="recipe-details" >
    <div className="container">

    <div className="page-header">
        <a
          href="#"
          className="small-text"
          style={{ color: "var(--orange)" }}
          onClick={onClose}
        >
          ← Back to Recipes
        </a>
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
          <h1>{title}</h1>
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
            <a href="#dashboard" className="btn btn-outline">
              Dashboard
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
  
    
           <CommentsSection recipeId = {id}/>
    </div>
  </section>
  );
}