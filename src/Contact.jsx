import React, { useRef } from 'react'; // 1. Added useRef
import { useNavigate, Link } from 'react-router-dom';
import './Contact.css';

// Assets
import Logo from './assets/Logo.webp'; 
import Logo2 from './assets/Logo.webp'; 
import Road2 from './assets/Hero.webp';

const Contact = () => {
  const navigate = useNavigate();

  // 2. Create the reference for the "Send us your details" card
  const formSectionRef = useRef(null);

  // 3. Helper function for smooth scrolling
  const handleScrollToForm = (e) => {
    if (e) e.preventDefault();
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bl-ct-page-wrapper">
      {/* 1. NAVIGATION */}
      <nav className="bl-ct-navbar-pill">
        <img 
          src={Logo} 
          alt="Logo" 
          className="bl-ct-logo-img" 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer' }}
        />
        <div className="bl-ct-nav-links-group">
          <Link to="/">Home</Link>
          {/* Updated: Get a Quote scrolls to form */}
          <a href="#quote" onClick={handleScrollToForm}>Get a Quote</a>
          <a href="#contact" onClick={handleScrollToForm}>Contact</a>
        </div>
        <button 
          className="bl-ct-quote-cta-btn" 
          onClick={handleScrollToForm}
        >
          GET A QUOTE
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bl-ct-hero-section">
        <div className="bl-ct-hero-container">
          <div className="bl-ct-hero-text">
            <div className="bl-ct-badge-pill">
              <span className="bl-ct-dot"></span> CONTACT
            </div>
            <h1 className="bl-ct-title">
              Contact <span className="bl-ct-text-lime">Boyenge Farm</span>
            </h1>
            <p className="bl-ct-subtitle">
                Modern agriculture powered by science, sustainability, and scale.
            </p>
            <div className="bl-ct-hero-btns">
              {/* Updated to scroll */}
              <button className="bl-ct-btn-lime-large" onClick={handleScrollToForm}>
                START A QUOTE
              </button>
              {/* Updated to scroll */}
              <button className="bl-ct-btn-black-large" onClick={handleScrollToForm}>
                SEND A MESSAGE
              </button>
            </div>
          </div>

          <div 
            className="bl-ct-hero-image-card" 
            style={{ backgroundImage: `url(${Road2})` }}
          >
            <div className="bl-ct-region-badge">
              WORLDWIDE
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & INFO SECTION */}
      <section className="bl-ct-details-section">
        <div className="bl-ct-details-container">
          
          {/* LEFT COLUMN: MESSAGE FORM - 4. ATTACH THE REF HERE */}
          <div className="bl-ct-message-card" ref={formSectionRef}>
            <span className="bl-ct-form-tag">MESSAGE</span>
            <h2 className="bl-ct-form-title">Send us your details</h2>
            
            <form className="bl-ct-form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="bl-ct-input-group">
                <label>FULL NAME *</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="bl-ct-input-group">
                <label>EMAIL *</label>
                <input type="email" placeholder="name@email.com" />
              </div>
              <div className="bl-ct-input-group bl-ct-full-width">
                <label>TOPIC</label>
                <select className="bl-ct-select">
                  <option>General enquiry</option>
                  <option>Our Services</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="bl-ct-input-group bl-ct-full-width">
                <label>MESSAGE *</label>
                <textarea></textarea>
              </div>
              <button type="submit" className="bl-ct-submit-btn">SEND MESSAGE</button>
            </form>
            <p className="bl-ct-disclaimer">Your details are used only to respond to your request.</p>
          </div>

          {/* RIGHT COLUMN: INFO STACK */}
          <div className="bl-ct-info-stack">
            <div className="bl-ct-reach-card">
              <span className="bl-ct-form-tag">CONTACT</span>
              <h2 className="bl-ct-reach-title">How to reach us</h2>
              
              <div className="bl-ct-reach-list">
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>PHONE / WHATSAPP</strong>
                    <p>+243 854 543 130</p>
                  </div>
                </div>
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>EMAIL</strong>
                    <p>agribusiness@boyenge.com</p>
                  </div>
                </div>
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>ADDRESS</strong>
                    <p>Congo</p>
                  </div>
                </div>
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>HOURS</strong>
                    <p>Mon–Fri, 8:00–17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote CTA Card */}
            <div className="bl-ct-quote-mini-card" style={{ backgroundImage: `url(${Road2})` }}>
              <div className="bl-ct-quote-mini-overlay">
                <span className="bl-ct-mini-tag">PREFER A QUOTE?</span>
                <h3 className="bl-ct-mini-title">Use the quote form</h3>
                <p className="bl-ct-mini-text">For the fastest turnaround, start with the quote flow — it captures the key details we need.</p>
                {/* Updated to scroll */}
                <button className="bl-ct-mini-btn" onClick={handleScrollToForm}>GET A QUOTE</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER SECTION */}
      <footer className="bl-ct-site-footer">
        <div className="bl-ct-footer-wrapper">
          <div className="bl-ct-footer-grid">
            <div className="bl-ct-footer-brand-column">
              <img 
                src={Logo2} 
                alt="Logo" 
                className="bl-ct-footer-logo-file" 
                onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
                style={{ cursor: 'pointer' }}
              />
              
              <div className="bl-ct-footer-social-icons">
                <a href="#" className="bl-ct-social-link">Instagram</a>
                <a href="#" className="bl-ct-social-link">TikTok</a>
              </div>
            </div>
            <div className="bl-ct-footer-nav-column">
              <h3>NAVIGATION</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                {/* Updated: Request Quote in footer now scrolls */}
                <li><a href="#quote" onClick={handleScrollToForm}>Request Quote</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="bl-ct-footer-nav-column">
              <h3>CONTACT</h3>
              <ul>
                <li>+243 854 543 130</li>
                <li>agribusiness@boyenge.com</li>
                <li>Qatar, Dubai</li>
                <li>China, Congo</li>
                <li>Hong Kong, Philippines</li>
              </ul>
            </div>
            <div className="bl-ct-footer-nav-column">
              <h3>LEGAL</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="bl-ct-footer-bottom-divider"></div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;