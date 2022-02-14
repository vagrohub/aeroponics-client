import './greeting.scss'
import Headline, { Levels } from '../Headline';
import Container from '../Container';

interface GreetingProps {
    username: string;
    windowWidth: number;
}
const Greeting = ({ username, windowWidth }: GreetingProps) => {
    const isMobile = windowWidth <= 526;
    let className = 'greeting';

    if (isMobile) className += ' greeting--mobile';

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
