import SimpleButton from '../../SimpleButton';
import useAdmissionContext from '../hooks';

interface SendFormProps {
    children: string;
}
const SendForm = ({ children }: SendFormProps) => {
    const { isMobile } = useAdmissionContext();

    return (
        <div className='admission__submit'>
            <SimpleButton
                isMobile={isMobile}
                isDisabled={false}
                isFill={isMobile}
                value={children}
                text={children}
                type='submit'
                onClick={() => { }}
            />
        </div>
    );
};

export default SendForm;