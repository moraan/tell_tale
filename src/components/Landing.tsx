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
      <p className="intro-description">
        Welcome to our immersive storytelling hub! Immerse yourself in the enchanting world of our carefully curated collection of three captivating children's stories. Sign in to explore these timeless tales, personalize your story experience, choose trigger words for sounds, and let our voice recognition feature track your spoken words. Discover storytelling in a whole new way!
      </p>
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
