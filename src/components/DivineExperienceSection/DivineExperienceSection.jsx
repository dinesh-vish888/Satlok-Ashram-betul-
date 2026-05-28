import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteData } from "../../data/siteData";
import "./DivineExperienceSection.css";

const emojiMap = {
  book: "📖",
  dove: "🕊️",
  heart: "❤️",
};

function FeatureCard({ feature, delay }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      className={`divine-card reveal reveal-delay-${delay} ${isVisible ? "revealed" : ""}`}
      ref={ref}
    >
      <div className="divine-card__decoration" />
      <div className="divine-card__emoji">
        {emojiMap[feature.icon] || "✨"}
      </div>
      <h3 className="divine-card__title">{feature.title}</h3>
      <p className="divine-card__description">{feature.description}</p>
      {feature.link && (
        <a
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          className="divine-card__link"
        >
          {feature.linkText || "Learn More →"}
        </a>
      )}
    </div>
  );
}

export default function DivineExperienceSection() {
  const { experience } = siteData;
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section className="section divine-experience" id="experience">
      <div className="section__container">
        <div
          className={`divine-experience__header reveal ${headerVisible ? "revealed" : ""}`}
          ref={headerRef}
        >
          <h2 className="divine-experience__title">{experience.heading}</h2>
          <p className="divine-experience__subtitle">{experience.subtitle}</p>
        </div>

        <div className="divine-experience__grid">
          {experience.features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              delay={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
