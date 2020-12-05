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
                  <h1 style={{textAlign: 'center'}} >Kookeology 🍪 is Black Women owned Bakery.</h1>
                  <h1 style={{textAlign: 'center'}} >Started with ❤️ in Minneapolis.</h1>
                  {/* <div class="bottom-pink-border"></div> */}
                  <div className="row">
                    <div class="widget-boxes col-md-4">
                      <a>
                        <div class="box-info about">
                          <h2>About us</h2>
                          <p>New York style cookies made with authentic chocolate!</p>
                          <p>Huge, yummy, chocolatey, gooey cookies.</p>
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
                </div>
                </div>
            </div>
          </div>
      </Layout>
    )
}
}

export default IndexPage
