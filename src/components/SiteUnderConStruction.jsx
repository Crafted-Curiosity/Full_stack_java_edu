import React from "react";
import "../styling/SiteUnderConstruction.css";

const SiteUnderConstruction = () => {
  return (
    <div className="site-construction-container">
      <div className="site-construction-card">
        <div className="construction-icon">🚧</div>
        <h1>Site Under Construction</h1>
        <p>This section is currently being built. Check back soon for exciting updates!</p>
        <div className="footer-note">Crafted Curiosity © {new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default SiteUnderConstruction;
