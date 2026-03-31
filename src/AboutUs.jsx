import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AboutUs.css';

// Asset Imports
import Logo from './assets/Logo.webp';
import AboutHero from './assets/Hero.webp'; 
import MissionImg from './assets/Crop.png';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    /* This unique class ensures styles stay inside this page only */
    <div className="about-us-exclusive-scope fade-in" id="top">
      
      {/* --- STICKY NAVBAR --- */}
      <nav className="navbar">
        <div className="logo-box">
          <img 
            src={Logo} 
            alt="Logo" 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>ABOUT US</a>
          <button 
            className="contact-btn desktop-only" 
            onClick={() => navigate('/contact')}
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <div className="about-page-wrapper">
        <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${AboutHero})` }}>
          <div className="about-hero-content reveal-up">
            <span className="section-badge">SINCE 2025</span>
            <h1>FEEDING MARKETS, <span className="lime-text">BUILDING VALUE.</span></h1>
            <p>Modern agriculture powered by science, sustainability, and scale.</p>
          </div>
        </section>

        <section className="mission-section">
          <div className="container grid-2">
            <div className="mission-text reveal-up">
              <h2 className="section-title">WE GROW <span className="lime-text">FOOD SYSTEMS</span>, NOT JUST CROPS</h2>
              <p>
                Boyenge Farming & Agribusiness delivers integrated agricultural production, processing, 
                and agri-investment solutions aligned with global best practices.
              </p>
              <div className="mission-features">
                <div className="feature-item">
                  <strong>Commercial Discipline</strong>
                  <p>Operating with innovation-driven methods and traditional agricultural strength.</p>
                </div>
                <div className="feature-item">
                  <strong>Integrated Model</strong>
                  <p>Capturing value across the full chain: Production → Processing → Logistics.</p>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img src={MissionImg} alt="Agricultural Innovation" />
            </div>
          </div>
        </section>

        <section className="segments-section">
          <div className="container">
            <div className="centered-header">
              <h2 className="section-title">CORE <span className="lime-text">SEGMENTS</span></h2>
              <p>Our diversified platform focuses on high-efficiency production and resource security.</p>
            </div>
            <div className="segments-grid">
              <div className="segment-card">
                <h3>Commercial Crop Production</h3>
                <p>Large-scale operations focusing on staple crops and export produce.</p>
              </div>
              <div className="segment-card">
                <h3>Livestock & Animal Production</h3>
                <p>Integrated systems designed for efficiency and animal welfare.</p>
              </div>
              <div className="segment-card">
                <h3>Precision & Smart Agriculture</h3>
                <p>Modernizing production through drone assessments and soil analytics.</p>
              </div>
              <div className="segment-card">
                <h3>Agro-Processing</h3>
                <p>Extending beyond raw production into value-added processing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sustainability-section">
          <div className="container">
            <div className="dark-card">
              <div className="card-content">
                <h2>CLIMATE-SMART <span className="lime-text">STRATEGY</span></h2>
                <p>Regenerative models, carbon-smart farming, and water efficiency.</p>
                <div className="stats-row">
                  <div className="stat">Regenerative Soil</div>
                  <div className="stat">Low-Input Models</div>
                  <div className="stat">Traceability</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- FOOTER --- */}
      <footer className="footer-section">
        <div className="footer-columns-container reveal-up">
          <div className="footer-col logo-column">
            <img src={Logo} alt="Logo" className="footer-logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
            <div className="footer-socials">
              <a href="#instagram">instagram</a>
              <a href="#facebook">Facebook</a>
            </div>
          </div>

          <div className="footer-col nav-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>About Us</a>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-heading">CONTACT</h4>
            <p>+243 854 543 130</p>
            <p>farm@boyenge.com</p>
            <p>42 Boulevard, Maman Sanza Lisasi, Q/Sanza City, PK30, C/Ubundu, Kisangani , Tshopo, Congo Kinshasa</p>
          </div>

          <div className="footer-col legal-col">
            <h4 className="footer-heading">LEGAL</h4>
            <a href="#tos" className="underline">Terms of Service</a>
            <a href="#privacy" className="underline">Privacy Policy</a>
            copyright@BoyengeHoldingGroup
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;