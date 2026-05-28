import { useCountUp } from "../../hooks/useCountUp";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteData } from "../../data/siteData";
import "./AboutSection.css";

function StatCard({ stat }) {
  const [ref, count] = useCountUp(stat.value, 2000);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-card__value">
        {count}
        {stat.suffix}
      </div>
      <div className="stat-card__label">{stat.label}</div>
    </div>
  );
}

export default function AboutSection() {
  const { about } = siteData;
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section about-section" id="gallery">
      <div className="about-section__bg-shapes">
        <div className="about-section__bg-shape about-section__bg-shape--1" />
        <div className="about-section__bg-shape about-section__bg-shape--2" />
        <div className="about-section__bg-shape about-section__bg-shape--3" />
      </div>

      <div className="section__container">
        <div
          className={`about-section__inner reveal ${isVisible ? "revealed" : ""}`}
          ref={ref}
        >
          <div className="about-section__content">
            <span className="about-section__label">{about.label}</span>
            <h2 className="about-section__heading">{about.heading}</h2>
            <p className="about-section__description">{about.description}</p>
          </div>

          <div className="about-section__stats">
            {about.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
