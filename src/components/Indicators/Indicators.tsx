import { getClassNameWithModifiers } from '../../utils/className';
import { getDateDifference } from '../../utils/date';
import GroupList from '../GroupList';
import Wrapper from '../Wrapper';
import { Measurement } from '../General/interfaces';
import IndicatorsRow from './IndicatorsRow';
import './indicators.scss'

interface IndicatorsProps {
    lastMeasurementExperiment: Measurement;
    isMobile: boolean;

}
const Indicators = ({
    lastMeasurementExperiment,
    isMobile
}: IndicatorsProps) => {
    const lightOnTime = getDateDifference(
        lastMeasurementExperiment.lightOffTime,
        lastMeasurementExperiment.lightWorkingTime
    ).toLocaleDateString();
    const className = getClassNameWithModifiers({
        className: 'indicators',
        modifiers: [
            ['indicators--mobile', isMobile]
        ]
    });
    const error = lastMeasurementExperiment.danger ? 'Да' : 'Нет';

    return (
        <div className={className}>
            <Wrapper isBoxSchadow>
                <GroupList
                    list={[
                        [
                            <IndicatorsRow
                                label='Температура воздуха'
                                value={`${lastMeasurementExperiment.tempWater}`}
                            />,
                            <IndicatorsRow
                                label='Температура комнаты'
                                value={`${lastMeasurementExperiment.tempRoom}`}
                            />
                        ],
                        [
                            <IndicatorsRow
                                label='Время влючения света'
                                value={lightOnTime}
                            />
                        ],
                        [
                            <IndicatorsRow
                                label='Ошибки'
                                value={error}
                            />
                        ]
                    ]}
                />
            </Wrapper>
        </div>
    );
};

export default Indicators;
