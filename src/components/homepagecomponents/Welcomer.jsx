import React from "react";
import bgimage from "../../assets/wallapercc.jpg";
import "../../styling/homepagestyling/welcomer.css";


const Welcomer = () => {
  return (
    <section className="wolcomer">
        <div className="welcomer-header">
            <img src={bgimage} alt="Crafted Curiosity wallpaper" className="welcomer-bgimage" />
            <div className="welcomer-text">
                <h1>Welcome to Crafted Curiosity - Edu</h1>
                <h4>Engage | Create | Transform</h4>
                <p>A <em>Crafted Curiosity&#x00A9;</em> venture.</p>
            </div>
        </div>
            
    </section>
  );
};

export default Welcomer;