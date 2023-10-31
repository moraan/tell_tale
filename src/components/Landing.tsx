import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  console.log();
  return (
    <div className="landing-container">
      <h1>Welcome to Tell Tale</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      
    </div>
  );
}

export default Landing;
