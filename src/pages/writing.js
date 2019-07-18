import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import seoKeywords from '../data/keywords'

const Writing = ({ path }) => (
  <Layout path={path}>
    <SEO title="Writing" keywords={seoKeywords} />
    <Home>
      <HomeLink to="/" target="_blank" rel="noopener noreferrer">
        Home
      </HomeLink>
    </Home>
  </Layout>
)

const Home = styled.div`
  align-content: center;
  display: grid;
  flex: 1;
  padding: 0 4vw;
  place-items: flex-end;
`

const HomeLink = styled(Link)`
  border-bottom: 2px solid currentColor;
  color: #3636ff;
  font-size: 9vw;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

Writing.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Writing
