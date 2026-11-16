import { useNavigate, Link } from "react-router";
import { create } from "../../api/recipe-Api";
import useForm from "../../hooks/useForm";
import useAuth from "../../hooks/useAuth";

export default function CreateRecipeSection() {
    const { user } = useAuth();
    const navigate = useNavigate()
   const author = user?.email

    const createHandler = async (values) => {
      const {title, description, imageUrl, category, difficulty, time, ingredients, instructions} = values
      if(!title || !description || !imageUrl || !category || !difficulty || !time || !ingredients || !instructions){
        alert('All fields are required!')
        return;
      }
        try {
            await create({...values, author});
          navigate('/catalog')
        } catch (error) {
            alert(error.message);
        }
        
    }

    const {values, changeHandler, submitHandler} = useForm({title: '', description:'', imageUrl:'', category: '', difficulty:'', time:'', ingredients:'', instructions:''}, createHandler)


  return (
    <section id="create-recipe" >
    <div className="container">
      <div className="page-header">
        <h1>Create a Recipe</h1>
        <p>Share something delicious with the community.</p>
      </div>
      <div className="editor-layout">
        <div className="editor-card">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="new-title">Recipe Title</label>
              <input
                className="form-control"
                id="new-title"
                name="title"
                type="text"
                placeholder="e.g. Creamy Mushroom Pasta"
                required=""
                value={values.title}
                onChange={changeHandler}
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
                value={values.description}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-image">Recipe Image URL</label>
              <input
                className="form-control"
                id="new-image"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={values.imageUrl}
                onChange={changeHandler}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="new-category">Category</label>
                <select
                  className="form-control"
                  id="new-category"
                  name="category"
                  required=""
                  value={values.category}
                  onChange={changeHandler}
                >
                  <option value="">Select category</option>
                  <option value='breakfast'>Breakfast</option>
                  <option value='lunch'>Lunch</option>
                  <option value='dinner'>Dinner</option>
                  <option value='dessert'>Dessert</option>
                  <option value='healthy'>Healthy</option>
                  <option value='italian'>Italian</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="new-difficulty">Difficulty</label>
                <select
                  className="form-control"
                  id="new-difficulty"
                  name="difficulty"
                  required=""
                  value={values.difficulty}
                  onChange={changeHandler}
                >
                  <option value="">Select difficulty</option>
                  <option value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
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
                  value={values.time}
                  onChange={changeHandler}
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
                value={values.ingredients}
                onChange={changeHandler}
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
                value={values.instructions}
                onChange={changeHandler}
              />
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Publish Recipe
              </button>
              <Link to="/catalog" className="btn btn-outline">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}