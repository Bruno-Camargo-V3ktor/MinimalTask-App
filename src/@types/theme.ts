import {Themes} from "../styles/themes.ts";

export interface Theme {
    name: Themes;
    primary: string,
    secondary: string,
    tertiary: string,
    fontPrimary: string,
    fontSecondary: string
}