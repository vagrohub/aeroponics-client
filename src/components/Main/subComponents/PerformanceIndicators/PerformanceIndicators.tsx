import { getClassNameWithModifiers } from '../../../../utils/className';
import CardInfo from '../../../CardInfo';
import Headline, { Levels } from '../../../Headline';
import Indicators from '../../../Indicators';
import Report from '../../../Report';
import TemperatureChart from '../../../TemperatureChart';
import { useMainContext } from '../../hooks';
import { execTemperatureFromMeasurements } from '../../utils';
import './performanceIndicators.scss';

const PerformanceIndicators = () => {
    const { isMobile, selectedExperiment } = useMainContext();
    
    const clasName = getClassNameWithModifiers({
        className: 'performance-indicators',
        modifiers: [
            ['performance-indicators--mobile', isMobile]
        ]
    });

    if (!selectedExperiment) return null;
    if (selectedExperiment?.measurements.length === 0) return null;

    const lastMeasurementExperiment = selectedExperiment
        .measurements[selectedExperiment.measurements.length - 1];
    const {
        tempWater,
        tempRoom
    } = execTemperatureFromMeasurements(selectedExperiment.measurements);
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
