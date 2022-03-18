import SimpleButton from '../../SimpleButton';
import { useModalForFromContext } from '../hooks';

interface SendFormProps {
    children: string;
}
const SendForm = ({ children }: SendFormProps) => {
    const { isMobile } = useModalForFromContext()

    return (
        <div className='modal__send-form'>
            <SimpleButton
                isMobile={isMobile}
                isFill={isMobile}
                isDisabled={false}
                text={children}
                value={children}
                type='submit'
                onClick={() => console.log('work')}
            />
        </div>
    );
};

export default SendForm;