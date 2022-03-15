import Wrapper from '../Wrapper';

interface BodyProps {
    children: JSX.Element | JSX.Element[];
}
const Body = ({ children }: BodyProps) => {

    return (
        <div className='details__body'>
            <Wrapper isBoxSchadow>
                <ul className='details__list'>
                    {children}
                </ul>
            </Wrapper>
        </div>
    );
};

export default Body;