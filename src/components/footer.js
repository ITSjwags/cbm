import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  padding: 2vw;
  text-align: center;
`

const TextLink = styled.a`
  border-bottom: 1px solid currentColor;
  color: #3636ff;
  font-size: 2.4vw;
  text-decoration: none;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

const Footer = () => (
  <Container>
    <TextLink href="mailto:cbm@cbmurphy.net">
      FOR PRICING AND SELECTION OF OTHER WORKS - CBM@CBMURPHY.NET
    </TextLink>
  </Container>
)

export default Footer
