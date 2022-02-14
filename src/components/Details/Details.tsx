import './details.scss';
import Wrapper from '../Wrapper';

interface DetailsProps {
    summary: string;
    isMobile: boolean;
    render: Function;
}
const Details = ({ summary, render, isMobile }: DetailsProps) => {
    let className = 'details';

    if (isMobile) className += ' details--mobile';

    return (
        <details className={className}>
            <summary>{summary}</summary>

            <Wrapper isBoxSchadow={!isMobile}>
                <div className='details__list'>
                    {render()}
                </div>
            </Wrapper>
        </details>
    );
};

export type { DetailsProps };
export default Details;
