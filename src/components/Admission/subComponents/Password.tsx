import Input from '../../Input';
import useAdmissionContext from '../hooks';

const Password = () => {
    const { isMobile } = useAdmissionContext();

    return (
        <div className='admission__password'>
            <Input isMobile={isMobile}>
                <Input.Label>Пароль</Input.Label>

                <Input.Password>Пример: super_Krutoi_Parol</Input.Password>
            </Input>
        </div>
    );
};

export default Password