import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
// import logo from "../images/oneshopper-logo.png"
import logo from "../images/kookeology-png.png"
import {Button} from 'react';


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
            <Link class="custom-button" to="/all">Order Cookies <a style={{color: "#54afe4"}}>Now!</a></Link>
          </li>
          <li>
            <Link className="Header__summary snipcart-summary snipcart-checkout" to="#">
              <i className="fas fa-cart-plus"></i>
            </Link>
          </li>
        </ul>
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
