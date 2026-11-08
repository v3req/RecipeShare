export default function EditRecipeSection({title, description, imageUrl, category, difficulty, time, servings, ingridients, instructions}) {
  return (
    <section id="edit-recipe" className="page hidden">
    <div className="container">
      <div className="page-header">
        <h1>Edit Recipe</h1>
        <p>Update your recipe details below.</p>
      </div>
      <div className="editor-layout">
        <div className="editor-card">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="edit-title">Recipe Title</label>
              <input
                className="form-control"
                id="edit-title"
                name="title"
                type="text"
                defaultValue={title}
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-description">Description</label>
              <textarea
                className="form-control"
                id="edit-description"
                name="description"
                required=""
                defaultValue={
                  {description}
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-image">Recipe Image URL</label>
              <input
                className="form-control"
                id="edit-image"
                name="image"
                type="url"
                placeholder="Enter an image URL"
                defaultValue={imageUrl}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-category">Category</label>
                <select
                  className="form-control"
                  id="edit-category"
                  name="category"
                  defaultValue={category}
                >
                    
                  <option>Italian</option>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                  <option>Healthy</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="edit-difficulty">Difficulty</label>
                <select
                  className="form-control"
                  id="edit-difficulty"
                  name="difficulty"
                  defaultValue={difficulty}
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-time">Preparation Time (minutes)</label>
                <input
                  className="form-control"
                  id="edit-time"
                  name="time"
                  type="number"
                  min={1}
                  defaultValue={time}

                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-servings">Servings</label>
                <input
                  className="form-control"
                  id="edit-servings"
                  name="servings"
                  type="number"
                  min={1}
                  defaultValue={servings}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="edit-ingredients">Ingredients</label>
              <textarea
                className="form-control"
                id="edit-ingredients"
                name="ingredients"
                required=""
                defaultValue={ingridients}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-instructions">Instructions</label>
              <textarea
                className="form-control"
                id="edit-instructions"
                name="instructions"
                style={{ minHeight: 180 }}
                required=""
                defaultValue={instructions}
                
              />
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Save Changes
              </button>
              <a href="#dashboard" className="btn btn-outline">
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
            );
        }