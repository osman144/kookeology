import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return ( 
      <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
          <div className="site-About">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <div class="top-pink-border"></div> */}
                  <h1 style={{textAlign: 'center', "font-family": 'Gochi Hand, cursive', color:"#5a8c99"}} >Kookeology 🍪 is Black Women owned Bakery.</h1>
                  <h1 style={{textAlign: 'center', "font-family": 'Gochi Hand, cursive', color:"#5a8c99"}} >Started with ❤️ in Minnesota.</h1>
                  {/* <div class="bottom-pink-border"></div> */}
                  <div className="row">
                    <div class="widget-boxes col-md-4">
                      <a>
                        <div class="box-info about">
                          <h2>About us</h2>
                          <p>New York style cookies made with authentic chocolate!</p>
                          <p>Huge, yummy cookies.</p>
                        </div>
                      </a>
                    </div>
                    <div class="widget-boxes col-md-4">
                        <a>
                          <div class="box-info experience">
                            <h2>Our experience</h2>
                            <p>Perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiam eaque dolor lorem.</p>
                          </div>
                        </a>
                    </div>
                    <div class="widget-boxes col-md-4">
                      <a>
                        <div class="box-info fun">
                          <h2>Our Hours</h2>
                          <p>Monday - Friday</p>
                          <ul>
                            <li>
                              11AM to 8PM
                            </li>
                          </ul>
                          <p>Saturday to Sunday</p>
                          <ul>
                            <li>
                              8AM to 11PM
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div className="row">
                        <div class="widget-boxes col-md">
                          <iframe
                            src="https://instagram.com/p/CGDRwBjAHw-/embed"
                            frameborder="20"
                            allowfullscreen
                            scrolling="no"
                            allowtransparency
                            width="350"
                            height="600"
                            style={{
                              "border-radius": "3px", "border": "1px solid #dbdbdb", 
                              "box-shadow": "none", "display": "block", "margin": "0px 0px 12px", 
                              "min-width": "60px", "padding": "0px;"}}
                          ></iframe>
                        </div>
                        <div class="widget-boxes col-md">
                          <iframe
                            src="https://instagram.com/p/CExGjzxg9-v/embed"
                            frameborder="20"
                            allowfullscreen
                            scrolling="no"
                            allowtransparency
                            width="350"
                            height="600"
                            style={{
                              "border-radius": "3px", "border": "1px solid #dbdbdb", 
                              "box-shadow": "none", "display": "block", "margin": "0px 0px 12px", 
                              "min-width": "60px", "padding": "0px;"}}
                          ></iframe>
                        </div>
                        <div class="widget-boxes col-md">
                          <iframe
                            src="https://instagram.com/p/CEa4JnRAcoA/embed"
                            frameborder="20"
                            allowfullscreen
                            scrolling="no"
                            allowtransparency
                            width="350"
                            height="600"
                            style={{
                              "border-radius": "3px", "border": "1px solid #dbdbdb", 
                              "box-shadow": "none", "display": "block", "margin": "0px 0px 12px", 
                              "min-width": "60px", "padding": "0px;"}}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    )
}
}

export default IndexPage
