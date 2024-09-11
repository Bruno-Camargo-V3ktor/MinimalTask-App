import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, whiteTheme } from './styles/themes'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'


export function App() {

  // States
  const [theme, setTheme] = useState( darkTheme )

  // Render
  return (
    <>

      <ThemeProvider theme={ theme }>
        <GlobalStyle />

        <Router />
      </ThemeProvider>

    </>
  )
} 