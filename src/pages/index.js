import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Lightbox from 'react-images'
import Layout from '../components/layout'
import SEO from '../components/seo'
import seoKeywords from '../data/keywords'
import paintingSrc from '../images/String Theory.jpg'

const Container = styled.ul`
  column-count: 2;
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
  cursor: ${({ cursor }) => (cursor ? 'pointer' : 'auto')};
  display: grid;
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
`

const ImageTitle = styled.p`
  text-align: center;

  font-size: ${({ position }) => {
    if (position === '4') return '1.83vw'
    if (position === '5') return '1.42vw'
    if (position === '6') return '1.39vw'
    if (position === '9') return '1.57vw'
    if (position === '13') return '1.85vw'
    if (position === '18') return '1.44vw'
    if (position === '19') return '1.74vw'
    if (position === '20') return '1.56vw'
    if (position === '22') return '1.75vw'
    if (position === '23') return '1.68vw'
    if (position === '28') return '1.88vw'
    return '1.9vw'
  }};
`

const IndexPage = ({ data }) => { // eslint-disable-line
  const paintings = data.paintings.edges
  const lightboxImages = paintings.map(({ node: { src: { publicURL } } }) => ({
    src: publicURL,
  }))
  const [options, setOptions] = useState({
    isOpen: false,
    currentImage: 0,
  })

  return (
    <Layout>
      <SEO title="Home" keywords={seoKeywords} />
      <Container>
        {paintings.map(
          ({
            node: {
              id,
              alt,
              src: {
                childImageSharp: { fluid },
              },
            },
          }) => (
            <ListItem
              key={id}
              cursor="true"
              onClick={() =>
                setOptions({
                  isOpen: true,
                  currentImage: id - 1,
                })
              }
            >
              <Img fluid={fluid} alt={alt} />
              <ImageTitle position={id}>{alt}</ImageTitle>
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

      <Lightbox
        enableKeyboardInput
        images={lightboxImages}
        currentImage={options.currentImage}
        isOpen={options.isOpen}
        onClickPrev={() =>
          setOptions({
            ...options,
            currentImage: options.currentImage - 1,
          })
        }
        onClickNext={() =>
          setOptions({
            ...options,
            currentImage: options.currentImage + 1,
          })
        }
        onClose={() => setOptions({ isOpen: false })}
      />
    </Layout>
  )
}

export const query = graphql`
  query paintingsQuery {
    paintings: allPaintingsJson {
      edges {
        node {
          id
          alt
          src {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1440) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
