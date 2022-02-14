import './icon.scss';

interface IconProps {
    img: string;
    isMobile: boolean;
    alt: string;
}
const Icon = ({
    img,
    isMobile,
    alt
}: IconProps) => {
    let className = 'icon';

    if (isMobile) className += ' icon--mobile'

    return (
        <span className={className}>
            <img src={img} alt={alt} />
        </span>
    );
};

export default Icon;