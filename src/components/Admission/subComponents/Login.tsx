import Input from '../../Input';
import useAdmissionContext from '../hooks';

const Login = () => {
    const { isMobile } = useAdmissionContext();

    return (
        <div className='admission__login'>
            <Input isMobile={isMobile}>
                <Input.Label>Почта</Input.Label>

                <Input.Text>Пример: login@mail.ru</Input.Text>
            </Input>
        </div>
    );
};

export default Login;