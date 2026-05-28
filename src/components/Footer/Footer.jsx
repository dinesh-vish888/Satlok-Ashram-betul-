import { FiHeart } from "react-icons/fi";
import { siteData } from "../../data/siteData";
import "./Footer.css";

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer className="footer-simple">
      <div className="footer-simple__inner">
        <p className="footer-simple__text">
          {footer.copyright} • {footer.teamName}{" "}
          <FiHeart className="footer-simple__heart" />
        </p>
      </div>
    </footer>
  );
}
