import { Link, useNavigate } from "react-router";

export default function RecipeCard({
  id,
  title,
  description,
  imageUrl,
  difficulty,
  time,
  }){
    const navigate = useNavigate();

    return (
        <article className="recipe-card" onClick={navigate(`/recipes/${id}`)}>
          <div className="recipe-image">
            <img
              src={imageUrl}
            />
            <span className="recipe-tag">Italian</span>
          </div>
          <div className="recipe-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="recipe-meta">
              <span>{time}</span>
              <strong>{difficulty}</strong>
            </div>
            <Link to={`/recipes/${id}`} className="view-recipe">
              View Recipe →
            </Link>
          </div>
        </article>
    )
}