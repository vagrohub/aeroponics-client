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
    let className = 'simple-button';

    if (isMobile) className += ' simple-button--mobile';
    if (isFill) className += ' simple-button--fill';

    return (
        <button className={className} disabled={isDisabled}>
            {value}
        </button>
    );
};

export default SimpleButton;
