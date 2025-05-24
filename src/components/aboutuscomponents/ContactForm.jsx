import React from "react";
import "../../styling/aboutusstyling/ContactForm.css"; // Import the CSS file for styling



const ContactForm = () => {
  return (
    <section className="contactus-form-section">
        <div className="contactus-form-container">
            <form className="contactus-form">
                <h2 className="contactus-form-title">Contact Us</h2>
                <fieldset className="contactus-form-fieldset">
                    <legend>User Information</legend>
                    <label htmlFor="name" className="contactus-form-label">Name:</label>
                    <input type="text" id="name" name="name" className="contactus-form-input" required />
                    <label htmlFor="email" className="contactus-form-label">Email:</label>
                    <input type="email" id="email" name="email" className="contactus-form-input" required />   
                </fieldset>
                <fieldset className="contactus-form-fieldset">
                    <legend>Message</legend>
                    <label htmlFor="category" className="contactus-form-label">Category:</label>
                    <select id="category" name="category" className="contactus-form-select" required>
                        <option value="" disabled selected>Select a category</option>  
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Doubt</option>
                        <option value="other">Report a Bug/Issue</option>
                    </select>
                    <label htmlFor="subject" className="contactus-form-label">Subject:</label>
                    <input type="text" id="subject" name="subject" className="contactus-form-input" required />
                    <label htmlFor="message" className="contactus-form-label">Your Message:</label>
                    <textarea id="message" name="message" className="contactus-form-textarea" required></textarea>
                </fieldset>
                <button type="submit" className="contactus-form-submit">Send Message</button>
                <button type="reset" className="contactus-form-reset">Reset</button>

                <p className="contactus-form-note">We will get back to you within 24 hours.</p>
            </form>
        </div> 
    </section>
  );
};

export default ContactForm;