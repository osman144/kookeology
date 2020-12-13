import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
              <div class="top-blue-border"></div>
                <div className="footer_inner">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 mb-4 ">
                          <h3>Find us:</h3>
                          <address style={{margin: 0}} className="map">Minneapolis, MN</address>
                          <address style={{margin: 0}} className="mail"><a href="mailto:kookeology@gmail.com">kookeology@gmail.com</a></address>
                          <address style={{margin: 0}} className="phone">(990) 000 0000</address>
                        </div>
                        <div className="col-md-4 mb-4">
                          <h3>Follow us</h3>
                          <ul className="social">
                            <li><a className="facebook" href="https://facebook.com/kookeology">Facebook</a></li>
                            <li><a className="instagram" href="https://instagram.com/kookeology/">Instagram</a></li>
                            <li><a className="pinterest" href="https://pinterest.com/kookeology/">Pinterest</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                          <h3>Shoot us an email</h3>
                          <p className="form-newsletter">Contact us: Kookeology@gmail.com</p>
                          <p>Contact us and ask us a question or leave a comment.</p>
                        </div>
                      </div>
                      <div className="footer-bottom social-right-menu ">
                          <div className="site-info">
                              ©2020 Kookeology. All rights reserved | <a href="https://flotiq.com">Flotiq.com</a>
                          </div>
                      </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
