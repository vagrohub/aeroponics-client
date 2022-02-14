import './main.scss'
import { MainProps } from './interfaces';
import Container from '../Container';
import Headline, { Levels } from '../Headline';

const Main = ({ user, windowWidth }: MainProps) => {
    const isMobile = windowWidth <= 526;
    let className = 'main';
    let selectedDevice = user.deviceList[user.deviceList.length - 1];
    let selectedExperiment = selectedDevice.currentExperiment;

    if (isMobile) className += ' main--mobile';

    const lastUpdateMs = Date.now() - selectedExperiment.lastUpdate.getTime();
    const lastUpdateMinue = Math.round(lastUpdateMs / 60_000);

    return (
        <main className={className}>
            <Container>
                <div className='main__row'>
                    <div className='main__description'>
                        <p className='main__last-update'>
                            {`последнее обновление ${lastUpdateMinue} минут назад`}
                        </p>

                        <div className='main__selected-device'>
                            <Headline
                                img={require('./device.png')}
                                level={Levels.Second}
                                isMobile={isMobile}
                                value={selectedDevice.name}
                            />

                            <p>{selectedDevice.description}</p>
                        </div>

                        <div className='main__selected-experiment'>
                            <Headline
                                img={require('./experiment.png')}
                                level={Levels.Second}
                                isMobile={isMobile}
                                value={selectedExperiment.title}
                            />

                            <p>{selectedExperiment.description}</p>
                        </div>                    
                    </div>

                    <div className='main__performance-indicators'>
                        <Headline
                            img={require('./work.png')}
                            level={Levels.Second}
                            isMobile={isMobile}
                            value='Показатели работы'
                        />

                        
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Main;