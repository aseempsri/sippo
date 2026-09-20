import { company } from '../data/content';
import brandLogo from '../assets/finocube-logo.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={brandLogo} alt="Finocube" />
            <p className="footer__tagline">{company.tagline}</p>
            <p>
              Finocube is an Elevest franchise partner — bringing Mutual Funds, FDs, Bonds, and
              Loans together with goal-based planning and modern distribution tools.
            </p>
          </div>

          <div className="footer__links">
            <div>
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Mutual Funds</a></li>
                <li><a href="#products">Bonds</a></li>
                <li><a href="#products">Fixed Deposits</a></li>
                <li><a href="#products">Personal Loans</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#retirement">Freedom Meridian</a></li>
                <li><a href="#retirement">Estate Sovereign</a></li>
                <li><a href="#calculators">Calculators</a></li>
                <li><a href="#documents">Client Forms</a></li>
                <li><a href="#resources">Learning Center</a></li>
                <li><a href="#platform">Platform</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#stages">Life Stages</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                  <a href={company.partnerUrl} target="_blank" rel="noreferrer">
                    Elevest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__disclaimer glass">
          <p>{company.amfiNote}</p>
          <p>{company.complianceNote}</p>
          <p>
            The content on this website is for general informational purposes only and does not
            constitute tax, legal, or investment advice. Please consult professionals for guidance
            specific to your situation. {company.privacyNote}
          </p>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Finocube. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
