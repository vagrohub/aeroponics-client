import './indicators.scss'
import GroupList from '../GroupList';

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

}
const Indicators = ({
    tempWater,
    tempRoom,
    lightOffTime,
    lightWorkingTime,
    isError
}: IndicatorsProps) => {
    const lightOnTime = new Date(lightOffTime.getTime() - lightWorkingTime)
        .toLocaleDateString();

    return (
        <div className='indicators'>
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
                        getIndicatorRow('ошибки', `${isError ? 'Да' : 'Нет'}`)
                    ]
                ]}
            />
        </div>
    );
};

export default Indicators;
