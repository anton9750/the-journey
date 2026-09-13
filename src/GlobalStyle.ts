import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --lacquer-red: #9a1b1b;
    --deep-red: #6d0f0f;
    --imperial-gold: #d4af37;
    --bright-gold: #f2c94c;
    --jade: #1f6f5c;
    --ink: #1a1410;
    --paper: #f4e9d8;
    --paper-dark: #e6d5b8;
    --dragon-blue: #17415c;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--ink);
    color: var(--paper);
    font-family: 'Noto Serif SC', serif;
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    font-family: 'Ma Shan Zheng', cursive;
    margin: 0;
  }

  a {
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--ink);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--lacquer-red);
    border-radius: 6px;
  }
`

export default GlobalStyle
