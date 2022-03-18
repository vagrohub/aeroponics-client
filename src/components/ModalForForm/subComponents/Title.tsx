import Headline, { Levels } from '../../Headline';
import { useModalForFromContext } from '../hooks';

interface TitleProps {
    img: string;
    children: string;
}
const Title = ({ img, children }: TitleProps) => {
    const { isMobile } = useModalForFromContext();

    return (
        <div className='modal__title'>
            <Headline
                isMobile={isMobile}
                img={img}
                value={children}
                level={Levels.Second}
            />
        </div>
    );
};

export default Title;