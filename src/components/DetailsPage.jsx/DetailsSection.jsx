export default function DetailsSection({title, description, imageUrl, category, difficulty, time, ingridients, instructions, author}) {
  return (
    <>
    <div className="page-header">
        <a
          href="#explore"
          className="small-text"
          style={{ color: "var(--orange)" }}
        >
          ← Back to Recipes
        </a>
      </div>
      <div className="details-layout">
        <div className="details-image">
          <img
            src={imageUrl}
            
          />
        </div>
        <div className="details-content">
          <span
            className="recipe-tag"
            style={{ position: "static", display: "inline-block" }}
          >
            {category}
          </span>
          <h1>{title}</h1>
          <p className="details-description">
            {description}
          </p>
          <div className="details-meta">
            <span className="meta-pill">{time}</span>
            <span className="meta-pill">{difficulty}</span>
          </div>
          <p className="muted small-text">
            Recipe shared by{" "}
            <strong style={{ color: "var(--dark)" }}>{author}</strong>
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
            {ingridients}
          </ul>
        </div>
        <div className="details-block">
          <h2>Instructions</h2>
          <div className="instructions">
            {instructions}
          </div>
        </div>
      </div>
      </>
      )
      }