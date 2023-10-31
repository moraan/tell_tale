// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to the Landing Page</h1>
      <Link to="/diagram">
        <button>Go to Diagram</button>
      </Link>
      <Link to="/stories">
        <button>Go to Story</button>
      </Link>
      
    </div>
  );
}

export default Landing;
