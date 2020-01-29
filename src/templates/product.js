import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from 'react-helmet';
import "../pages/style.css"

export default ({ data }) => {
    console.log("Data: ", data.allMarkdownRemark)
    const product = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
                <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YTMxMmM2NTctOGM5OC00MDVlLWFjYTMtNGM0MGJhNjQzNjZjNjM3MTMxNTMyMTg5Mzc0Mjc4"></script>
            </Helmet>

            <div className="product-container">
                <Row className="no-gutters">
                    {/* Mobile Title */}
                    <Col className="d-md-none">
                        <h1>{product.title}</h1>
                        <p>${product.price}</p>
                    </Col>

                    {/* Images */}
                    <Col xs={12} md={6}>
                        <Row className="no-gutters">
                            <Col xs={12}>
                                <Img fluid={product.images[0].image.childImageSharp.fluid} />
                            </Col>
                            {product.images.map((img, index) => (
                                <Col xs={4} className="d-flex flex-column p-2">
                                    <Img fluid={img.image.childImageSharp.fluid} />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col xs={12} md={6}>
                        {/* Desktop Title */}
                        <h1 className="d-none d-md-block">{product.title}</h1>
                        <p className="d-none d-md-block">${product.price}</p>

                        <button
                            className='snipcart-add-item buyBtn add-button'
                            data-item-id={product.id}
                            data-item-price={product.price}
                            // data-item-image={post.frontmatter.image}
                            data-item-name={product.title}
                            data-item-description="the best snipcart"
                            data-item-url={"https://passiton.netlify.com" + data.markdownRemark.fields.slug}>
                            Add to Cart
                        </button>
                    </Col>

                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <h4 className="w-100">You Might Also Like</h4>
                    {data.allMarkdownRemark.edges.map((item, index) => (
                        <Col xs={4} md={2} className="p-2">
                            <Link>
                                <Img fluid={item.node.frontmatter.images[0].image.childImageSharp.fluid} />
                                {item.node.frontmatter.title}<br/>
                                ${item.node.frontmatter.price}
                            </Link>
                        </Col>
                    ))}
                </Row>
                <Row className="no-gutters">

                </Row>
            </div>

        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            html
            frontmatter {
                title
                id
                price
                images {
                    name
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
        allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  price
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
