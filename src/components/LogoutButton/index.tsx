import {SignOut} from "@phosphor-icons/react";

export function LogoutButton( props : { size: number } ) {

    // Attributes
    const { size } = props;

    // Methods
    function onLogoutClick() {
        window.location.replace("/login")
    }

    // Render
    return (
        <div className='btnIcon'>

            <SignOut size={ size } width='fill' onClick={ onLogoutClick } className='btnIcon' />

        </div>
    )

}