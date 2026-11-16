import { Link } from "react-router";

export default function FooterSection() {
  return (
    <footer>
    <div className="container footer-content">
      <a href="#home" className="logo">
        Recipe<span>Share</span>
      </a>
      <p>© 2026 RecipeShare. Made for people who love food.</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Recipes</Link>
      </div>
    </div>
  </footer>
  );
}