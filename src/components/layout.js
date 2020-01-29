import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          minHeight: `130vh`
        }}
      >
        <main>{children}</main>
        <footer style={{ marginTop: `130px`, background:`#afbed1`}}>
          <div className="page-container">
            <Row className="no-gutters">
              <Col className="d-flex flex-column">
                <Link to="/">Buy Now</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
              </Col>

              <Col className="d-flex flex-column">
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>

              </Col>
            </Row>
            <Row className="no-gutters w-100 text-center">
              <Col>
                © {new Date().getFullYear()}, Pass It On Inc., Built by
                  {` `}
                <a href="https://connorjaksik.dev">Connor Jaksik</a></Col>
            </Row>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
