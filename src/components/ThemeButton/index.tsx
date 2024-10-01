import {useContext} from "react";
import {themeContext} from "../../contexts/ThemeContext.tsx";
import {Themes} from "../../styles/themes.ts";
import {Moon, Sun} from "@phosphor-icons/react";

export function ThemeButton( props : { size: number } ) {

    // Attributes
    const { swapTheme, theme } = useContext( themeContext )
    const { size } = props


    // Methods
    function iconBtn( size: number, className: string) : JSX.Element
    {
        switch (theme.name) {
            case Themes.light:
                return <Moon size={ size } weight="fill" className={className}
                    onClick={ swapTheme }
                />

            case Themes.dark:
                return <Sun size={ size } weight="fill" className={className}
                    onClick={ swapTheme }
                />
        }
    }

    // Render
    return (
       <div className='btnIcon'>

           {
               iconBtn( size, 'btnIcon' )
           }

       </div>
    )

}