import { getClassNameWithModifiers } from '../../utils/className';
import './slashButton.scss';

interface SlashButtonProps {
	isMobile: boolean;
	isDisabled: boolean;
	value: string;
}
const SlashButton = ({ isMobile, isDisabled, value }: SlashButtonProps) => {
	const className = getClassNameWithModifiers({
        className: 'slash-button',
        modifiers: [
            ['slash-button--mobile', isMobile]
        ]
    });

	return (
		<button className={className} disabled={isDisabled}>
			<span className='slash-button__value'>{value}</span>
			<span className='slash-button__bevel'></span>
		</button>
	);
};

export default SlashButton;
