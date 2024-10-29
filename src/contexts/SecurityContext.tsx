import {createContext} from "react";
import {SecurityContext, SecurityProviderProps, User} from "../@types/security";
import {userExistedWithUsername, userLogin, userRegister} from "../http/userAPI.ts";

export const securityContext = createContext<SecurityContext>( {} as SecurityContext );
export function SecurityProvider( props: SecurityProviderProps ) {

    // Attributes
    const { children } = props;
    // @ts-ignore
    let user: User | null  = JSON.parse(sessionStorage.getItem( "user" )) ;
    let token: string | null = sessionStorage.getItem( "token" );

    // Methods
    async function login( input: User ) : Promise<boolean> {

        const response = await userLogin( input );
        if ( response == null )  {
            return false;
        }

        setUser( { id: response.id, tasks: response.tasks } )
        setToken( btoa( `${input.username}:${input.password}` ) );
        return true;

    }

    async function register( input: User ): Promise<boolean> {

        const response = await userRegister( input );
        if ( response == null )  {
            return false;
        }

        setUser( { id: response.id, tasks: response.tasks } )
        setToken( btoa( `${input.username}:${input.password}` ) );
        return true;
    }

    function logout() {
        setUser( null );
        setToken( null );
        sessionStorage.clear();
    }

    function getToken(): string | null {
        if( token == "" ) { return null; }
        return token;
    }

    function setToken( t: string | null ) {
        sessionStorage.setItem( "token", t ? t : "" );
        token = t;
    }

    function setUser( u: User | null ) {
        sessionStorage.setItem( "user", JSON.stringify(u) );
        user = u;
    }

    async function existedUserWithUsername( usernanme: string ): Promise<boolean> {
        return await userExistedWithUsername(usernanme);
    }

    // Render
    return (
        <securityContext.Provider value={ {user, login, register, logout, getToken, existedUserWithUsername} }>
            { children }
        </securityContext.Provider>
    )

}