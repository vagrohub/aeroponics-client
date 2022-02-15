import './main.scss'
import { MainProps } from './interfaces';
import Container from '../Container';
import Headline, { Levels } from '../Headline';
import TemperatureChart from '../TemperatureChart';
import Indicators from '../Indicators';
import { getTimeElapsedSince } from '../../utils/date';
import { getClassNameWithModifiers } from '../../utils/className';
import { execTemperatureFromMeasurements } from './utils';

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
    let lastMeasurementExperiment = selectedExperiment
        .measurements[selectedExperiment.measurements.length - 1];

    const {
        tempWater,
        tempRoom
    } = execTemperatureFromMeasurements(selectedExperiment.measurements);
    const lastUpdate = getTimeElapsedSince(selectedExperiment.lastUpdate);

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
                            <div className='main__temperature-chart'>
                                <TemperatureChart
                                    tempWater={tempWater}
                                    tempRoom={tempRoom}
                                />
                            </div>

                            <div className='main__indicators'>
                                <Headline
                                    level={Levels.Third}
                                    isMobile={isMobile}
                                    value='показатели'
                                />

                                <div className='main__block-info'>
                                    <Indicators
                                        tempWater={lastMeasurementExperiment.tempWater}
                                        tempRoom={lastMeasurementExperiment.tempRoom}
                                        lightOffTime={lastMeasurementExperiment.lightOffTime}
                                        lightWorkingTime={lastMeasurementExperiment.lightWorkingTime}
                                        isError={lastMeasurementExperiment.danger}                                        
                                    />
                                </div>
                            </div>
                            <div className='main__report'>
                                <Headline
                                    level={Levels.Third}
                                    isMobile={isMobile}
                                    value='отчет'
                                />

                                <div className='main__block-info'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Main;