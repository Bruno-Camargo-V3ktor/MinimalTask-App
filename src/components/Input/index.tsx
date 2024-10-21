import {ErrorText, FormInput, InputContainer} from "./styles.ts";


interface InputProps {
    type?: "text" | "password" | "email" ;
    placeholder?: string;
    onChange?: (value: any) => void;
    value?: string;
    errors?: string[];
}

// ------------------------------------------------- \\

export function Input( props: InputProps ) {

    //Attibutes
    const { errors } = props;

    // Render
    return (
        <InputContainer>

            <FormInput {...props} />
            { errors?.map( (e) => <ErrorText>{e}</ErrorText> ) }

        </InputContainer>
    )

}