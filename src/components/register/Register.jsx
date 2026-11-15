import { Link } from "react-router";
import useForm from "../../hooks/useForm.jsx";
import { register } from "../../api/auth-api";

export default function SignupSection() {
     

    const {values, changeHandler, submitHandler} = useForm({email: '', password: '', confirm_password: ''}, registerHandler);
    
   
    return (
        <section id="signup">
    <div className="auth-section">
      <div className="auth-card">
        <Link to="/" className="logo">
          Recipe<span>Share</span>
        </Link>
        <h1 style={{ marginTop: 24 }}>Create Account</h1>
        <p className="auth-description">
          Join RecipeShare and start sharing your favorite recipes.
        </p>
        <form  onSubmit={submitHandler}>
         
          <div className="form-group">
            <label htmlFor="signup-email">Email Address</label>
            <input
              className="form-control"
              type="email"
              id="signup-email"
              name="email"
              value={values.email}
              placeholder="you@example.com"
              required=""
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              className="form-control"
              type="password"
              id="signup-password"
              name="password"
              value={values.password}
              placeholder="Create a password"
              minLength={8}
              required=""
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              id="signup-confirm"
              name="confirm_password"
              value={values.confirm_password}
              placeholder="Repeat your password"
              minLength={8}
              required=""
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Create Account
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?
          <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  </section>
    );
}