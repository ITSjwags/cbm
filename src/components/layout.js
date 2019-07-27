import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from './global-styles'
import Header from './header'

const Layout = ({ children, path }) => (
  <>
    <GlobalStyles />
    <Header path={path} />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
