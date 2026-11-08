export default function LoginSection() {
  return (
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
  );
}