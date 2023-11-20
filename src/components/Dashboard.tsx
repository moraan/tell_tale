import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

import Book from "./Book";

// Book covers
import hungryCover from "../assets/covers/hungry-caterpillar.svg";

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

  // Example catalog data
  const catalog = [
    {
      id: 1,
      title: "Hungry Caterpillar",
      route: "/book/HungryCaterpillar",
      image: hungryCover,
    }, // Hungry caterpillar
    { id: 2, title: "Story Book 2", route: "/book/book2" },
    { id: 3, title: "Story Book 3", route: "/book/book3" },
    // Add route property for each book
  ];

  const handleSelectBook = (bookRoute) => {
    // Navigate to the book's route
    navigate(bookRoute);
  };

  return (
    <div>
      <h1>Hello, {user?.email}!</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          padding: "10px",
        }}
      >
        {catalog.map((book) => (
          <Book
            key={book.id}
            book={book}
            onSelect={() => handleSelectBook(book.route)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
