import './slashButton.scss';

interface SlashButtonProps {
	isMobile: boolean;
	isDisabled: boolean;
	value: string;
}
const SlashButton = ({ isMobile, isDisabled, value }: SlashButtonProps) => {
	const className = `slash-button${isMobile ? ' slash-button--mobile' : ''}`;

	return (
		<button className={className} disabled={isDisabled}>
			<span className='slash-button__value'>{value}</span>
			<span className='slash-button__bevel'></span>
		</button>
	);
};

export default SlashButton;
