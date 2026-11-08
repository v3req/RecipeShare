export default function SignupSection() {
    return (
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
    );
}