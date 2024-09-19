
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleButtonEnter = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main>
      {/* Sección 1 */}
      <section className={`slide-one ${isSignUp ? "slide-move" : ""}`}>
        <div className="message message-one">
          <div className="message-caption">
            <h1>Welcome back</h1>
            <p>To keep connected with us please with your personal info</p>
          </div>
          <button className="btn-enter" onClick={handleButtonEnter}>
            Sign in
          </button>
        </div>
        <div className="message message-two">
          <div className="message-caption">
            <h1>Hello</h1>
            <p>Enter your personal details and start your journey with us</p>
          </div>
          <button className="btn-enter" onClick={handleButtonEnter}>
            Sign up
          </button>
        </div>
      </section>

      {/* Sección 2 */}
      <section
        className={`form-page slide-two ${isSignUp ? "slide-move" : ""}`}
      >
        <div className="form-container">
          <div
            className={`form-wrapper form-wrapper-one ${
              isSignUp ? "form-wrapper-hidden" : ""
            }`}
          >
            <section className="header">
              <h1>Create account</h1>
              <nav>
                {/* Iconos de redes sociales */}                
              </nav>
              <p>or use your email for registration</p>
            </section>

            <form className="input-group">
              <div className="name-input input">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="email-input input">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="password-input input">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="button-input input">
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>

          <div
            className={`form-wrapper form-wrapper-two ${
              !isSignUp ? "form-wrapper-hidden" : ""
            }`}
          >
            <section className="header">
              <h1>Sign in to your music world</h1>
              <nav>{/* Iconos de redes sociales */}</nav>
              <p>or use your email account</p>
            </section>

            <form className="input-group">
              <div className="email-input input">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="password-input input">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="forget-password-input input">
                <a href="#" className="forget-link">
                  forgot your password ?
                </a>
              </div>
              <div className="button-input input">
                <button type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
