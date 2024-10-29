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
    const [errorsEmail, setErrorsEmail] = useState<string[]>( [] )
    const [errorsUsername, setErrorsUsername] = useState<string[]>( [] )
    const [errorsPassword, setErrorsPassword] = useState<string[]>( [] )
    const [email, setEmail] = useState( "" )
    const [username, setUsername] = useState( "" )
    const [password, setPassword] = useState( "" )

    // Attributes
    const navigate = useNavigate();
    const { register, existedUserWithUsername } = useContext( securityContext );

    const { theme } = useContext( themeContext );

    const loadingAnimation = ( <UseAnimations animation={ loading } size={56} strokeColor={ theme.secondary } /> )

    // Methods
    async function onRegister( event: any ) {
        event.preventDefault();


        if ( !email || !username || !password ) {
            if ( !email ) setErrorsEmail( ["Cambo Obrigatorio"] )
            if ( !username ) setErrorsUsername( ["Cambo Obrigatorio"] )
            if ( !password ) setErrorsPassword( ["Cambo Obrigatorio"] )

            return
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ( !emailRegex.test( email ) ) { setErrorsEmail( ["Email Invalido"] ) }

        if ( password.length < 4 ) { setErrorsPassword( ["A senha precisar ter no minimo 4 caracteres"] ) }

        setSigning( true )

        const userExisted = await existedUserWithUsername( username )
        if ( userExisted ) {
            setTimeout( () => {
                setSigning( false );
                setErrorsUsername( ["Username ja existe"] )
            }, 1000 );
            return
        }




        clearErrors()


        register( { email, username, password } as User )
            .then( (res) => {
                if( res ) {
                    setTimeout( () => navigate('/tasks'), 1500 )
                }

                else {
                    setTimeout( () => { setSigning( false ); setErrorsPassword( ["Algo deu errado :/"] ) }, 1500 );
                }
            } )
    }

    function clearErrors() {
        setErrorsEmail( [] )
        setErrorsUsername( [] )
        setErrorsPassword( [] )
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
                        onChange={ ( e ) => { setEmail( e.target.value ); clearErrors() } }
                        errors={ errorsEmail }
                    />

                    <Input
                        type='text'
                        placeholder='Username'
                        value={ username }
                        onChange={ ( e ) => { setUsername( e.target.value ); clearErrors() } }
                        errors={ errorsUsername }
                    />

                    <Input
                        type='password'
                        placeholder='Password'
                        value={ password }
                        onChange={ ( e ) => { setPassword( e.target.value ); clearErrors() } }
                        errors={ errorsPassword }
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