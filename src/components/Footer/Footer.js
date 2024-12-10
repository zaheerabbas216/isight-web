import React from "react";
import "./Footer.scss";
import images from "../../assets/images";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-white">
        <div className="container py-5">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3">
              <h5 className="footer-heading">About</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-md-3">
              <h5 className="footer-heading">Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    Why iSight Glasses?
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Press Kit ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Reviews and Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3">
              <h5 className="footer-heading">Products</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    iSight Glasses
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    iSight App
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    iSight Companion
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    iSight Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    iSight Shop ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-md-3">
              <h5 className="footer-heading">Get in Touch</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    Help Center ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Join the Community
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Distributors
                  </a>
                </li>
              </ul>
              {/* Social Media Icons */}
              <div className="social-icons mt-3">
                <a href="#" className="social-icon mr-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon mr-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon mr-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon mr-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom text-center mt-4">
            <img
              src={images.logo}
              alt="iSight Logo"
              height="40"
              className="mb-3"
            />
            <p className="mb-0">
              &copy; {new Date().getFullYear()} iSight. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
