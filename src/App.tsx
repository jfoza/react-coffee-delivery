import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import { GlobalStyle } from './styles/global.ts'
import { AppWrapper } from './components/AppWrapper/styles.ts'
import { OrdersContextProvider } from './contexts/OrdersContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrdersContextProvider>
          <AppWrapper>
            <Router />
          </AppWrapper>
        </OrdersContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
