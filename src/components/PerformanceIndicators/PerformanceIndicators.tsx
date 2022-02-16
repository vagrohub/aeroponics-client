import Headline, { Levels } from '../Headline';
import Indicators from '../Indicators';
import Report from '../Report';
import TemperatureChart from '../TemperatureChart';
import Wrapper from '../Wrapper';
import { Experimet } from '../Main/interfaces';
import './performanceIndicators.scss';
import { execTemperatureFromMeasurements } from '../Main/utils';
import { getClassNameWithModifiers } from '../../utils/className';

interface PerformanceIndicatorsProps {
    currentExperiment: Experimet;
    isMobile: boolean;
}
const PerformanceIndicators = ({ currentExperiment, isMobile }: PerformanceIndicatorsProps) => {
    const clasName = getClassNameWithModifiers({
        className: 'performance-indicators',
        modifiers: [
            ['performance-indicators--mobile', isMobile]
        ]
    });
    const lastMeasurementExperiment = currentExperiment
        .measurements[currentExperiment.measurements.length - 1];

    const {
        tempWater,
        tempRoom
    } = execTemperatureFromMeasurements(currentExperiment.measurements);
    const temperatureChart = isMobile
        ? null
        : (
            <div className='performance-indicators__temperature-chart'>
                <TemperatureChart
                    tempWater={tempWater}
                    tempRoom={tempRoom}
                />
            </div>
        );

    return (
        <section className={clasName}>
            <Headline
                img={require('./work.png')}
                level={Levels.Second}
                isMobile={isMobile}
                value='Показатели работы'
            />

            <div className='performance-indicators__measurements'>
                <div className='performance-indicators__row'>
                    {temperatureChart}
                </div>
                <div className='performance-indicators__row'>
                    <div className='performance-indicators__indicators'>
                        <Wrapper isBoxSchadow={true}>
                            <Headline
                                level={Levels.Third}
                                isMobile={isMobile}
                                value='показатели'
                            />
                        </Wrapper>

                        <div className='performance-indicators__block-info'>
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
                    <div className='performance-indicators__report'>
                        <Wrapper isBoxSchadow={true}>
                            <Headline
                                level={Levels.Third}
                                isMobile={isMobile}
                                value='Отчет'
                            />
                        </Wrapper>

                        <div className='performance-indicators__block-info'>
                            <Report />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceIndicators;
