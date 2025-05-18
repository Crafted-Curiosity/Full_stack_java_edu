import React from "react";
import logo from "../assets/crafted-curiosity.png";
import '../styling/Footer.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube , FaDiscord} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";



const Footer = () => {
  return (
    <section className="footer">
      <footer className="footer-bar">
        <div className="footer-logo span-div">
          <img src={logo} alt="Crafted Curiosity Logo" />
        </div>

        <div className="vertical-line"></div>

        <div className="footer-links span-div">
          <ul>
            <li>
              {/* Replace with icon later */}
              <span><FaYoutube /> </span>
              <a href="https://www.youtube.com/@CraftedCuriosity-b3q" target="_blank" rel="noopener noreferrer">
                Crafted Curiosity
              </a>
            </li>
            <li>
              <span><FaGithub /> </span>
              <a href="https://github.com/Crafted-Curiosity" target="_blank" rel="noopener noreferrer">
                Crafted Curiosity
              </a>
            </li>
            <li>
              <span><FaGithub />  </span>
              <a href="https://github.com/Soumyajit-siliguri" target="_blank" rel="noopener noreferrer">
                Soumyajit Sinha
              </a>
            </li>
            <li>
              <span><FaLinkedin /> </span>
              <a href="https://www.linkedin.com/in/soumyajit-sinha-7652b7189/" target="_blank" rel="noopener noreferrer">
                Soumyajit Sinha
              </a>
            </li>
            <li>
              <span><FaWhatsapp /> </span>
              <a href="https://wa.me/919594040621" target="_blank" rel="noopener noreferrer">
                Chat with Soumyajit
              </a>
            </li>
            <li>
              <span><FaDiscord /> </span>
              <a href="https://discordapp.com/users/731234687846187059" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </li>
          </ul>
        </div>

        <div className="vertical-line"></div>

        <div className="my-address span-div">
          <address>
            <p><strong>Crafted Curiosity</strong></p>
            <p>SRA B2C, Andheri East, MIDC</p>
            <p>Mumbai, Maharashtra, 400 093</p>
            <p><MdEmail /> <a href="mailto:soumyajitsinha18@outlook.com">soumyajitsinha18@outlook.com</a></p>
            <p><MdPhone /> <a href="tel:+919594040621">+91 95940 40621</a></p>
          </address>
        </div>

        
      </footer>
      <div className="footer-copyright">
          <hr />
          <p>
            © 2025 Crafted Curiosity. All rights reserved.<br />
            Site developed by{" "}
            <a href="https://github.com/Soumyajit-siliguri" target="_blank" rel="noopener noreferrer">
              Soumyajit Sinha
            </a>.
          </p>
          <hr />
      </div>
    </section>
  );
};

export default Footer;
