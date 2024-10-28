import {createContext} from "react";
import {SecurityContext, SecurityProviderProps, User} from "../@types/security";
import { userLogin } from "../http/userAPI.ts";

export const securityContext = createContext<SecurityContext>( {} as SecurityContext );
export function SecurityProvider( props: SecurityProviderProps ) {

    // Attributes
    const { children } = props;
    let user: User | null = null;
    let token: string | null = sessionStorage.getItem( "token" );

    // Methods
    async function login( input: User ) : Promise<boolean> {

        const response = await userLogin( input );
        if ( response == null )  {
            return false;
        }

        user = { id: response.id, tasks: response.tasks };
        setToken( btoa( `${user.username}:${user.password}` ) );
        return true;

    }

    async function register( input: User ): Promise<boolean> {

        return true;
    }

    function logout() {
        setToken( null )
    }

    function getToken(): string | null {
        if( token == "" ) { return null; }
        return token;
    }

    function setToken( t: string | null ) {
        sessionStorage.setItem( "token", t ? t : "" );
        token = t;
    }

    async function existedUserWithUsername( usernanme: String ): Promise<boolean> {

        return false;
    }

    // Render
    return (
        <securityContext.Provider value={ {user, login, register, logout, getToken, existedUserWithUsername} }>
            { children }
        </securityContext.Provider>
    )

}