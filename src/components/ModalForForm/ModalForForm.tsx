import { useEffect, useState } from 'react';
import { getClassNameWithModifiers } from '../../utils/className';
import Wrapper from '../Wrapper';
import ClosedButton from '../ClosedButton';
import SendForm from './subComponents/SendForm';
import Title from './subComponents/Title';
import FieldInput from './subComponents/FieldInput';
import './modalForForm.scss';
import ModalForFormContext from './subComponents/ModalForFormContext';

interface ModalForFormProps {
    children: JSX.Element | JSX.Element[]
    isMobile: boolean;
    isShow: boolean;
    onClosedClickHandler?: Function;
}
const ModalForForm = ({
    children,
    isMobile,
    isShow,
    onClosedClickHandler = () => { }
}: ModalForFormProps) => {
    const [isModalShow, setIsModalShow] = useState(isShow);
    const className = getClassNameWithModifiers({
        className: 'modal',
        modifiers: [
            ['modal--mobile', isMobile],
            ['modal--show', isModalShow],
        ]
    });

    const onButtonHandler = () => {
        setIsModalShow(false);
        onClosedClickHandler();
    };

    useEffect(() => {
        setIsModalShow(isShow)
    }, [isShow]);

    return (
        <div className={className}>
            <div className='modal__body'>
                <Wrapper isBoxSchadow={false}>
                    <div className='modal__header'>
                        <ClosedButton
                            isMobile={isMobile}
                            onClickHandler={onButtonHandler}
                        />
                    </div>

                    <form className='modal__form'>
                        <ModalForFormContext.Provider value={{ isMobile }}>
                            {children}
                        </ModalForFormContext.Provider>
                    </form>
                </Wrapper>
            </div>
        </div>
    );
};

ModalForForm.SendForm = SendForm;
ModalForForm.Title = Title;
ModalForForm.FieldInput = FieldInput;

export default ModalForForm;