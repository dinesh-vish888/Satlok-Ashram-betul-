import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./HeroSection.css";

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="hero" id="home">
      {/* Background blobs */}
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
        <div className="hero__shape hero__shape--4" />
      </div>

      {/* Content */}
      <div
        className={`hero__content reveal ${isVisible ? "revealed" : ""}`}
        ref={ref}
      >
        <h1 className="hero__title">
          Welcome To <span className="hero__title-highlight">Satlok Ashram Betul</span>
        </h1>

        <p className="hero__subtitle">
          Experience spiritual peace, divine knowledge and true devotion under the guidance of Jagatguru Tatvdarshi Sant Rampal Ji Maharaj.
        </p>

        <div className="hero__actions">
          <a href="#about" className="hero__cta-btn">
            Explore More
          </a>
        </div>

        {/* Hero Image / Graphic Container */}
        <div className="hero__graphic-wrapper">
          {/* Top Left Badge */}
          <div className="hero__floating-badge hero__floating-badge--top-left">
            <span className="hero__floating-badge-emoji">🙏</span>
            <span className="hero__floating-badge-text">Spiritual Peace</span>
          </div>

          {/* Image Container Card */}
          <div className="hero__image-card">
            <img
              src="/guru-ji.png"
              alt="Jagatguru Tatvdarshi Sant Rampal Ji Maharaj"
              className="hero__image-main"
            />
          </div>

          {/* Bottom Right Badge */}
          <div className="hero__floating-badge hero__floating-badge--bottom-right">
            <span className="hero__floating-badge-emoji">🌸</span>
            <span className="hero__floating-badge-text">Divine Knowledge</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
