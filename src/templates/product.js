import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from 'react-helmet';


export default ({ data }) => {
    console.log("Data: ", data.markdownRemark.fields.slug)
    const product = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
                <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YTMxMmM2NTctOGM5OC00MDVlLWFjYTMtNGM0MGJhNjQzNjZjNjM3MTMxNTMyMTg5Mzc0Mjc4"></script>
            </Helmet>
            <h1>{product.title}</h1>
            <button
                className='snipcart-add-item buyBtn'
                data-item-id={product.id}
                data-item-price={product.price}
                // data-item-image={post.frontmatter.image}
                data-item-name={product.title}
                data-item-description="the best snipcart"
                data-item-url={"https://passiton.netlify.com" + data.markdownRemark.fields.slug}>
                Buy
            </button>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(quality: 80) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                id
                price
            }
        }
    }
`
