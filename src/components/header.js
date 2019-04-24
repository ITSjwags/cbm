import React, { useState } from 'react'
import styled from 'styled-components'
import portraits from './portraits'
import Resume from './resume'

const Container = styled.header`
  padding: 4vw 10vw 1vw 10vw;
  position: relative;
`

const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Name = styled.h1`
  font-size: 7vw;
  margin: 0;
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  font-size: 2.9vw;
  margin: 0 0 0 3vw;
  text-transform: uppercase;
`

const List = styled.ul`
  list-style: none;
  margin: 5px 0 0 3vw;
  padding: 0;
`

const ListItem = styled.li`
  display: grid;
  place-items: flex-start;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

const TextLink = styled.a`
  border-bottom: 1px solid currentColor;
  color: #3636ff;
  font-size: 2.35vw;
  text-decoration: none;
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
  margin: 0;
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
  font-size: 1.6vw;
  margin: 0.5vw 0 0 auto;
  max-width: 38vw;
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
  font-size: 1.7vw;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 1.2vw 3vw 3vw 3vw;
  position: absolute;
  top: 2vw;
  right: 2vw;
  bottom: 2vw;
  left: 2vw;
`

const Close = styled.button`
  background: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 2vw;
  right: 2vw;
`

const Header = () => {
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
        <div>
          <Name>CB MURPHY</Name>
          <Subtitle>ZOOGRAPHICO PRESS</Subtitle>
          <List>
            <ListItem>
              <TextLink
                href="https://twitter.com/charleybmurphy"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink
                href="https://www.instagram.com/cb_murphy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink
                href="https://www.amazon.com/C.-B.-Murphy/e/B00442N9N0"
                target="_blank"
                rel="noopener noreferrer"
              >
                bookstore
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink
                href="mailto:cbm@cbmurphy.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                cbm@cbmurphy.net
              </TextLink>
            </ListItem>
          </List>
        </div>
        <Right onClick={() => changePortrait()}>
          <img src={matchedPortrait.src} alt={matchedPortrait.text} />
        </Right>
      </Top>
      <Blurb>
        CB Murphy is a novelist, painter, object maker,  and rogue
        anthropologist. His work has been  shown all over the world and he
        volunteers at a  high security prison teaching art. {' '}
        <ModalLink onClick={handleModalLinkClick}>
          exhibitions + awards + publications
        </ModalLink>
      </Blurb>
      {showModal && (
        <Modal>
          <Close onClick={() => toggleModal(!showModal)}>X</Close>
          <Resume />
        </Modal>
      )}
    </Container>
  )
}

export default Header
