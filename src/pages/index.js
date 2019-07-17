import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Lightbox from 'react-images'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

import paintingSrc from '../images/String Theory.jpg'

import seoKeywords from '../data/keywords'

const IndexPage = ({ data }) => {
  const paintings = data.paintings.edges
  const lightboxImages = paintings.map(
    ({
      node: {
        alt,
        src: { publicURL },
      },
    }) => ({
      src: publicURL,
      caption: alt,
    })
  )
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

      <Footer />

      <Lightbox
        enableKeyboardInput
        caption
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
    if (position === '4') return '1.75vw'
    if (position === '5') return '1.35vw'
    if (position === '6') return '1.3vw'
    if (position === '9') return '1.5vw'
    if (position === '13') return '1.75vw'
    if (position === '18') return '1.35vw'
    if (position === '19') return '1.65vw'
    if (position === '20') return '1.5vw'
    if (position === '22') return '1.65vw'
    if (position === '23') return '1.6vw'
    if (position === '24') return '1.8vw'
    if (position === '28') return '1.8vw'
    return '1.9vw'
  }};
`

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

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
}

export default IndexPage
