import React from "react";

function Book({
  book,
  onSelect,
}: {
  book: { title: string; image?: string };
  onSelect: () => void;
}) {
  const cardStyle: React.CSSProperties = {
    cursor: "pointer",
    width: "160px",
    height: "240px",
    margin: "10px",
    padding: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Adjusted for better alignment
    border: "1px solid gray",
    backgroundColor: "#fff",
    transition: "transform 0.2s, box-shadow 0.2s",
    overflow: "hidden", // Ensures content stays within the card
  };

  const titleStyle: React.CSSProperties = {
    marginTop: "10px", // Adds space between the image and the title
    textAlign: "center", // Centers the title
    fontSize: "16px", // Adjust font size as needed
    color: "black",
  };

  return (
    <div
      style={cardStyle}
      onClick={onSelect}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={book.image}
        alt={book.title}
        style={{ width: "100%", height: "auto" }}
      />
      <div style={titleStyle}>{book.title}</div>
    </div>
  );
}

export default Book;
