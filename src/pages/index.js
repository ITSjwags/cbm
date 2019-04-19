import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import LazyLoad from 'react-lazyload'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { seoKeywords, paintings } from '../data'
import paintingSrc from '../images/String Theory.jpg'

const ulStyles = css`
  list-style: none;
  margin: 0;
`

const Container = styled.ul`
  ${ulStyles};
  column-count: 2;
  column-gap: 4vw;
  padding: 4vw;
`

const BottomContainer = styled.ul`
  ${ulStyles};
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
  font-size: 1.9vw;
  text-align: center;
`

const IndexPage = () => {
  const [imagesLoaded, setImageLoadingStatus] = useState(false)

  return (
    <Layout>
      <SEO title="Home" keywords={seoKeywords} />
      <LazyLoad height="100vh" offset={100}>
        <Container>
          {paintings.map(({ id, src, alt }) => (
            <ListItem key={id}>
              <StyledImage
                src={src}
                alt={alt}
                onLoad={() => setImageLoadingStatus(true)}
              />
              {imagesLoaded && <ImageTitle>{alt}</ImageTitle>}
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
      </LazyLoad>
    </Layout>
  )
}

export default IndexPage
