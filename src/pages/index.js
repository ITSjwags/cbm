import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Lightbox from 'react-images'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

import instagramSrc from '../images/instagram.svg'
import paintingSrc from '../images/String Theory.jpg'
import twitterSrc from '../images/twitter.svg'

import seoKeywords from '../data/keywords'

const IndexPage = ({ data, path }) => {
  const alchemy = data.alchemy.edges
  const paintings = data.paintings.edges
  const studio = data.studio.edges
  const [lightbox, setLightbox] = useState('')
  const alchemyImages = alchemy.map(({ node: { src: { publicURL } } }) => ({
    src: publicURL,
    caption: 'Everyday Alchemy (2019 Show)',
  }))
  const studioImages = studio.map(({ node: { src: { publicURL } } }) => ({
    src: publicURL,
    caption: 'Studio Tour',
  }))
  const paintingImages = paintings.map(
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
  const lightboxImages = () => {
    if (lightbox === 'alchemy') return alchemyImages
    if (lightbox === 'studio') return studioImages
    return paintingImages
  }
  const [options, setOptions] = useState({
    isOpen: false,
    currentImage: 0,
  })

  return (
    <Layout path={path}>
      <SEO title="Home" keywords={seoKeywords} />
      <HeaderList>
        <HeaderListItem>
          <TextLink
            onClick={() => {
              setLightbox('alchemy')
              setOptions({
                isOpen: true,
                currentImage: 0,
              })
            }}
          >
            Everyday Alchemy (2019 Show)
          </TextLink>
          <ImageLink
            href="https://twitter.com/charleybmurphy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterSrc} alt="twitter" />
          </ImageLink>
        </HeaderListItem>
        <HeaderListItem>
          <TextLink
            onClick={() => {
              setLightbox('studio')
              setOptions({
                isOpen: true,
                currentImage: 0,
              })
            }}
          >
            Studio Tour
          </TextLink>
          <ImageLink
            href="https://www.instagram.com/cb_murphy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramSrc} alt="instagram" />
          </ImageLink>
        </HeaderListItem>
      </HeaderList>
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
              onClick={() => {
                setLightbox('paintings')
                setOptions({
                  isOpen: true,
                  currentImage: id - 1,
                })
              }}
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
        images={lightboxImages()}
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

const HeaderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4vw 6vw 4vw 4vw;
`

const HeaderListItem = styled.li`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 7vw;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

const TextLink = styled.a`
  border-bottom: 1px solid currentColor;
  color: #3636ff;
  cursor: pointer;
  font-size: 4.2vw;
  justify-self: start;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

const ImageLink = styled.a`
  height: 7vw;
  width: 7vw;

  > img {
    display: block;
    width: 100%;
  }
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
  query dataQuery {
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
    studio: allStudioJson {
      edges {
        node {
          id
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
    alchemy: allAlchemyJson {
      edges {
        node {
          id
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
  path: PropTypes.string.isRequired,
}

export default IndexPage
