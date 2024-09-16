import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p className="copyright-text">
                © Copyright <span id="date" /> <a href="#">Pokémon</a> All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
