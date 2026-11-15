import { Link } from "react-router";

export default function Header(
 
) {
  return (
    <header>
    <div className="container navbar">
      <Link to="/" className="logo">
        Recipe<span>Share</span>
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalog" >Explore Recipes</Link>
        <Link to="/recipes/create">Create</Link>
      </nav>
      <div className="nav-actions">
        <Link to="/login" className="btn btn-outline">
          Log In
        </Link>
        <Link to="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>
  </header>)
}