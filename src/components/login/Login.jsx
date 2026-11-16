import { Link } from "react-router";

import useForm from "../../hooks/useForm";
import useAuth from "../../hooks/useAuth";

export default function LoginSection() {
    const { loginHandler } = useAuth();
    
    const {values, changeHandler, submitHandler} = useForm({email: '', password: '', confirm_password: ''}, loginHandler);
  return (
    <section id="login" >
    <div className="auth-section">
      <div className="auth-card">
        <Link to="/" className="logo">
          Recipe<span>Share</span>
        </Link>
        <h1 style={{ marginTop: 24 }}>Welcome Back!</h1>
        <p className="auth-description">
          Log in to discover recipes and share your cooking ideas.
        </p>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input
              className="form-control"
              type="email"
              id="login-email"
              name="email"
              placeholder="you@example.com"
              required=""
              onChange={changeHandler}
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
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Log In
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account?
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  </section>
  );
}