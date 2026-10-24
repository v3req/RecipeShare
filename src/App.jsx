import { useState } from 'react'


function App() {
  

  return (
   <>
  {/* ===== SHARED NAVIGATION ===== */}
  <header>
    <div className="container navbar">
      <a href="#home" className="logo">
        Recipe<span>Share</span>
      </a>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#explore">Explore Recipes</a>
        <a href="#dashboard">Dashboard</a>
      </nav>
      <div className="nav-actions">
        <a href="#login" className="btn btn-outline">
          Log In
        </a>
        <a href="#signup" className="btn btn-primary">
          Sign Up
        </a>
      </div>
    </div>
  </header>
  {/* ==================================================
     1. HOME PAGE
     ================================================== */}
  <section id="home" className="page">
    <div className="hero">
      <div className="container hero-content">
        <div>
          <span className="eyebrow">Welcome to RecipeShare</span>
          <h1>
            Good food brings
            <span>people together.</span>
          </h1>
          <p>
            Discover delicious recipes, share your favorite dishes, and find
            inspiration for your next homemade meal.
          </p>
          <div className="hero-actions">
            <a href="#explore" className="btn btn-primary">
              Explore Recipes →
            </a>
            <a href="#signup" className="btn btn-outline">
              Create an Account
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh homemade food"
          />
        </div>
      </div>
    </div>
    <div className="benefits">
      <div className="container benefit-list">
        <div className="benefit">
          <span>✓</span> Easy-to-follow recipes
        </div>
        <div className="benefit">
          <span>♡</span> Shared by food lovers
        </div>
        <div className="benefit">
          <span>✦</span> New cooking inspiration
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="section-title">Discover Something Delicious</h2>
        <p className="muted" style={{ marginBottom: 25 }}>
          Find your next favorite meal in our recipe collection.
        </p>
        <div className="recipe-grid">
          <article className="recipe-card">
            <div className="recipe-image">
              <img
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
                alt="Herb pasta"
              />
              <span className="recipe-tag">Italian</span>
            </div>
            <div className="recipe-info">
              <h3>Creamy Herb Pasta</h3>
              <p>A comforting pasta dish with fresh herbs.</p>
              <div className="recipe-meta">
                <span>◷ 25 min</span>
                <strong>Easy</strong>
              </div>
              <a
                className="btn btn-outline"
                style={{ marginTop: 16 }}
                href="#recipe-details"
              >
                View Recipe →
              </a>
            </div>
          </article>
          <article className="recipe-card">
            <div className="recipe-image">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                alt="Fresh salad"
              />
              <span className="recipe-tag">Healthy</span>
            </div>
            <div className="recipe-info">
              <h3>Fresh Garden Salad</h3>
              <p>A colorful mix of fresh vegetables.</p>
              <div className="recipe-meta">
                <span>◷ 15 min</span>
                <strong>Easy</strong>
              </div>
              <a
                className="btn btn-outline"
                style={{ marginTop: 16 }}
                href="#recipe-details"
              >
                View Recipe →
              </a>
            </div>
          </article>
          <article className="recipe-card">
            <div className="recipe-image">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
                alt="Pizza"
              />
              <span className="recipe-tag">Italian</span>
            </div>
            <div className="recipe-info">
              <h3>Homemade Pizza</h3>
              <p>A classic pizza with cheese and fresh toppings.</p>
              <div className="recipe-meta">
                <span>◷ 40 min</span>
                <strong>Medium</strong>
              </div>
              <a
                className="btn btn-outline"
                style={{ marginTop: 16 }}
                href="#recipe-details"
              >
                View Recipe →
              </a>
            </div>
          </article>
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <a href="#explore" className="btn btn-primary">
            Explore All Recipes →
          </a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="cta">
        <h2>Have a recipe to share?</h2>
        <p>
          Join the community and inspire someone to cook something wonderful.
        </p>
        <a href="#signup" className="btn btn-primary">
          Get Started →
        </a>
      </div>
    </div>
  </section>
  {/* ==================================================
     2. LOGIN PAGE
     ================================================== */}
  <section id="login" className="page hidden">
    <div className="auth-section">
      <div className="auth-card">
        <a href="#home" className="logo">
          Recipe<span>Share</span>
        </a>
        <h1 style={{ marginTop: 24 }}>Welcome Back!</h1>
        <p className="auth-description">
          Log in to discover recipes and share your cooking ideas.
        </p>
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input
              className="form-control"
              type="email"
              id="login-email"
              name="email"
              placeholder="you@example.com"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              className="form-control"
              type="password"
              id="login-password"
              name="password"
              placeholder="Enter your password"
              required=""
            />
          </div>
          <div style={{ textAlign: "right", marginBottom: 18 }}>
            <a
              href="#forgot-password"
              className="small-text"
              style={{ color: "var(--orange)" }}
            >
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Log In
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account?
          <a href="#signup">Sign Up</a>
        </p>
      </div>
    </div>
  </section>
  {/* ==================================================
     3. SIGN UP PAGE
     ================================================== */}
  <section id="signup" className="page hidden">
    <div className="auth-section">
      <div className="auth-card">
        <a href="#home" className="logo">
          Recipe<span>Share</span>
        </a>
        <h1 style={{ marginTop: 24 }}>Create Account</h1>
        <p className="auth-description">
          Join RecipeShare and start sharing your favorite recipes.
        </p>
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input
              className="form-control"
              type="text"
              id="signup-name"
              name="name"
              placeholder="Your name"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email Address</label>
            <input
              className="form-control"
              type="email"
              id="signup-email"
              name="email"
              placeholder="you@example.com"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              className="form-control"
              type="password"
              id="signup-password"
              name="password"
              placeholder="Create a password"
              minLength={8}
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              id="signup-confirm"
              name="confirm_password"
              placeholder="Repeat your password"
              minLength={8}
              required=""
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Create Account
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?
          <a href="#login">Log In</a>
        </p>
      </div>
    </div>
  </section>
  {/* ==================================================
     4. EXPLORE ALL RECIPES
     ================================================== */}
  <section id="explore" className="page hidden">
    <div className="container">
      <div className="page-header">
        <h1>Explore Recipes</h1>
        <p>Browse delicious ideas for your next meal.</p>
      </div>
      <div className="recipe-grid">
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
              alt="Pasta"
            />
            <span className="recipe-tag">Italian</span>
          </div>
          <div className="recipe-info">
            <h3>Creamy Herb Pasta</h3>
            <p>A delicious and comforting pasta dish.</p>
            <div className="recipe-meta">
              <span>◷ 25 min</span>
              <strong>Easy</strong>
            </div>
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Salad"
            />
            <span className="recipe-tag">Healthy</span>
          </div>
          <div className="recipe-info">
            <h3>Fresh Garden Salad</h3>
            <p>Fresh vegetables with your favorite dressing.</p>
            <div className="recipe-meta">
              <span>◷ 15 min</span>
              <strong>Easy</strong>
            </div>
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              alt="Pizza"
            />
            <span className="recipe-tag">Italian</span>
          </div>
          <div className="recipe-info">
            <h3>Homemade Pizza</h3>
            <p>Cheesy pizza topped with fresh ingredients.</p>
            <div className="recipe-meta">
              <span>◷ 40 min</span>
              <strong>Medium</strong>
            </div>
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
              alt="Strawberry cake"
            />
            <span className="recipe-tag">Dessert</span>
          </div>
          <div className="recipe-info">
            <h3>Strawberry Cake</h3>
            <p>A sweet treat made for sharing.</p>
            <div className="recipe-meta">
              <span>◷ 50 min</span>
              <strong>Medium</strong>
            </div>
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
              alt="Healthy bowl"
            />
            <span className="recipe-tag">Healthy</span>
          </div>
          <div className="recipe-info">
            <h3>Healthy Buddha Bowl</h3>
            <p>A colorful bowl full of delicious ingredients.</p>
            <div className="recipe-meta">
              <span>◷ 30 min</span>
              <strong>Easy</strong>
            </div>
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
              alt="Healthy meal"
            />
            <span className="recipe-tag">Lunch</span>
          </div>
          <div className="recipe-info">
            <h3>Everyday Lunch Bowl</h3>
            <p>A simple meal for a busy day.</p>
            <div className="recipe-meta">
              <span>◷ 20 min</span>
              <strong>Easy</strong>
            </div>
            <a href="#recipe-details" className="view-recipe">
              View Recipe →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
  {/* ==================================================
     5. DASHBOARD - ALL RECIPES
     ================================================== */}
  <section id="dashboard" className="page hidden">
    <div className="container">
      <div className="page-header">
        <h1>Recipe Dashboard</h1>
        <p>Manage your recipes and discover what others are cooking.</p>
      </div>
      <div className="dashboard-toolbar">
        <div>
          <h2 className="section-title">All Recipes</h2>
          <p className="muted">Your recipe collection in one place.</p>
        </div>
        <a href="#create-recipe" className="btn btn-primary">
          + Create Recipe
        </a>
      </div>
      <div className="dashboard-stats">
        <div className="stat-card">
          <p>Total Recipes</p>
          <h3>6</h3>
        </div>
        <div className="stat-card">
          <p>Categories</p>
          <h3>4</h3>
        </div>
        <div className="stat-card">
          <p>Community</p>
          <h3>Explore</h3>
        </div>
      </div>
      <div className="recipe-grid">
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
              alt="Pasta"
            />
            <span className="recipe-tag">Italian</span>
          </div>
          <div className="recipe-info">
            <h3>Creamy Herb Pasta</h3>
            <p>Fresh herbs and a creamy sauce.</p>
            <div className="recipe-meta">
              <span>◷ 25 min</span>
              <strong>Easy</strong>
            </div>
            <div className="recipe-card-actions">
              <a href="#recipe-details" className="btn btn-outline">
                Details
              </a>
              <a href="#edit-recipe" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Salad"
            />
            <span className="recipe-tag">Healthy</span>
          </div>
          <div className="recipe-info">
            <h3>Fresh Garden Salad</h3>
            <p>Fresh vegetables and tasty toppings.</p>
            <div className="recipe-meta">
              <span>◷ 15 min</span>
              <strong>Easy</strong>
            </div>
            <div className="recipe-card-actions">
              <a href="#recipe-details" className="btn btn-outline">
                Details
              </a>
              <a href="#edit-recipe" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>
        </article>
        <article className="recipe-card">
          <div className="recipe-image">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              alt="Pizza"
            />
            <span className="recipe-tag">Italian</span>
          </div>
          <div className="recipe-info">
            <h3>Homemade Pizza</h3>
            <p>Cheese, tomato, and fresh toppings.</p>
            <div className="recipe-meta">
              <span>◷ 40 min</span>
              <strong>Medium</strong>
            </div>
            <div className="recipe-card-actions">
              <a href="#recipe-details" className="btn btn-outline">
                Details
              </a>
              <a href="#edit-recipe" className="btn btn-primary">
                Edit
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  {/* ==================================================
     6. CREATE RECIPE PAGE
     ================================================== */}
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
  {/* ==================================================
     7. EDIT RECIPE PAGE
     ================================================== */}
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
                defaultValue="Creamy Herb Pasta"
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
                  "A comforting pasta dish with fresh herbs and a creamy sauce."
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
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-category">Category</label>
                <select
                  className="form-control"
                  id="edit-category"
                  name="category"
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
                  defaultValue={25}
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
                  defaultValue={4}
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
                defaultValue={
                  "250 g pasta\n2 tablespoons olive oil\n2 cloves garlic\nFresh herbs\n100 ml cream\nSalt and pepper"
                }
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
                defaultValue={
                  "1. Cook the pasta according to the package instructions.\n2. Heat the olive oil and garlic in a pan.\n3. Add the cream and fresh herbs.\n4. Mix the cooked pasta with the sauce.\n5. Season to taste and serve."
                }
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
  {/* ==================================================
     8. RECIPE DETAILS & COMMENTS
     ================================================== */}
  <section id="recipe-details" className="page hidden">
    <div className="container">
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
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85"
            alt="Creamy herb pasta"
          />
        </div>
        <div className="details-content">
          <span
            className="recipe-tag"
            style={{ position: "static", display: "inline-block" }}
          >
            Italian
          </span>
          <h1>Creamy Herb Pasta</h1>
          <p className="details-description">
            A comforting pasta dish with fresh herbs and a creamy sauce. Perfect
            for an easy lunch or dinner.
          </p>
          <div className="details-meta">
            <span className="meta-pill">◷ 25 minutes</span>
            <span className="meta-pill">Easy</span>
            <span className="meta-pill">4 servings</span>
          </div>
          <p className="muted small-text">
            Recipe shared by{" "}
            <strong style={{ color: "var(--dark)" }}>Alex Morgan</strong>
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
            <li>250 g pasta</li>
            <li>2 tablespoons olive oil</li>
            <li>2 cloves garlic, minced</li>
            <li>100 ml cooking cream</li>
            <li>Fresh basil and parsley</li>
            <li>Salt and black pepper</li>
            <li>Grated cheese, optional</li>
          </ul>
        </div>
        <div className="details-block">
          <h2>Instructions</h2>
          <div className="instructions">
            1. Bring a pot of salted water to a boil. 2. Cook the pasta
            according to the package instructions. 3. Heat the olive oil in a
            pan and add the garlic. 4. Stir in the cream and chopped herbs. 5.
            Add the cooked pasta and mix well. 6. Season with salt and pepper.
            7. Serve warm with grated cheese if desired.
          </div>
        </div>
      </div>
      {/* COMMENTS */}
      <div className="comments-section">
        <h2 className="section-title">Comments</h2>
        <p className="muted">See what people think about this recipe.</p>
        <div className="comment-form">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="comment-name">Your Name</label>
              <input
                className="form-control"
                type="text"
                id="comment-name"
                name="name"
                placeholder="Enter your name"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment-text">Your Comment</label>
              <textarea
                className="form-control"
                id="comment-text"
                name="comment"
                placeholder="Share your thoughts..."
                required=""
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Post Comment
            </button>
          </form>
        </div>
        {/* Example comment: no profile photo */}
        <div className="comment">
          <p className="comment-name">
            Jamie Wilson
            <span className="comment-date">Recently</span>
          </p>
          <p className="comment-text">
            This recipe was easy to follow and tasted delicious!
          </p>
        </div>
        <div className="comment">
          <p className="comment-name">
            Taylor Smith
            <span className="comment-date">Yesterday</span>
          </p>
          <p className="comment-text">
            I added a little extra garlic and loved the result.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  {/* ===== FOOTER ===== */}
  <footer>
    <div className="container footer-content">
      <a href="#home" className="logo">
        Recipe<span>Share</span>
      </a>
      <p>© 2026 RecipeShare. Made for people who love food.</p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#explore">Recipes</a>
        <a href="#signup">Sign Up</a>
      </div>
    </div>
  </footer>
</>


  
  )
}

export default App
