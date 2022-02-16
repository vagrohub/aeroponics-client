import './main.scss'
import { MainProps } from './interfaces';
import Container from '../Container';
import Headline, { Levels } from '../Headline';
import LastUpdate from '../LastUpdate';
import Info from '../Info';
import TemperatureChart from '../TemperatureChart';
import Indicators from '../Indicators';
import Report from '../Report';
import { getClassNameWithModifiers } from '../../utils/className';
import { execTemperatureFromMeasurements } from './utils';
import Wrapper from '../Wrapper';

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

    return (
        <main className={className}>
            <Container>
                <div className='main__row'>
                    <div className='main__description'>
                        <div className='main__last-update'>
                            <LastUpdate
                                dateLastUpdate={selectedExperiment.lastUpdate}
                            />
                        </div>

                        <div className='main__selected-device'>
                            <Info
                                img={require('./device.png')}
                                title={selectedDevice.name}
                                description={selectedDevice.description}
                                isMobile={isMobile}
                            />
                        </div>

                        <div className='main__selected-experiment'>
                            <Info
                                img={require('./experiment.png')}
                                title={selectedExperiment.title}
                                description={selectedExperiment.description}
                                isMobile={isMobile}
                            />
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
                                <Wrapper isBoxSchadow={true}>
                                    <Headline
                                        level={Levels.Third}
                                        isMobile={isMobile}
                                        value='показатели'
                                    />
                                </Wrapper>

                                <div className='main__block-info'>
                                    <Indicators
                                        tempWater={lastMeasurementExperiment.tempWater}
                                        tempRoom={lastMeasurementExperiment.tempRoom}
                                        lightOffTime={lastMeasurementExperiment.lightOffTime}
                                        lightWorkingTime={lastMeasurementExperiment.lightWorkingTime}
                                        isError={lastMeasurementExperiment.danger}
                                        isMobile={isMobile}
                                    />
                                </div>
                            </div>
                            <div className='main__report'>
                                <Wrapper isBoxSchadow={true}>
                                    <Headline
                                        level={Levels.Third}
                                        isMobile={isMobile}
                                        value='Отчет'
                                    />
                                </Wrapper>

                                <div className='main__block-info'>
                                    <Report />
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