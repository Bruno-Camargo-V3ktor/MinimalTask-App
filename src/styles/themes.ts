import { Theme } from "../@types/theme"

export const darkTheme: Theme = {
    primary: '#d3cbc3',
    secondary: '#1d1a1a',
    tertiary: 'white',
    fontPrimary: '"Hanken Grotesk"',
    fontSecondary: '"Signika"'
}

export const lightTheme: Theme = {
    primary: '#1d1a1a',
    secondary: '#d3cbc3',
    tertiary: 'black',
    fontPrimary: '"Hanken Grotesk"',
    fontSecondary: '"Signika"'
}

export enum Themes {
    dark = 'dark',
    light = 'light',
}