import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
// import logo from "../images/oneshopper-logo.png"
import logo from "../images/kookeology-png.png"


const Header = ({ siteTitle }) => (
  <header id="header">
    <div class="left-part"></div>
    <div id="logo"></div>
    <div class="bar-holder">
      <nav id="nav">
        <ul>
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/all">Order Cookies</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">Our Story</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="header-cart">
          <Link className="Header__summary snipcart-summary snipcart-checkout" to="#">
            <i className="fas fa-cart-plus"></i>
          </Link>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
