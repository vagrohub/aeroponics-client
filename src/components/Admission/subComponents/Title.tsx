import Headline, { Levels } from '../../Headline';
import useAdmissionContext from '../hooks';

interface TitleProps {
    children: string;
}
const Title = ({ children }: TitleProps) => {
    const { isMobile } = useAdmissionContext();

    return (
        <div className='admission__title'>
            <Headline
                isMobile={isMobile}
                value={children}
                level={Levels.First}
            />
        </div>
    );
};

export default Title;