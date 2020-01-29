import React from "react"
import { graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  console.log("data", data);
  const products = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Carousel />

      <Row className="no-gutters">
        <Col xs={12}>
          {/* This will be an inspirational quote */}
          <p className="main-quote text-center">THE ONES WHO ARE CRAZY ENOUGH<br/> TO THINK THEY CAN CHANGE THE WORLD<br />ARE THE ONES THAT DO</p>
        </Col>
      </Row>

      <Row className="no-gutters">
        <Col xs={12} sm={6}>
          <Img fluid={data.testImage.childImageSharp.fluid}/>
        </Col>
        <Col xs={12} sm={6}>
          <h3>Confidence can change the world</h3>
          <button>Give Confidence</button>
        </Col>


        <Col xs={12} sm={6}>
          <h3>Love can change the world</h3>
          <button>Give Love</button>
        </Col>
        <Col xs={12} sm={6}>
          <Img fluid={data.testImage.childImageSharp.fluid}/>
        </Col>
        
      </Row>

      <Row className="no-gutters">
        <h4 className="w-100">Our Most Popular Products</h4>
        {products.map((product, index) => {
          console.log("product:", product);
          return (
            <Col>
              <Img fluid={product.node.frontmatter.images[0].image.childImageSharp.fluid} />
                <p>{product.node.frontmatter.title}</p>
              <Link to={product.node.fields.slug}><button>Buy Now</button></Link>
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    testImage: file(relativePath: { eq: "nyc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            images {
              image {
                childImageSharp {
                    fluid(quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
          }
        }
      }
    }
  }
`