import './indicators.scss'
import GroupList from '../GroupList';
import Wrapper from '../Wrapper';
import { Measurement } from '../Main/interfaces';
import { getClassNameWithModifiers } from '../../utils/className';

const getIndicatorRow = (label: string, value: string) => {
    return (
        <div className='indicators__row'>
            <span className='indicators__label'>{label}</span>
            <span className='indicators__value'>{value}</span>
        </div>
    );
};

interface IndicatorsProps {
    lastMeasurementExperiment: Measurement;
    isMobile: boolean;

}
const Indicators = ({
    lastMeasurementExperiment,
    isMobile
}: IndicatorsProps) => {
    const lightOnTime = new Date(lastMeasurementExperiment.lightOffTime.getTime() - lastMeasurementExperiment.lightWorkingTime)
        .toLocaleDateString();
    const className = getClassNameWithModifiers({
        className: 'indicators',
        modifiers: [
            ['indicators--mobile', isMobile]
        ]
    })

    return (
        <div className={className}>
            <Wrapper isBoxSchadow={true}>
                <GroupList
                    list={[
                        [
                            getIndicatorRow('Температура воздуха', `${lastMeasurementExperiment.tempWater}`),
                            getIndicatorRow('Температура комнаты', `${lastMeasurementExperiment.tempRoom}`)
                        ],
                        [
                            getIndicatorRow('Время влючения света', lightOnTime)
                        ],
                        [
                            getIndicatorRow('Ошибки', `${lastMeasurementExperiment.danger ? 'Да' : 'Нет'}`)
                        ]
                    ]}
                />
            </Wrapper>
        </div>
    );
};

export default Indicators;
