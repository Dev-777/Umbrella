import React from "react";
import "../../assets/sass/footerCss/footer.css";

export const Footer = () => {
  return (
    <footer id="footer" className="page-footer font-small cyan darken-3 w-100">
      <div className="container d-flex justify-content-center align-items-center">
        <h1
          style={{
            borderTop: "1px solid white",
            width: "491px",
            marginTop: "-45px",
            marginRight: "42px",
          }}
        />
        <div className="row" style={{ width: "816px" }}>
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center flex-row d-flex">
              <a href="/" className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              <a href="/" className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              <a href="/" className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              <a href="/" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              <a href="/" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              <a href="/" className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x" />
              </a>
            </div>
          </div>
        </div>
        <h1
          style={{
            borderTop: "1px solid white",
            width: "491px",
            marginTop: "-45px",
          }}
        />
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
};
