import {ButtonContainer, RegisterContainer, RegisterForm, OptionsContainer} from "./styles";
import {ThemeButton} from "../../components/ThemeButton";
import {Door, DoorOpen} from "@phosphor-icons/react";
import {useContext, useState} from "react";
import {Input} from "../../components/Input";
import {LogoutButton} from "../../components/LogoutButton";
import {useNavigate} from "react-router-dom";
import {securityContext} from "../../contexts/SecurityContext.tsx";
import {User} from "../../@types/security.ts";
import {themeContext} from "../../contexts/ThemeContext.tsx";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";


export function RegisterPage() {

    // State
    const [signing, setSigning] = useState( false )
    const [btnHover, setBtnHover] = useState( false )
    const [email, setEmail] = useState( "" )
    const [username, setUsername] = useState( "" )
    const [password, setPassword] = useState( "" )

    // Attributes
    const navigate = useNavigate();
    const { register } = useContext( securityContext );

    const { theme } = useContext( themeContext );

    const loadingAnimation = ( <UseAnimations animation={ loading } size={56} strokeColor={ theme.secondary } /> )

    // Methods
    function onRegister( event: any ) {
        event.preventDefault();

        setSigning( true )
        register( { email, username, password } as User )
            .then( (res) => {
                if( res ) navigate('/tasks');
                else {
                    setTimeout( () => setSigning( false ), 1500 );
                }
        } )

    }

    // Render
    return (
        <RegisterContainer>

            <RegisterForm>

                <form method="post" onSubmit={ onRegister } >

                    <Input
                        type='email'
                        placeholder='Email'
                        value={ email }
                        onChange={ ( e ) => { setEmail( e.target.value ) }}
                        errors={ [] }
                    />

                    <Input
                        type='text'
                        placeholder='Username'
                        value={ username }
                        onChange={ ( e ) => { setUsername( e.target.value ) }}
                        errors={ [] }
                    />

                    <Input
                        type='password'
                        placeholder='Password'
                        value={ password }
                        onChange={ ( e ) => { setPassword( e.target.value ) }}
                        errors={ [] }
                    />

                    <button className={ 'btnIcon' } >
                        <ButtonContainer onMouseEnter={ () => setBtnHover( true ) }  onMouseLeave={ () => setBtnHover( false ) } >

                            {
                                btnHover
                                    ?  !signing ? <DoorOpen size={60} weight="fill"/> : loadingAnimation
                                    :  !signing ? <Door size={60}/> : loadingAnimation
                            }

                            <p>CADASTRAR</p>
                        </ButtonContainer>
                    </button>

                </form>

            </RegisterForm>

            <OptionsContainer>
                <ThemeButton size={ 70 } />
                <LogoutButton size={ 70 } />
            </OptionsContainer>

        </RegisterContainer>
    )

}