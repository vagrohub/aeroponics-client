import { getClassNameWithModifiers } from '../../utils/className';
import './simpleButton.scss';

interface SimpleButtonProps {
    isMobile: boolean;
    isDisabled: boolean;
    isFill: boolean;
    value: string;
}
const SimpleButton = ({
    isMobile,
    isDisabled,
    isFill,
    value
}: SimpleButtonProps) => {
    const className = getClassNameWithModifiers({
        className: 'simple-button',
        modifiers: [
            ['simple-button--mobile', isMobile],
            ['simple-button--fill', isFill],
        ]
    });

    return (
        <button className={className} disabled={isDisabled}>
            {value}
        </button>
    );
};

export default SimpleButton;
