import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GithubContextProvider } from './contexts/GithubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GithubContextProvider>
    </ThemeProvider>
  )
}
