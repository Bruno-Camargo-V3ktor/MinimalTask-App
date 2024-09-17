import {Themes} from "../styles/themes.ts";

export interface RouterProps {
    swapTheme: ( theme: Themes ) => void;
}