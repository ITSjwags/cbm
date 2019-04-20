import React from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { seoKeywords, paintings } from '../data'
import paintingSrc from '../images/String Theory.jpg'

const Container = styled.ul`
  column-count: 2;
  column-fill: balance;
  column-gap: 4vw;
  list-style: none;
  margin: 0;
  padding: 0 4vw 2vw 4vw;
`

const BottomContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 4vw;
`

const ListItem = styled.li`
  break-inside: avoid;
  display: inline;
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
`

const ImageTitle = styled.p`
  text-align: center;

  font-size: ${({ id }) => {
    if (id === 4) return '1.83vw'
    if (id === 5) return '1.42vw'
    if (id === 6) return '1.39vw'
    if (id === 9) return '1.57vw'
    if (id === 13) return '1.85vw'
    if (id === 18) return '1.44vw'
    if (id === 19) return '1.74vw'
    if (id === 20) return '1.56vw'
    if (id === 22) return '1.75vw'
    if (id === 23) return '1.68vw'
    if (id === 28) return '1.88vw'
    return '1.9vw'
  }};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={seoKeywords} />
    <Container>
      {paintings.map(({ id, src, alt }) => (
        <ListItem key={id}>
          <StyledImage src={src} alt={alt} />
          <ImageTitle id={id}>{alt}</ImageTitle>
        </ListItem>
      ))}
    </Container>
    <BottomContainer>
      <ListItem>
        <StyledImage
          src={paintingSrc}
          alt="STRING THEORY - 5000$ - 24'' by 48''"
        />
        <ImageTitle>STRING THEORY - 5000$ - 24'' by 48''</ImageTitle>
      </ListItem>
    </BottomContainer>
  </Layout>
)

export default IndexPage
