import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react';

function Header({ siteTitle }) {
  const [count, setCount] = useState(-50);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction(window.scrollY);
    }
  });

  function scrollFunction(top) {
    if (top > 20 || top > 20) {
      setCount(0)
    } else {
      setCount(-50)
    }
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        marginTop: count,
        position: `fixed`,
        zIndex: `10`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
