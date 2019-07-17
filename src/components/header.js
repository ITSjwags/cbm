import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Lightbox from 'react-images'

import portraits from './portraits'
import Resume from './resume'

import instagramSrc from '../images/instagram.svg'
import twitterSrc from '../images/twitter.svg'

const Header = () => {
  const [showModal, toggleModal] = useState(false)
  const [currentPortrait, setCurrentPortrait] = useState(1)
  const [lightbox, setLightbox] = useState('')
  const [options, setOptions] = useState({
    isOpen: false,
    currentImage: 0,
  })
  const matchedPortrait = portraits.find(
    portrait => portrait.id === currentPortrait
  )
  const changePortrait = () => {
    if (portraits.length === currentPortrait) return setCurrentPortrait(1)
    return setCurrentPortrait(currentPortrait + 1)
  }
  const handleModalLinkClick = () => {
    if (window !== undefined) window.scrollTo(0, 0)
    toggleModal(!showModal)
  }

  return (
    <StaticQuery
      query={graphql`
        query dataQuery {
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
        }
      `}
      render={data => {
        const alchemy = data.alchemy.edges
        const studio = data.studio.edges
        const alchemyImages = alchemy.map(
          ({
            node: {
              src: { publicURL },
            },
          }) => ({
            src: publicURL,
            caption: 'Everyday Alchemy (2019 Show)',
          })
        )
        const studioImages = studio.map(({ node: { src: { publicURL } } }) => ({
          src: publicURL,
          caption: 'Studio Tour',
        }))
        const lightboxImages =
          lightbox === 'alchemy' ? alchemyImages : studioImages
        return (
          <Container>
            <Top>
              <Left>
                <Name>CB MURPHY</Name>
                <Subtitle>ZOOGRAPHICO PRESS</Subtitle>
                <Email>
                  <EmailLink
                    href="mailto:cbm@cbmurphy.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cbm@cbmurphy.net
                  </EmailLink>
                </Email>
                <Writing>
                  <WritingLink
                    to="/writing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Writing
                  </WritingLink>
                </Writing>
              </Left>
              <Right onClick={() => changePortrait()}>
                <img src={matchedPortrait.src} alt={matchedPortrait.text} />
              </Right>
            </Top>
            <Blurb>
              CB Murphy is a novelist, painter, object maker, and rogue
              anthropologist. His work has been shown all over the world and he
              volunteers at a high security prison teaching art.
              <ModalLink onClick={handleModalLinkClick}>
                exhibitions + awards + publications
              </ModalLink>
            </Blurb>

            <List>
              <ListItem>
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
              </ListItem>
              <ListItem>
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
              </ListItem>
            </List>
            {showModal && (
              <Modal>
                <Close onClick={() => toggleModal(!showModal)}>X</Close>
                <Resume />
              </Modal>
            )}
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
          </Container>
        )
      }}
    />
  )
}

const Container = styled.header`
  padding: 4vw;
`

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5.5vw;
`

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Name = styled.h1`
  font-size: 7vw;
  margin: -1.3vw 0 0 0;
  text-align: right;
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  font-size: 2.9vw;
  margin: 0;
  text-align: right;
  text-transform: uppercase;
`

const List = styled.ul`
  list-style: none;
  margin: 4vw 0 0 0;
  padding: 0;
`

const ListItem = styled.li`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 7vw;

  &:not(:last-child) {
    margin-bottom: 5px;
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

const Email = styled.div`
  display: grid;
  margin-top: 0.5vw;
  place-items: flex-end;
  text-align: right;
`

const EmailLink = styled.a`
  border-bottom: 1px solid currentColor;
  color: #3636ff;
  font-size: 3vw;
  text-decoration: none;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

const Writing = styled.div`
  align-content: center;
  display: grid;
  flex: 1;
  place-items: flex-start;
`

const WritingLink = styled(Link)`
  border-bottom: 2px solid currentColor;
  color: #3636ff;
  font-size: 8.5vw;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
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

const Right = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 30vw;
  margin: 0 0 0 3vw;
  outline: 0;
  overflow: hidden;
  padding: 0;
  transition: all 250ms ease;
  width: 24vw;

  > img {
    display: block;
    width: 100%;
  }
`

const Blurb = styled.p`
  font-size: 2.3vw;
  margin: 0.5vw 0 0 auto;
  max-width: 53vw;
  text-align: right;
`

const ModalLink = styled.button`
  background: transparent;
  border: 0;
  border-bottom: 1px solid currentColor;
  color: #3636ff;
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
  margin: 0.5vw 0 0 0;
  outline: 0;
  padding: 0;
  text-decoration: none;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 2.5vw;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 1.2vw 3vw 3vw 3vw;
  position: absolute;
  top: 2vw;
  right: 2vw;
  left: 2vw;
  z-index: 1;
`

const Close = styled.button`
  background: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  font-size: 3.5vw;
  margin: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 2vw;
  right: 2vw;
`

export default Header
