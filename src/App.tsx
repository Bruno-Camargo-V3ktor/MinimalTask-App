
import { Router } from './Router'
import {ThemeProvider} from "./contexts/ThemeContext.tsx";
import { GlobalStyle } from './styles/global'


export function App() {

  // Render
  return (
    <>

      <ThemeProvider>
        <GlobalStyle />

        <Router />
      </ThemeProvider>

    </>
  )
} 