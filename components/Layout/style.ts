import { createGlobalStyle } from './styled-components'

// tslint:disable-next-line variable-name
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
