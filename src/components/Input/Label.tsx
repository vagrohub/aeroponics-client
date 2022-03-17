interface LabelProps {
    children: string | JSX.Element;
}
const Label = ({ children }: LabelProps) => {

    return (
        <div className='input__label'>
            {children}
        </div>
    );
};

export default Label;