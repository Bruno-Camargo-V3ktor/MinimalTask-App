import {createContext, ReactNode, useState} from "react";
import { ThemeProvider as ProviderStyled } from 'styled-components';
import {darkTheme, lightTheme} from "../styles/themes.ts";
import {Theme} from "../@types/theme.ts";

export const themeContext = createContext( {} as { swapTheme: () => void, theme: Theme } )

export function ThemeProvider( { children }: {children: ReactNode}) {

    // States
    const [theme, setTheme] = useState<Theme>(
        localStorage.getItem( "userTheme" )
        ? localStorage.getItem( "userTheme" ) == "dark" ? darkTheme : lightTheme
        : darkTheme
    )

    // Methods
    function swapTheme( )
    {
        switch( theme.name )
        {
            case 'dark':
                setTheme( lightTheme )
                localStorage.setItem( "userTheme", lightTheme.name )
                break;

            case 'light':
                setTheme( darkTheme )
                localStorage.setItem( "userTheme", darkTheme.name )
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
