import { getClassNameWithModifiers } from '../../utils/className';
import Headline, { Levels } from '../Headline';
import Container from '../Container';
import './greeting.scss'

interface GreetingProps {
    username: string;
    windowWidth: number;
}
const Greeting = ({ username, windowWidth }: GreetingProps) => {
    const isMobile = windowWidth <= 526;
    const className = getClassNameWithModifiers({
        className: 'greeting',
        modifiers: [
            ['greeting--mobile', isMobile]
        ]
    });

    return (
        <div className={className}>
            <Container>
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
            </Container>
        </div>
    )
};

export default Greeting;
