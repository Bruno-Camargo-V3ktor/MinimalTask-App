import {ButtonContainer, LoginContainer, LoginForm, OptionsContainer} from "./styles";
import {ThemeButton} from "../../components/ThemeButton";
import {Door, DoorOpen, UserCirclePlus} from "@phosphor-icons/react";
import {useContext, useState} from "react";
import {Input} from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {securityContext} from "../../contexts/SecurityContext.tsx";
import {User} from "../../@types/security.ts";


export function LoginPage() {


    // State
    const [btnHover, setBtnHover] = useState( false )
    const [username, setUsername] = useState( "" )
    const [password, setPassword] = useState( "" )

    // Attributes
    const navigate = useNavigate();
    const { login } = useContext( securityContext );

    // Methods
    function onClickRegisterUser() {
        navigate('/register');
    }

    function onLogin( event: any ) {
        event.preventDefault();

        login( { username, password } as User )
            .then( (res) => {
                if( res ) navigate('/tasks');
                else console.log( "Recusado" );
        } )
    }


    // Render
    return (
        <LoginContainer>

            <LoginForm>

                <form method="post" onSubmit={ onLogin } >

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
                                ? <DoorOpen size={60} weight="fill" />
                                : <Door size={60} />
                            }

                            <p>Fazer Login</p>
                        </ButtonContainer>
                    </button>

                </form>

            </LoginForm>

            <OptionsContainer>
                <ThemeButton size={ 70 } />
                
                <div className={ 'btnIcon' } onClick={ onClickRegisterUser }>
                    <UserCirclePlus size={ 70 } className={ 'btnIcon' } />
                </div>
            </OptionsContainer>

        </LoginContainer>
    )

}