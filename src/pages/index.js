import React from "react"
import { graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = ({ data }) => {
  console.log("data", data);
  const products = data.allMarkdownRemark.edges
  return (
  <Layout>
    <Carousel/>
    <Row className="no-gutters">
    {products.map((product, index) => {
      console.log("product:", product);
      return (
        <Col>

          <Img fluid={product.node.frontmatter.image.childImageSharp.fluid}/>
          <Link to={product.node.fields.slug}><button>Buy Now</button></Link>
        </Col>
        )
    })}
    </Row>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
`