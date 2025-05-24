import React from "react";
import founderimg from "../../assets/SoumyajitSinha.jpeg";
import bannerimg from "../../assets/wallpaper.png"; // Import the image for the banner
import "../../styling/aboutusstyling/AboutUsInfo.css"; // Import the CSS file for styling



const AboutUsInfo = () => {
  return (
    <section className="aboutus-info-section">
        <div className="aboutus-info-img-header">
            <img className="aboutus-banner"  src={bannerimg} alt="About Us" />
        </div>
        <div className="aboutus-info-header">
            <h1>About Us</h1>
        </div>
        <div className="aboutus-info-container">
            <div className="info-group">
                <h3>Who Are we?</h3>
                <p>
                    We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to create a positive impact in our community and beyond.
                </p>
            </div>
            <div className="info-group">
                <h3>What do we do?</h3>
                <p>
                    We offer a range of services designed to meet the needs of our clients. From consulting to project management, we are here to help you achieve your goals.
                </p>
            </div>
            <div className="info-group">
                <h3>When did we start?</h3>
                <p>
                    Our journey began in 2025 with a small team and a big dream. Since then, we have grown and evolved, but our commitment to excellence remains the same.
                </p>
            </div>
            <div className="info-group">
                <h3>Whats in there for you</h3>
                <p>
                    By choosing us, you are not just getting a service; you are joining a community. We believe in collaboration and strive to create lasting relationships with our clients.<br />
                    Together, we can achieve great things and make a difference in the world.
                </p>
            </div>
            <div className="info-group founder-msg">
                <h3>Message from our founder</h3>
                <img className="founder-img" src={founderimg} alt="Founder" />
                <p>
                "Welcome to our community! We are thrilled to have you here. Our team is dedicated to providing you with the best experience possible. We believe in the power of collaboration and are excited to work together to achieve our goals. Thank you for being a part of our journey!"<br />
                    <span className="founder-name">- Soumyajit Sinha, Founder</span>
                </p>
            </div>
            <div className="info-group other-businesses">
                <h3>Our other Prospects and Businesses</h3>
                <p>
                    We are not just limited to one area of expertise. Our team is involved in various projects and businesses that align with our mission. From technology to social initiatives, we are committed to making a positive impact in every field we enter.<nr />
                    Please check out our other ventures:<br />
                </p>
                <ul className="other-businesses-list">
                    <li>
                        <a href="https://fit.craftedcuriosity.org" target="_blank" rel="noopener noreferrer">Crafted Curiosity - Fit</a><br />
                        <p className="other-businesses-list-desc">A fitness and wellness platform that promotes healthy living and well-being.</p>                    </li>
                    <li>
                        <a href="https://profile.craftedcuriosity.org/htmlfiles/" target="_blank" rel="noopener noreferrer">Profilios</a><br />
                        <p className="other-businesses-list-desc">A platform that helps individuals create and manage their online profiles.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default AboutUsInfo;