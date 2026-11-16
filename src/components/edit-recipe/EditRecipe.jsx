import { Link, useParams } from "react-router";
import { getOne, update } from "../../api/recipe-Api";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";

export default function EditRecipeSection() {
  const { recipeId } = useParams()
  


  useEffect(() => {
    getOne(recipeId)
    .then(data => setValues(data[0]))
    .catch(err => console.log(err))
  },[recipeId]);

  const editHandler = (values) => {
    update(recipeId, values)
  }

  const { values, changeHandler, submitHandler, setValues } = useForm({title: '', description: '', imageUrl: '', category: '', difficulty: '', time: '', ingredients: '', instructions: ''}, editHandler);

  return (
    <section id="edit-recipe" >
    <div className="container">
      <div className="page-header">
        <h1>Edit Recipe</h1>
        <p>Update your recipe details below.</p>
      </div>
      <div className="editor-layout">
        <div className="editor-card">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="edit-title">Recipe Title</label>
              <input
                className="form-control"
                id="edit-title"
                name="title"
                type="text"
                value={values.title}
                required=""
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-description">Description</label>
              <textarea
                className="form-control"
                id="edit-description"
                name="description"
                required=""
                value={values.description}
                onChange={changeHandler}
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
                value={values.imageUrl}
                onChange={changeHandler}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-category">Category</label>
                <select
                  className="form-control"
                  id="edit-category"
                  name="category"
                  value={values.category}
                  onChange={changeHandler}
                >
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
                <label htmlFor="edit-difficulty">Difficulty</label>
                <select
                  className="form-control"
                  id="edit-difficulty"
                  name="difficulty"
                  value={values.difficulty}
                  onChange={changeHandler}
                >
                  
                  <option value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
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
                  value={values.time}
                  onChange={changeHandler}
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
                value={values.ingredients}
                onChange={changeHandler}
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
                value={values.instructions}
                onChange={changeHandler}
              />
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Save Changes
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