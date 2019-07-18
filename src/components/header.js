import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import portraits from './portraits'
import Resume from './resume'

const Header = ({ path }) => {
  const [showModal, toggleModal] = useState(false)
  const [currentPortrait, setCurrentPortrait] = useState(1)
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
          {path === '/' && (
            <Writing>
              <WritingLink
                to="/writing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Writing
              </WritingLink>
            </Writing>
          )}
        </Left>
        <Right onClick={() => changePortrait()}>
          <img src={matchedPortrait.src} alt={matchedPortrait.text} />
        </Right>
      </Top>
      {path === '/' && (
        <Blurb>
          CB Murphy is a novelist, painter, object maker, and rogue
          anthropologist. His work has been shown all over the world and he
          volunteers at a high security prison teaching art.
          <ModalLink onClick={handleModalLinkClick}>
            exhibitions + awards + publications
          </ModalLink>
        </Blurb>
      )}

      {showModal && (
        <Modal>
          <Close onClick={() => toggleModal(!showModal)}>X</Close>
          <Resume />
        </Modal>
      )}
    </Container>
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

Header.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Header
