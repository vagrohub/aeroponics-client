import { getClassNameWithModifiers } from '../../utils/className';
import Headline, { Levels } from '../Headline';

interface GreetingProps {
    username: string;
    isMobile: boolean;
}
const Greetings = ({ username, isMobile }: GreetingProps) => {
    const className = getClassNameWithModifiers({
        className: 'main__greeting',
        modifiers: [
            ['main__greeting--mobile', isMobile]
        ]
    });

    return (
        <div className={className}>
            <Headline
                img={require('./greeting.png')}
                level={Levels.First}
                isMobile={isMobile}
                value={`Приветсвую, ${username}!`}
            />

            <p>
                Для того, чтобы продолжить,
                добавьте устройство при помощи пункта в блоке "настройки",
                расположенных сверху
            </p>
        </div>
    )
};

export default Greetings;