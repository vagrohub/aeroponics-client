import { Link } from 'react-router-dom';
import Admission from '../../components/Admission';

interface AuthProps {
    isMobile: boolean;
}
const Auth = ({ isMobile }: AuthProps) => {

    return (
        <Admission isMobile={isMobile}>
            <Admission.Title img={require('./enter.png')}>Вход</Admission.Title>

            <Admission.Login />

            <Admission.Password />

            <Admission.Footer>
                <Admission.SendForm>Войти</Admission.SendForm>
                <span>
                    Нет аккаунта? <Link to='/registration'>Зарегистрироваться</Link>
                </span>
            </Admission.Footer>
        </Admission>
    );
};

export default Auth