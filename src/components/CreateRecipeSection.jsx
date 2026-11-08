export default function CreateRecipeSection() {
  return (
    <section id="create-recipe" className="page hidden">
    <div className="container">
      <div className="page-header">
        <h1>Create a Recipe</h1>
        <p>Share something delicious with the community.</p>
      </div>
      <div className="editor-layout">
        <div className="editor-card">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="new-title">Recipe Title</label>
              <input
                className="form-control"
                id="new-title"
                name="title"
                type="text"
                placeholder="e.g. Creamy Mushroom Pasta"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-description">Description</label>
              <textarea
                className="form-control"
                id="new-description"
                name="description"
                placeholder="Describe your recipe..."
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-image">Recipe Image URL</label>
              <input
                className="form-control"
                id="new-image"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-upload">Or Choose an Image</label>
              <div className="upload-box">
                <p>Choose a food photo from your device.</p>
                <input
                  id="new-upload"
                  name="image_file"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="new-category">Category</label>
                <select
                  className="form-control"
                  id="new-category"
                  name="category"
                  required=""
                >
                  <option value="">Select category</option>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                  <option>Healthy</option>
                  <option>Italian</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="new-difficulty">Difficulty</label>
                <select
                  className="form-control"
                  id="new-difficulty"
                  name="difficulty"
                  required=""
                >
                  <option value="">Select difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="new-time">Preparation Time (minutes)</label>
                <input
                  className="form-control"
                  id="new-time"
                  name="time"
                  type="number"
                  min={1}
                  placeholder={30}
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-servings">Servings</label>
                <input
                  className="form-control"
                  id="new-servings"
                  name="servings"
                  type="number"
                  min={1}
                  placeholder={4}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="new-ingredients">Ingredients</label>
              <textarea
                className="form-control"
                id="new-ingredients"
                name="ingredients"
                placeholder="Enter each ingredient on a new line..."
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-instructions">Instructions</label>
              <textarea
                className="form-control"
                id="new-instructions"
                name="instructions"
                style={{ minHeight: 180 }}
                placeholder="Describe the steps to prepare your recipe..."
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Publish Recipe
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