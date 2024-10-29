import {ButtonContainer, LoginContainer, LoginForm, OptionsContainer} from "./styles";
import {ThemeButton} from "../../components/ThemeButton";
import {Door, DoorOpen, UserCirclePlus} from "@phosphor-icons/react";
import {useContext, useState} from "react";
import {Input} from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {securityContext} from "../../contexts/SecurityContext.tsx";
import {User} from "../../@types/security.ts";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import {themeContext} from "../../contexts/ThemeContext.tsx";

export function LoginPage() {


    // State
    const [signing, setSigning] = useState( false )
    const [errorsUsername, setErrorsUsername] = useState<string[]>( [] )
    const [errorsPassword, setErrorsPassword] = useState<string[]>( [] )
    const [btnHover, setBtnHover] = useState( false )
    const [username, setUsername] = useState( "" )
    const [password, setPassword] = useState( "" )

    // Attributes
    const navigate = useNavigate();
    const { login } = useContext( securityContext );
    const { theme } = useContext( themeContext );

    const loadingAnimation = ( <UseAnimations animation={ loading } size={56} strokeColor={ theme.secondary } /> )

    // Methods
    function onClickRegisterUser() {
        navigate('/register');
    }

    function onLogin( event: any ) {
        event.preventDefault();

        if ( !username || !password ) {
            if( !username ) setErrorsUsername( ["Campo Obrigatorio"] )
            if ( !password ) { setErrorsPassword( ["Campo Obrigatorio"] ) }
            return;
        }

        clearErrors();

        setSigning( true )
        login( { username, password } as User )
            .then( (res) => {
                if( res ) {
                    setTimeout( () => { navigate('/tasks') } , 1500 )
                }

                else {
                    setTimeout( () => { setSigning( false ); setErrorsPassword( ["Usuario ou Senha invalidos"] ) }, 1500 );
                }
        } )
    }

    function clearErrors() {
        setErrorsUsername( [] )
        setErrorsPassword( [] )
    }

    // Render
    return (
        <LoginContainer>

            <LoginForm>

                <form method="post" onSubmit={onLogin}>

                    <Input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={ (e) => { setUsername(e.target.value); clearErrors() } }
                        errors={ errorsUsername }
                    />

                    <Input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={ (e) => { setPassword(e.target.value); clearErrors()} }
                        errors={ errorsPassword }
                    />


                    <button className={'btnIcon'}>
                        <ButtonContainer onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}>

                            {
                                btnHover
                                    ?  !signing ? <DoorOpen size={60} weight="fill"/> : loadingAnimation
                                    :  !signing ? <Door size={60}/> : loadingAnimation
                            }

                            <p>Fazer Login</p>

                        </ButtonContainer>
                    </button>

                </form>

            </LoginForm>

            <OptionsContainer>
                <ThemeButton size={70}/>

                <div className={'btnIcon'} onClick={onClickRegisterUser}>
                    <UserCirclePlus size={70} className={'btnIcon'}/>
                </div>
            </OptionsContainer>

        </LoginContainer>
    )

}