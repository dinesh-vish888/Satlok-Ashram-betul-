import { FiArrowRight } from "react-icons/fi";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteData } from "../../data/siteData";
import "./IntroductionSection.css";

function StatCard({ stat }) {
  return (
    <div className="intro-stat-card">
      <div className="intro-stat-card__value">
        {stat.value}
        <span className="intro-stat-card__suffix">{stat.suffix}</span>
      </div>
      <div className="intro-stat-card__label">{stat.label}</div>
    </div>
  );
}

export default function IntroductionSection() {
  const { intro } = siteData;
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section intro" id="about">
      <div
        className={`section__container intro__container reveal ${isVisible ? "revealed" : ""}`}
        ref={ref}
      >
        {/* Image with gradient border */}
        <div className="intro__image-wrapper">
          <div className="intro__image-border">
            <img
              src={intro.image}
              alt="Sant Rampal Ji Maharaj"
              className="intro__image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="intro__content">
          <h2 className="intro__heading">{intro.heading}</h2>

          <p className="intro__description">{intro.description}</p>
          <p className="intro__description">{intro.description2}</p>

          <a
            href={intro.cta1Link || "#experience"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary intro__cta"
          >
            {intro.cta1}
          </a>

          {/* Stats Grid */}
          <div className="intro__stats">
            {intro.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
