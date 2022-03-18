import Headline, { Levels } from '../../Headline';
import useAdmissionContext from '../hooks';

interface TitleProps {
    children: string;
    img: string;
}
const Title = ({ children, img }: TitleProps) => {
    const { isMobile } = useAdmissionContext();

    return (
        <div className='admission__title'>
            <Headline
                isMobile={isMobile}
                value={children}
                level={Levels.First}
                img={img}
            />
        </div>
    );
};

export default Title;