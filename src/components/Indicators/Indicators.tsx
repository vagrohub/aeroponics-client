import './indicators.scss'
import GroupList from '../GroupList';
import Wrapper from '../Wrapper';
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
    tempWater: number;
    tempRoom: number;
    lightOffTime: Date;
    lightWorkingTime: number;
    isError: boolean;
    isMobile: boolean;

}
const Indicators = ({
    tempWater,
    tempRoom,
    lightOffTime,
    lightWorkingTime,
    isError,
    isMobile
}: IndicatorsProps) => {
    const lightOnTime = new Date(lightOffTime.getTime() - lightWorkingTime)
        .toLocaleDateString();
    const className = getClassNameWithModifiers({
        className: 'indicators',
        modifiers: [
            ['indicators--mobile', isMobile]
        ]
    })

    return (
        <div className='indicators'>
            <Wrapper isBoxSchadow={true}>
                <GroupList
                    list={[
                        [
                            getIndicatorRow('Температура воздуха', `${tempWater}`),
                            getIndicatorRow('Температура комнаты', `${tempRoom}`)
                        ],
                        [
                            getIndicatorRow('Время влючения света', lightOnTime)
                        ],
                        [
                            getIndicatorRow('Ошибки', `${isError ? 'Да' : 'Нет'}`)
                        ]
                    ]}
                />
            </Wrapper>
        </div>
    );
};

export default Indicators;
