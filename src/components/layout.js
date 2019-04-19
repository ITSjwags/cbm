import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from './global-styles'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
