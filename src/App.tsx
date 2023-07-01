import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GithubContextProvider } from './contexts/GithubContext'
import logo from './assets/logo.svg'

import { LogoContainer } from './stylesApp'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubContextProvider>
        <BrowserRouter>
          <LogoContainer>
            <img src={logo} alt="" />
          </LogoContainer>
          <Router />
        </BrowserRouter>
      </GithubContextProvider>
    </ThemeProvider>
  )
}
