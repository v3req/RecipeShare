export default function Header() {
  return (
    <header>
    <div className="container navbar">
      <a href="#home" className="logo">
        Recipe<span>Share</span>
      </a>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#explore">Explore Recipes</a>
        <a href="#create">Create</a>
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
  </header>)
}