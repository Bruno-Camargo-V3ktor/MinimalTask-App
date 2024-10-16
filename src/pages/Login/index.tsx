import {ButtonContainer, LoginContainer, LoginForm, LoginFormInput, OptionsContainer} from "./styles";
import {ThemeButton} from "../../components/ThemeButton";
import {Door, DoorOpen, UserCirclePlus} from "@phosphor-icons/react";
import {useState} from "react";


export function LoginPage() {

    // State
    const [btnHover, setBtnHover] = useState( false )
    const [username, setUsername] = useState( "" )
    const [password, setPassword] = useState( "" )

    // Methods
    function onClickRegisterUser() {
        
    }

    function onLogin( event: any ) {
        event.preventDefault();
    }

    // Render
    return (
        <LoginContainer>

            <LoginForm>

                <form method="post" onSubmit={ onLogin } >

                    <LoginFormInput
                        type='text'
                        placeholder='Username'
                        value={ username }
                        onChange={ ( e ) => { setUsername( e.target.value ) }}
                    />

                    <LoginFormInput
                        type='password'
                        placeholder='Password'
                        value={ password }
                        onChange={ ( e ) => { setPassword( e.target.value ) }}
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