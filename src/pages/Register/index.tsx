import {ButtonContainer, RegisterContainer, RegisterForm, OptionsContainer} from "./styles";
import {ThemeButton} from "../../components/ThemeButton";
import {Door, DoorOpen} from "@phosphor-icons/react";
import {useContext, useEffect, useState} from "react";
import {Input} from "../../components/Input";
import {LogoutButton} from "../../components/LogoutButton";
import {useNavigate} from "react-router-dom";
import {securityContext} from "../../contexts/SecurityContext.tsx";


export function RegisterPage() {

    // State
    const [btnHover, setBtnHover] = useState( false )
    const [name, setName] = useState( "" )
    const [username, setUsername] = useState( "" )
    const [password, setPassword] = useState( "" )

    // Attributes
    const navigate = useNavigate();
    const { getToken } = useContext( securityContext );

    // Methods
    function onRegister( event: any ) {
        event.preventDefault();

        navigate('/tasks');
    }

    // Effects
    useEffect(() => {
        if( getToken() ) navigate('/tasks');
    }, []);

    // Render
    return (
        <RegisterContainer>

            <RegisterForm>

                <form method="post" onSubmit={ onRegister } >

                    <Input
                        type='text'
                        placeholder='Name'
                        value={ name }
                        onChange={ ( e ) => { setName( e.target.value ) }}
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
                                    ? <DoorOpen size={60} weight="fill" />
                                    : <Door size={60} />
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