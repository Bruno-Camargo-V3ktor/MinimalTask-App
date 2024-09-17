import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme, Themes} from './styles/themes'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'


export function App() {

  // States
  const [theme, setTheme] = useState( darkTheme )

  // Métodos
  function swapTheme( theme: Themes )
  {
      switch( theme )
      {
          case 'dark':
              setTheme( darkTheme )
              break;

          case 'light':
              setTheme( lightTheme )
              break;

      }
  }

  // Render
  return (
    <>

      <ThemeProvider theme={ theme }>
        <GlobalStyle />

        <Router swapTheme={ swapTheme } />
      </ThemeProvider>

    </>
  )
} 