export default function FooterSection() {
  return (
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
  );
}