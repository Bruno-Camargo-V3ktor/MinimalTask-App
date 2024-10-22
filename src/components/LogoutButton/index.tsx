import {SignOut} from "@phosphor-icons/react";
import {useContext} from "react";
import {securityContext} from "../../contexts/SecurityContext.tsx";

export function LogoutButton( props : { size: number } ) {

    // Attributes
    const { size } = props;
    const { logout } = useContext( securityContext )

    // Methods
    function onLogoutClick() {
        logout();
        window.location.replace("/login")
    }

    // Render
    return (
        <div className='btnIcon'>

            <SignOut size={ size } weight='fill' onClick={ onLogoutClick } className='btnIcon' />

        </div>
    )

}