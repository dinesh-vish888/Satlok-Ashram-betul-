import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter, FaLink } from "react-icons/fa6";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteData } from "../../data/siteData";
import "./SocialSection.css";

const platformIcons = {
  youtube: <FaYoutube />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  twitter: <FaXTwitter />,
};

export default function SocialSection() {
  const { social } = siteData;
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section social-section" id="connect">
      <div className="social-section__bg" />
      <div
        className={`section__container social-section__container reveal ${isVisible ? "revealed" : ""}`}
        ref={ref}
      >
        {/* Header */}
        <h2 className="social-section__title">{social.heading}</h2>
        <p className="social-section__subtitle">{social.description}</p>

        {/* Social Link Buttons */}
        <div className="social-section__links">
          {social.links.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-btn"
            >
              <span className="social-link-btn__icon">
                {platformIcons[link.icon] || <FaLink />}
              </span>
              {link.platform} : {link.handle}
            </a>
          ))}
        </div>

        {/* Phone Mockup with All Platforms */}
        <div className="social-section__phone">
          <div className="social-section__phone-notch" />
          <div className="social-section__phone-content">
            <div className="social-section__channel-logo">
              <img src="/ashram-logo.png" alt="Satlok Ashram Logo" className="social-section__channel-logo-img" />
            </div>
            <h3 className="social-section__channel-name">{social.channelName}</h3>
            <p className="social-section__channel-sub">{social.channelSubtitle}</p>
            <div className="social-section__phone-links">
              {social.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-section__channel-row"
                >
                  <span className="social-section__channel-icon">
                    {platformIcons[link.icon] || <FaLink />}
                  </span>
                  <div>
                    <div className="social-section__channel-platform">{link.platform}</div>
                    <div className="social-section__channel-handle">{link.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
