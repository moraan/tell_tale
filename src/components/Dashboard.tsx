import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import Stories from './Stories';

function Dashboard() {
  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          navigate("/login"); // Redirecting to the login page if no session exists.
          return;
        }

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/"); // Redirecting to the landing page after logout.
  };

  return (
    <div>
      <h1>Hello, {user?.email}!</h1>
      <button onClick={handleLogout}>Logout</button>

      <Stories />
    </div>
  );
}

export default Dashboard;
