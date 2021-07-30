import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #333333;
    --text-color: #393E46;
    --red-color: #903749;
    --white-color: #EEEEEE;
  }
  
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Cabin', sans-serif;
    color: var(--text-color);
  }

  h1,h2,h3,h4 {
    font-family: 'Exo 2', sans-serif;
    color: var(--primary-color)
  }

  a {
     text-decoration: none;
     color: var(---text-color);
  }


  @media(min-width: 748px) {
    body {
        padding: 0 2rem;    
    }
  }
`
export default GlobalStyles