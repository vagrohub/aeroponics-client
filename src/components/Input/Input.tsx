import { getClassNameWithModifiers } from '../../utils/className';
import Label from './Label';
import Text from './Text';
import Textarea from './Textarea';
import Password from './Password';
import './input.scss';

interface InputProps {
    children: JSX.Element | JSX.Element[];
    isMobile: boolean;
}
const Input = ({ children, isMobile }: InputProps) => {
    const className = getClassNameWithModifiers({
        className: 'input',
        modifiers: [
            ['input--mobile', isMobile],
        ]
    });

    return (
        <label className={className}>
            {children}
        </label>
    );
};

Input.Label = Label;
Input.Text = Text;
Input.Textarea = Textarea;
Input.Password = Password;

export default Input;
