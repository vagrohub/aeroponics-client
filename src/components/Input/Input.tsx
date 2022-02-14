import './input.scss';

interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    isMobile: boolean;
}
const Input = ({label, placeholder, type, isMobile}: InputProps) => {
    let className = 'input';

    if (isMobile) className += ' input--mobile'

    return (
        <label className={className}>
            <span className='input__label'>{label}</span>
            <input
                type={type}
                className='input__field'
                placeholder={placeholder}
            />
        </label>
    );
};

export default Input;
