import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function HomePage() {
  const { isAuthenticated } = useAuth()

  return (
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
            <Link to="/catalog" className="btn btn-primary">
              Explore Recipes →
            </Link>
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
    
    {!isAuthenticated && <div className="container">
      <div className="cta">
        <h2>Have a recipe to share?</h2>
        <p>
          Join the community and inspire someone to cook something wonderful.
        </p>
        <Link to="/register" className="btn btn-primary">
          Get Started →
        </Link>
      </div>
    </div>}
    </section>
    );
}