export default function HeroSection() {
    return(
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
    )}
    