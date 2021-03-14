import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return ( 
      <Layout>
        <SEO title="Kookeology" keywords={[`cookie`, `minneapolis`, `minnesota`, 'chocolate', 'bakery']} />
          <div className="site-About">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <div class="top-pink-border"></div> */}
                  <h1 style={{textAlign: 'center', "font-family": 'Gochi Hand', color:"#5a8c99"}} >Fresh warm New York Style Cookies!</h1>
                  {/* <h1 style={{textAlign: 'center', "font-family": 'Roboto', color:"#5a8c99"}} >It was started with ❤️ in Minnesota.</h1> */}
                  {/* <div class="bottom-pink-border"></div> */}
                  <div className="row">
                    <div className="widget-boxes col-md-4">
                      <a>
                        <div className="box-info about">
                          <h2>Our Story</h2>
                          <p style={{paddingBottom: "20px", fontSize:"20px"}}>
                            Kookeology 🍪 is a Black-Women owned Bakery.
                          </p>
                          <p className="mt-2" style={{ fontSize:"20px"}}>
                            It was started with ❤️ in Minnesota.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="widget-boxes col-md-4">
                        <a>
                          <div className="box-info experience">
                            <h2>Flavors</h2>
                            <p className="text-flavor" style={{ paddingBottom: "20px"}}> Sea Salt Nutella (hazelnuts) <span img>🌰</span> </p>
                            <p className="text-flavor" style={{ paddingBottom: "20px"}}> Birthday Cake <span img>🎂</span> </p>
                            <p className="text-flavor" > Matcha Macadamia <span img>🍵 🌿</span> </p>
                          </div>
                        </a>
                    </div>
                    <div className="widget-boxes col-md-4">
                      <a>
                        <div className="box-info fun" style={{ fontSize:"20px"}}>
                          <h2>Our Hours</h2>
                          <p style={{ paddingBottom: "20px"}}>Monday - Friday 11AM to 8PM</p>
                          <p>Saturday to Sunday 8AM to 11PM</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: "20px"}}>
                    <div className="col-md-12">
                      <div class="row">
                        <div class="widget-boxes col-md">
                          <a href="https://www.instagram.com/p/CMS0gmwgFsV/" target="blank">
                            <img className="birthday_cake"/>
                          </a>
                        </div>
                        <div class="widget-boxes col-md">
                          <a href="https://www.instagram.com/p/CMXyPvgA6at/" target="blank">
                            <img className="matcha_green"/>
                          </a>
                        </div>
                        <div class="widget-boxes col-md">
                          <a href="https://www.instagram.com/p/CMS0gmwgFsV/" target="blank">
                          <img className="birthday_cake"/>
                          </a>
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
