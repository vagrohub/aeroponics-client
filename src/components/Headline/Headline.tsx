import Icon from '../Icon';
import './headline.scss';

enum Levels {
    First,
    Second,
    Third
}

interface HeadlineProps {
    img?: string;
    level: Levels;
    isMobile: boolean
    value: string;
}
const Headline = ({
    img,
    level,
    isMobile,
    value
}: HeadlineProps) => {
    const headlineMap = {
        [Levels.First]: <h1>{value}</h1>,
        [Levels.Second]: <h2>{value}</h2>,
        [Levels.Third]: <h3>{value}</h3>,
    };
    let classNamesHeadline = 'headline';

    if (img) classNamesHeadline += ' headline--with-icon';
    if (isMobile) classNamesHeadline += ' headline--mobile';

    return (
        <div className={classNamesHeadline}>
            {img ? <Icon isMobile={isMobile} img={img} alt={value} /> : null}
            {headlineMap[level]}
        </div>
    );
};

export { Levels };
export default Headline;
