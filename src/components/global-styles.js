import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const Styles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    color: #000;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 28px;
    font-weight: 900;

    #lightboxBackdrop {
      figcaption {
        font-size: 2vw;
      }
    }
  }
`

const GlobalStyles = () => (
  <>
    <Normalize />
    <Styles />
  </>
)

export default GlobalStyles
