import React, { useState, useEffect } from 'react';
import './Agriculture.css';

// Asset Imports
import Logo from './assets/Logo.jpg';
import HeroImg from './assets/Hero.png';
import AboutImg from './assets/About.png';
import CropImg from './assets/Crop.png';
import SmartImg from './assets/Smart.png';
import SupplyImg from './assets/Supply.png';
import ProcessingImg from './assets/Processing.png';
import AdvisoryImg from './assets/Advisory.png';
import AnimalImg from './assets/Animal.png';

const Agriculture = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to allow assets to settle and show the spinner
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-wrapper fade-in" id="top">
      {/* --- STICKY NAVBAR --- */}
      <nav className="navbar">
        <div className="logo-box">
          <a href="#top">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#about">ABOUT US</a>
          <button className="contact-btn desktop-only">CONTACT</button>
        </div>
        <button className="contact-btn mobile-only">CONTACT</button>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="hero-wrapper">
        <section className="hero-container" id="home">
          <div className="hero-bg" style={{ backgroundImage: `url(${HeroImg})` }}></div>
          <div className="hero-text-content reveal-up">
            <h1 className="hero-heading">
              <span className="nowrap">FEEDING MARKETS,</span><br />
              BUILDING VALUE
            </h1>
            <button className="quote-btn">GET A QUOTE</button>
          </div>
        </section>
      </div>

      {/* --- ABOUT SECTION --- */}
      <section className="about-section reveal-up" id="about">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-title">
              BOYENGE FARMING AND<br />
              <span className="green-text">AGRIBUSINESS</span>
            </h2>
            <p className="about-p">
              We deliver integrated agricultural production, processing
              and agri-investment solutions aligned with global best practices.
            </p>
            <div className="pill-container">
              <div className="pill">AGRI-TECHNOLOGY</div>
              <div className="pill">PRODUCTION SYSTEMS</div>
              <div className="pill">VALUE ADDED PROCESSING</div>
              <div className="pill">PRODUCTION SYSTEMS</div>
            </div>
          </div>
          <div className="about-image-wrapper">
            <img src={AboutImg} alt="Farming" className="about-img" />
          </div>
        </div>

        {/* --- STATS BANNER --- */}
        <div className="stats-banner">
          <div className="stat-item">
            <h3>200+</h3>
            <p>Team members</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Complete Projects</p>
          </div>
          <div className="stat-item">
            <h3>10K +</h3>
            <p>Client review</p>
          </div>
          <div className="stat-item">
            <h3>1K +</h3>
            <p>Winning Awards</p>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="services-section" id="services">
        <div className="services-header reveal-up">
          <p className="services-subtitle">----SERVICES</p>
          <h2 className="services-main-heading">
            We position agriculture as both a <span className="green-text">productive industry</span> and a <span className="green-text">strategic investment asset class</span>
          </h2>
        </div>

        <div className="services-grid">
          {/* Card 01 */}
          <div className="service-card reveal-up" style={{ backgroundImage: `url(${CropImg})` }}>
            <div className="card-overlay">
              <h3 className="card-title"><span className="card-num">01</span> CROP PRODUCTION</h3>
              <div className="card-tags">
                <span>EXPORT CROPS</span><span>STAPLE CROPS</span><span>HORTICULTURE</span><span>GREENHOUSE PRODUCTION</span><span>CONTROLLED AGRICULTURE</span>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="service-card reveal-up" style={{ backgroundImage: `url(${SmartImg})` }}>
            <div className="card-overlay">
              <h3 className="card-title"><span className="card-num">02</span> SMART AGRICULTURE</h3>
              <p className="card-desc">Integration of Agri-technology and data systems to modernize production and reduce risk</p>
              <div className="card-tags">
                <span>IRRIGATION SYSTEMS</span><span>SOIL ANALYSIS</span><span>YIELD MONITORING</span><span>DRONE CROP ASSESMENT</span><span>CLIMATE RISK MODELING</span>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="service-card reveal-up" style={{ backgroundImage: `url(${SupplyImg})` }}>
            <div className="card-overlay">
              <h3 className="card-title"><span className="card-num">03</span> AGRI SUPPLY CHAIN</h3>
              <p className="card-desc">Integrated post harvest and distribution strategies ensure product integrity and market efficiency</p>
              <div className="card-tags">
                <span>STORAGE STRATEGY</span><span>EXPORT FRAMEWORK</span><span>BULK HANDLING</span><span>BUYER NETWORK</span><span>INSTITUTIONAL SUPPLY</span>
              </div>
            </div>
          </div>

          {/* Card 04 */}
          <div className="service-card reveal-up" style={{ backgroundImage: `url(${ProcessingImg})` }}>
            <div className="card-overlay">
              <h3 className="card-title"><span className="card-num">04</span> AGRO PROCESSING</h3>
              <p className="card-desc">We extend beyond raw production into value-added processing to increase margins and market reach</p>
              <div className="card-tags">
                <span>PROCESSING FACILITIES</span><span>PRIVATE LABEL SUPPLY</span><span>BRANDED AGRICULTURAL PRODUCTS</span><span>INGREDIENT PROCESSING</span>
              </div>
            </div>
          </div>

          {/* Card 05 */}
          <div className="service-card reveal-up" style={{ backgroundImage: `url(${AdvisoryImg})` }}>
            <div className="card-overlay">
              <h3 className="card-title"><span className="card-num">05</span> AGRI INVESTMENT & ADVISORY</h3>
              <p className="card-desc">Boyenge Farming & Agribusiness also serves as an agricultural investment and advisory platform</p>
              <div className="card-tags">
                <span>FARM INVESTMENT</span><span>AGRIBUSINESS FEASIBILITY</span><span>FARM DEVELOPMENT</span><span>YIELD & ROI MODELING</span>
              </div>
            </div>
          </div>

          {/* Card 06 */}
          <div className="service-card reveal-up" style={{ backgroundImage: `url(${AnimalImg})` }}>
            <div className="card-overlay">
              <h3 className="card-title"><span className="card-num">06</span> LIVESTOCK & ANIMAL PRODUCTION</h3>
              <p className="card-desc">Integrated livestock systems designed for efficiency, animal welfare, and traceable quality</p>
              <div className="card-tags">
                <span>CATTLE & RUMINANTS</span><span>POULTRY PRODUCTION</span><span>EGG SYSTEMS</span><span>FEED OPTIMIZATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FULL WIDTH FLUSH FOOTER --- */}
      <footer className="footer-section">
        <div className="footer-columns-container reveal-up">
          <div className="footer-col logo-column">
            <img src={Logo} alt="Logo" className="footer-logo" />
            <div className="footer-socials">
              <a href="#instagram">instagram</a>
              <a href="#facebook">Facebook</a>
            </div>
          </div>

          <div className="footer-col nav-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <a href="#top">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-heading">CONTACT</h4>
            <p>+243 854 543 130</p>
            <p>agribusiness@boyenge.com</p>
            <p>Qatar, Dubai | China, Congo</p>
          </div>

          <div className="footer-col legal-col">
            <h4 className="footer-heading">LEGAL</h4>
            <a href="#tos" className="underline">Terms of Service</a>
            <a href="#privacy" className="underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Agriculture;