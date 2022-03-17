interface TextareaProps {
    children: string;
}
const Textarea = ({ children }: TextareaProps) => {

    return (
        <textarea className='input__textarea' defaultValue={children}/>
    );
};

export default Textarea;