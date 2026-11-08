export default function RecipeCard({title, description, imageUrl, difficulty, time}){
    return (
        <article className="recipe-card">
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
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
    )
}