import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './measurements.scss';
import Wrapper from '../Wrapper';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);

export const options = {
    responsive: true,
};

interface MeasurementsProp {
    temperatures: {value: number, date: Date}[];
}
const Measurements = ({ temperatures }: MeasurementsProp) => {
    const data = {
        labels: temperatures.map(temperature => temperature.date.toLocaleDateString()),
        datasets: [
            {
                label: 'Вода',
                data: temperatures.map(temperature => temperature.value),
            }
        ],
    }

    return (
        <div className='measurements'>
            <div className='measurements__temperature'>
                <Wrapper isBoxSchadow={true}>
                    <Line
                        data={data}
                        options={options}
                    />
                </Wrapper>
            </div>
        </div>
    );
};

export default Measurements;
