import { getClassNameWithModifiers } from '../../utils/className';
import Password from './subComponents/Password';
import Login from './subComponents/Login';
import SendForm from './subComponents/SendForm';
import Footer from './subComponents/Footer';
import Title from './subComponents/Title';
import AdmissionContext from './AdmissionContext';
import './admission.scss';


interface AdmissionProps {
    isMobile: boolean;
    children: JSX.Element | JSX.Element[]
}
const Admission = ({ isMobile, children }: AdmissionProps) => {
    const className = getClassNameWithModifiers({
        className: 'admission',
        modifiers: [
            ['admission', isMobile]
        ]
    })

    return (
        <div className={className}>
            <div className='admission__container'>
                <form className='admission__form'>
                    <AdmissionContext.Provider value={{ isMobile }}>
                        {children}
                    </AdmissionContext.Provider>
                </form>
            </div>
        </div>
    );
};

Admission.Login = Login;
Admission.Password = Password;
Admission.SendForm = SendForm;
Admission.Footer = Footer;
Admission.Title = Title;

export default Admission