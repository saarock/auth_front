import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="fr-site-footer bg-gray-900">
      <div className="fr-footer-container">
        <div className="fr-footer-brand">
          <h2 className="fr-brand-title">TasteHaven</h2>
          <p className="fr-brand-description">
            Savor culinary artistry in every bite. Join us for an unforgettable dining experience.
          </p>
        </div>

        <div className="fr-footer-nav">
          <h3 className="fr-nav-title">Explore</h3>
          <ul className="fr-nav-list">
            <li><a href="/menu" className="fr-nav-link">Our Menu</a></li>
            <li><a href="/about" className="fr-nav-link">Our Story</a></li>
            <li><a href="/reservations" className="fr-nav-link">Book a Table</a></li>
            <li><a href="/contact" className="fr-nav-link">Get in Touch</a></li>
          </ul>
        </div>

        <div className="fr-footer-newsletter">
          <h3 className="fr-newsletter-title">Stay Updated</h3>
          <p className="fr-newsletter-text">
            Subscribe for exclusive offers and updates.
          </p>
          
        </div>

        <div className="fr-footer-contact">
          <h3 className="fr-contact-title">Connect With Us</h3>
          <p className="fr-contact-info">
            456 Flavor Avenue, Gourmet City<br />
            +1 987 654 3210<br />
            contact@tastehaven.com
          </p>
          <div className="fr-social-links">
            <a href="https://facebook.com" className="fr-social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="fr-social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="fr-social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="fr-social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="fr-footer-bottom">
        <p className="fr-copyright">
          © {new Date().getFullYear()} TasteHaven. Crafted with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;