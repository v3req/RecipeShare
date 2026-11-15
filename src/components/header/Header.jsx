import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { isAuthenticated, } = useAuth();

  return (
    <header>

    {isAuthenticated ? (<div className="container navbar">
      <Link to="/" className="logo">
        Recipe<span>Share</span>
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalog" >Explore Recipes</Link>
        <Link to="/recipes/create">Create</Link>
      </nav>
      <div className="nav-actions">
        <Link to="/logout" className="btn btn-primary">
          Logout
        </Link>
      </div>
    </div>
    ) : (<div className="container navbar">
      <Link to="/" className="logo">
        Recipe<span>Share</span>
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalog" >Explore Recipes</Link>
      </nav>
      <div className="nav-actions">
         <Link to="/login" className="btn btn-outline">
          Log In
        </Link>
        <Link to="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>)}
    
  </header>)
}