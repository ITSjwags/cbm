import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import OnImagesLoaded from 'react-on-images-loaded'
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
      <OnImagesLoaded onLoaded={() => setImageLoadingStatus(true)}>
        <Container>
          {paintings.map(
            ({ id, src, alt }) =>
              imagesLoaded && (
                <ListItem key={id}>
                  <StyledImage src={src} alt={alt} />
                  <ImageTitle>{alt}</ImageTitle>
                </ListItem>
              )
          )}
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
      </OnImagesLoaded>
    </Layout>
  )
}

export default IndexPage
