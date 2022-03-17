interface TextProps {
    children: string;
}
const Text = ({ children }: TextProps) => {

    return (
        <input
            className='input__text'
            placeholder={children}
            type='text'
        />
    );
};

export default Text