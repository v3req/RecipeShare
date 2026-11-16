import { useEffect, useState } from "react";
import CommentsSection from "../comment-list/CommentList.jsx";
import { Link, useNavigate, useParams } from "react-router";
import { del, getOne } from "../../api/recipe-Api.js";
import useAuth from "../../hooks/useAuth.js";


export default function DetailsPageSection() {
  const [recipe, setRecipe] = useState({});
  const{ recipeId }= useParams(); 
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth()

  useEffect(() => {
    getOne(recipeId)
    .then(data => setRecipe(data[0]))
    .catch(err => console.log(err))
  },[recipeId]);

 const clickDeleteHandler = async () => {
    try{
      await del(recipeId);
      navigate('/catalog')
    } catch (err){
      console.log(err.message)
    }
 } 

 const isOwner = user && user?.id === recipe?.user_id;
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
            <span className="meta-pill">{recipe.time} min</span>
            <span className="meta-pill">{recipe.difficulty}</span>
          </div>
          <p className="muted small-text">
            Recipe shared by{" "}
            <strong style={{ color: "var(--dark)" }}>{recipe.author}</strong>
          </p>
         {isOwner && <><div className="form-actions">
            <Link to={`/recipes/${recipeId}/edit`} className="btn btn-primary">
              Edit Recipe
            </Link>
            
          </div>
          <div className="form-actions">
            <a href='#' className="btn btn-primary" onClick={clickDeleteHandler}>
              Delete Recipe
            </a>
            
          </div>
          </>}
        </div>
      </div>
      <div className="details-layout" style={{ marginTop: 15 }}>
        <div className="details-block">
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingredients}
          </ul>
        </div>
        <div className="details-block">
          <h2>Instructions</h2>
          <div className="instructions">
            {recipe.instructions}
          </div>
        </div>
      </div>
  
    
           <CommentsSection recipeId = {recipeId} isOwner={isOwner} isAuthenticated/>
    </div>
  </section>
  );
}