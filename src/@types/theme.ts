import {Themes} from "../styles/themes.ts";

export interface Theme {
    name: Themes;
    primary: string,
    secondary: string,
    tertiary: string,
    errorText: string,
    fontPrimary: string,
    fontSecondary: string
}