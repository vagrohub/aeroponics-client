import Input from '../../Input';
import { useModalForFromContext } from '../hooks';

interface FieldInputProps {
    type: 'Text' | 'Password' | 'Textarea';
    label: string;
    children: string;
}
const FieldInput = ({ type, label, children }: FieldInputProps) => {
    const { isMobile } = useModalForFromContext();
    const CInput = Input[type];

    return (
        <div className='modal__field-input'>
            <Input isMobile={isMobile}>
                <Input.Label>{label}</Input.Label>

                <CInput>{children}</CInput>
            </Input>
        </div>
    );
};

export default FieldInput;