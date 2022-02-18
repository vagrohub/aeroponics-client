import { getClassNameWithModifiers } from '../../utils/className';
import Wrapper from '../Wrapper';
import './details.scss';

interface DetailsProps {
    summary: string;
    isMobile: boolean;
    render: Function;
}
const Details = ({ summary, render, isMobile }: DetailsProps) => {
    const className = getClassNameWithModifiers({
        className: 'details',
        modifiers: [
            ['details--mobile', isMobile]
        ]
    });

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
