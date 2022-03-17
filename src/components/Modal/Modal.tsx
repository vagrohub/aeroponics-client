import { useEffect, useState } from 'react';
import { getClassNameWithModifiers } from '../../utils/className';
import Wrapper from '../Wrapper';
import ClosedButton from '../ClosedButton';
import './modal.scss';

interface ModalProps {
    children: JSX.Element | JSX.Element[]
    isMobile: boolean;
    isShow: boolean;
    onClosedClickHandler?: Function;
}
const Modal = ({
    children,
    isMobile,
    isShow,
    onClosedClickHandler = () => { }
}: ModalProps) => {
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
                        {children}
                    </form>
                </Wrapper>
            </div>
        </div>
    );
};

export default Modal;