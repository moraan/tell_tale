import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Ensure this path is correct

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/dashboard");
      }
    };

    checkIfLoggedIn();
  }, [navigate]);

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
