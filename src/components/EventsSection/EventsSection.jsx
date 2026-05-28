import { useState, useEffect, useCallback } from "react";
import { FiCalendar, FiMapPin, FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteData } from "../../data/siteData";
import "./EventsSection.css";

function EventBadge({ type }) {
  const map = {
    satsang: { label: "Satsang", className: "badge--satsang" },
    special: { label: "Special Event", className: "badge--special" },
    camp: { label: "Camp", className: "badge--camp" },
  };
  const { label, className } = map[type] || { label: type, className: "" };
  return <span className={`events__badge ${className}`}>{label}</span>;
}

export default function EventsSection() {
  const { events } = siteData;
  const [active, setActive] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % events.items.length);
  }, [events.items.length]);

  const prev = () => {
    setActive((prev) => (prev - 1 + events.items.length) % events.items.length);
  };

  /* Auto-advance every 4 seconds */
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const event = events.items[active];

  return (
    <section className="section events-section" id="events">
      {/* Background decoration */}
      <div className="events-section__bg" />

      <div
        className={`section__container events-section__container reveal ${isVisible ? "revealed" : ""}`}
        ref={ref}
      >
        {/* Header */}
        <div className="events-section__header">
          <span className="section__label">📅 {events.label}</span>
          <h2 className="events-section__title">{events.heading}</h2>
          <p className="events-section__subtitle">{events.subtitle}</p>
        </div>

        {/* Banner Carousel */}
        <div className="events-section__carousel">
          {/* Main Banner Card */}
          <div className="events-banner" key={active}>
            {/* Glow Orb */}
            <div className="events-banner__glow" />

            {/* Full-width Banner Image */}
            {event.banner && (
              <div className="events-banner__image-wrap">
                <img
                  src={event.banner}
                  alt={event.title}
                  className="events-banner__image"
                />
              </div>
            )}

            {/* Top Tags Row */}
            <div className="events-banner__top">
              <EventBadge type={event.type} />
              {event.isLive && (
                <span className="events-banner__live">
                  <span className="events-banner__live-dot" />
                  LIVE
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="events-banner__title">{event.title}</h3>
            <p className="events-banner__desc">{event.description}</p>

            {/* Meta */}
            <div className="events-banner__meta">
              <div className="events-banner__meta-item">
                <FiCalendar />
                <span>{event.date}</span>
              </div>
              <div className="events-banner__meta-item">
                <FiClock />
                <span>{event.time}</span>
              </div>
              <div className="events-banner__meta-item">
                <FiMapPin />
                <span>{event.location}</span>
              </div>
            </div>

            {/* CTA */}
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="events-banner__cta"
              >
                {event.ctaText || "Know More"}
              </a>
            )}
          </div>

          {/* Controls — only shown when there's more than one event */}
          {events.items.length > 1 && (
            <div className="events-section__controls">
              <button
                className="events-section__arrow"
                onClick={prev}
                aria-label="Previous event"
              >
                <FiChevronLeft />
              </button>

              {/* Dots */}
              <div className="events-section__dots">
                {events.items.map((_, i) => (
                  <button
                    key={i}
                    className={`events-section__dot ${i === active ? "events-section__dot--active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to event ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="events-section__arrow"
                onClick={next}
                aria-label="Next event"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
