import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    };

    checkUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/"); // Redirecting to the landing page after logout.
  };

  const headerStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "5%",
    width: "100%",
    backgroundColor: "#333",
    color: "white",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const headerContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <div style={headerContainerStyle}>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Tell Tale
        </div>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              //backgroundColor: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
