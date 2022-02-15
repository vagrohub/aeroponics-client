import './main.scss'
import { MainProps } from './interfaces';
import Container from '../Container';
import Headline, { Levels } from '../Headline';
import Measurements from '../Measurements';
import { getTimeElapsedSince } from '../../utils/date';
import { getClassNameWithModifiers } from '../../utils/className';

const Main = ({ user, windowWidth }: MainProps) => {
    const isMobile = windowWidth <= 526;
    const className = getClassNameWithModifiers({
        className: 'main',
        modifiers: [
            ['main--mobile', isMobile],
        ]
    });
    let selectedDevice = user.deviceList[user.deviceList.length - 1];
    let selectedExperiment = selectedDevice.currentExperiment;

    const lastUpdate = getTimeElapsedSince(selectedExperiment.lastUpdate);
    const temperatures = selectedExperiment.measurements.map(measurement => {
        return {
            value: measurement.tempWater,
            date: measurement.date
        }
    })

    const measurements = isMobile
        ? null
        : <Measurements temperatures={temperatures} />

    return (
        <main className={className}>
            <Container>
                <div className='main__row'>
                    <div className='main__description'>
                        <p className='main__last-update'>
                            {`последнее обновление ${lastUpdate} минут назад`}
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

                        <div className='main__measurements'>
                            {measurements}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Main;