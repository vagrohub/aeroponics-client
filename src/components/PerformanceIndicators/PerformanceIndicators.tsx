import { getClassNameWithModifiers } from '../../utils/className';
import Headline, { Levels } from '../Headline';
import Indicators from '../Indicators';
import Report from '../Report';
import TemperatureChart from '../TemperatureChart';
import CardInfo from '../CardInfo';
import { execTemperatureFromMeasurements } from '../Main/utils';
import './performanceIndicators.scss';
import { Experimet } from '../../interface/User';

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
                    <CardInfo
                        title='Показатели'
                        isMobile={isMobile}
                        render={() => {
                            return (
                                <Indicators
                                    isMobile={isMobile}
                                    lastMeasurementExperiment={lastMeasurementExperiment}
                                />
                            );
                        }}
                    />

                    <CardInfo
                        title='Отчет'
                        isMobile={isMobile}
                        render={() => {
                            return (
                                <Report
                                    isMobile={isMobile}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default PerformanceIndicators;
