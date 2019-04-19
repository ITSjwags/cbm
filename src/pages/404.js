import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.div`
  padding: 0 5vw;
  text-align: center;
`

const TextLink = styled(Link)`
  border-bottom: 1px solid currentColor;
  color: #3636ff;
  font-size: 2vw;
  text-decoration: none;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>
      <h1>WHOOPS!</h1>
      <p>The page you are trying to view doesn't exit.</p>
      <TextLink to="/">head to the homepage</TextLink>
    </Container>
  </Layout>
)

export default NotFoundPage
