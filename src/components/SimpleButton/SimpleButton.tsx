import { getClassNameWithModifiers } from '../../utils/className';
import './simpleButton.scss';

interface SimpleButtonProps {
    isMobile: boolean;
    isDisabled: boolean;
    isFill: boolean;
    value: string;
    text: string;
    onClick: Function;
}
const SimpleButton = ({
    isMobile,
    isDisabled,
    isFill,
    value,
    text,
    onClick
}: SimpleButtonProps) => {
    const className = getClassNameWithModifiers({
        className: 'simple-button',
        modifiers: [
            ['simple-button--mobile', isMobile],
            ['simple-button--fill', isFill],
        ]
    });

    return (
        <button
            className={className}
            disabled={isDisabled}
            onClick={(event) => onClick(event)}
            value={value}
        >
            {text}
        </button>
    );
};

export default SimpleButton;
