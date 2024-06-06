import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content row">
          <div className="col-lg-5 col-md-12">
            <div className="footer-left px-5">
              <div className="logo">
                <img src="/images/logo-light.svg" alt="Yeshtary" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed dia
              </p>
              <p>
                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis
              </p>
            </div>
          </div>
          <div className="d-none col-lg-1 d-lg-flex">
            <div className="vr"></div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="footer-right px-5">
              <div className="newsletter">
                <h3>Subscribe to our newsletter</h3>
                <div className="newsletter-input">
                  <input type="email" placeholder="Enter Your Mail" />
                  <button>
                    Subscribe <img src="/images/send.svg" />
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <div className="footer-links pe-5">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Track Order</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Sell With Us</a>
                    </li>
                    <li>
                      <a href="#">Shipping And Returns</a>
                    </li>
                  </ul>
                </div>
                <div className="vr"></div>
                <div className="social-media ps-5">
                  <a href="#">
                    <img src="images/facebook.svg" /> /YESHTERY
                  </a>
                  <a href="#">
                    <img src="images/linkedin.svg" /> /YESHTERY
                  </a>
                  <a href="#">
                    <img src="images/instagram.svg" /> /YESHTERY
                  </a>
                  <a href="#">
                    <img src="images/twitter.svg" /> /YESHTERY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="footer-bottom px-5">
          <p>© 2021 Yeshtary, all rights reserved.</p>
          <div className="payment-methods">
            <img src="/images/cashondelivery.png" alt="Cash on Delivery" />
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/mastercard.png" alt="Mastercard" />
          </div>
          <p>
            Powered By <img src="/images/nasnav.svg" alt="Nasnav" />
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
