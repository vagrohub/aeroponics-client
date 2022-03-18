interface PasswordProps {
    children: string;
}
const Password = ({ children }: PasswordProps) => {

    return (
        <input
            className='input__password'
            placeholder={children}
            type='password'
        />
    );
};

export default Password