import {createContext, ReactNode, useState} from "react";
import { ThemeProvider as ProviderStyled } from 'styled-components';
import {darkTheme, lightTheme} from "../styles/themes.ts";
import {Theme} from "../@types/theme.ts";

export const themeContext = createContext( {} as { swapTheme: () => void, theme: Theme } )

export function ThemeProvider( { children }: {children: ReactNode}) {

    // States
    const [theme, setTheme] = useState( darkTheme )

    // Methods
    function swapTheme( )
    {
        switch( theme.name )
        {
            case 'dark':
                setTheme( lightTheme )
                break;

            case 'light':
                setTheme( darkTheme )
                break;

        }
    }

    // Render
    return (
        <ProviderStyled theme={ theme }>

            <themeContext.Provider value={ { swapTheme, theme } }>
                {children}
            </themeContext.Provider>

        </ProviderStyled>
    )

}
