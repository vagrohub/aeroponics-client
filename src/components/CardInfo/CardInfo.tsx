import Headline, { Levels } from '../Headline';
import Wrapper from '../Wrapper';
import './cardInfo.scss';

interface CardInfoProps {
    title: string;
    isMobile: boolean;
    render(): JSX.Element;
}
const CardInfo = ({ title, render, isMobile }: CardInfoProps) => {
    return (
        <div className='card-info'>
            <Wrapper isBoxSchadow={true}>
                <div className='card-info__title'>
                    <Headline
                        level={Levels.Third}
                        value={title}
                        isMobile={isMobile}
                    />
                </div>
            </Wrapper>

            <div className='card-info__body'>
                {render()}
            </div>
        </div>
    );
};

export default CardInfo;