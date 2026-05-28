import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteData } from "../../data/siteData";
import "./LocationSection.css";

export default function LocationSection() {
  const { location } = siteData;
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section visit-section" id="visit">
      <div
        className={`section__container visit-section__container reveal ${isVisible ? "revealed" : ""}`}
        ref={ref}
      >
        {/* Header */}
        <div className="visit-section__header">
          <span className="visit-section__badge">
            📍 {location.label}
          </span>
          <h2 className="visit-section__title">{location.heading}</h2>
          <p className="visit-section__subtitle">{location.subtitle}</p>
        </div>

        {/* Info Cards */}
        <div className="visit-section__info-cards">
          <div className="visit-info-card">
            <div className="visit-info-card__icon visit-info-card__icon--location">
              <FiMapPin />
            </div>
            <div className="visit-info-card__content">
              <h4 className="visit-info-card__title">Location</h4>
              <p className="visit-info-card__text">{location.address}</p>
            </div>
          </div>

          <div className="visit-info-card">
            <div className="visit-info-card__icon visit-info-card__icon--time">
              <FiClock />
            </div>
            <div className="visit-info-card__content">
              <h4 className="visit-info-card__title">Open Time</h4>
              <p className="visit-info-card__text">{location.openTime}</p>
            </div>
          </div>

          <div className="visit-info-card">
            <div className="visit-info-card__icon visit-info-card__icon--contact">
              <FiPhone />
            </div>
            <div className="visit-info-card__content">
              <h4 className="visit-info-card__title">Contact</h4>
              <p className="visit-info-card__text">
                {location.phone.split(" or ").map((phone, index) => (
                  <span key={phone}>
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className="visit-info-card__link">
                      {phone}
                    </a>
                    {index < location.phone.split(" or ").length - 1 && " or "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Button */}
        <a
          href={location.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-section__map-btn"
        >
          Open In Google Maps
        </a>

        {/* Map Embed */}
        <div className="visit-section__map-wrapper">
          <iframe
            src={location.mapEmbedUrl}
            className="visit-section__map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Satlok Ashram Betul Location"
          />
        </div>
      </div>
    </section>
  );
}
