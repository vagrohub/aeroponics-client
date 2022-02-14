import './burger.scss';

interface BurgerProps {
    isOpen: boolean;
    onClickHandler: Function;
}
const Burger = ({ isOpen, onClickHandler }: BurgerProps) => {

    let className = 'burger';
    if (isOpen) className += ' burger--closed';

    return (
        <div className={className} onClick={() => onClickHandler()} />
    )
};

export default Burger