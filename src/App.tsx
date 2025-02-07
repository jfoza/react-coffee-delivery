import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import { GlobalStyle } from './styles/global.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
