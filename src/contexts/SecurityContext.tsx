import {createContext} from "react";
import {SecurityContext, SecurityProviderProps, User} from "../@types/security";

export const securityContext = createContext<SecurityContext>( {} as SecurityContext );
export function SecurityProvider( props: SecurityProviderProps ) {

    // Attributes
    const { children } = props;
    let user: User | null = null;
    let token: string | null = sessionStorage.getItem( "token" );

    // Methods
    function login( user: User ) : boolean {

        return true;
    }

    function register( user: User ): boolean {

        return true;
    }

    function logout() {
        setToken( null )
    }

    function getToken(): string | null {
        if( token == "" || !isAuthenticated() ) { return null; }
        return token;
    }

    function setToken( t: string | null ) {
        sessionStorage.setItem( "token", t ? t : "" );
        token = t;
    }

    function isAuthenticated(): boolean {

        return true;
    }

    function existedUserWithUsername( usernanme: String ): boolean {

        return false;
    }

    // Render
    return (
        <securityContext.Provider value={ {user, login, register, logout, getToken, existedUserWithUsername} }>
            { children }
        </securityContext.Provider>
    )

}