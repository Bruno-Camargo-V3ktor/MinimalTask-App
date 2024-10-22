
import { Router } from './Router'
import {ThemeProvider} from "./contexts/ThemeContext.tsx";
import { GlobalStyle } from './styles/global'
import {SecurityProvider} from "./contexts/SecurityContext.tsx";


export function App() {

  // Render
  return (
    <>

      <SecurityProvider>

          <ThemeProvider>
              <GlobalStyle />
              <Router />
          </ThemeProvider>

      </SecurityProvider>

    </>
  )
} 