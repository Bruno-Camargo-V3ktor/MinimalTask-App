import { Theme } from "../@types/theme"

export enum Themes {
    dark = 'dark',
    light = 'light',
}

export const darkTheme: Theme = {
    name: Themes.dark,
    primary: '#d3cbc3',
    secondary: '#1d1a1a',
    tertiary: 'white',
    errorText: '#8d2e2e',
    fontPrimary: '"Hanken Grotesk"',
    fontSecondary: '"Signika"'
}

export const lightTheme: Theme = {
    name: Themes.light,
    primary: '#1d1a1a',
    secondary: '#d3cbc3',
    tertiary: 'black',
    errorText: '#8d2e2e',
    fontPrimary: '"Hanken Grotesk"',
    fontSecondary: '"Signika"'
}

