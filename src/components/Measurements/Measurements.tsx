import './measurements.scss';
import Wrapper from '../Wrapper';

interface MeasurementsProp {
    measurements: {
        danger: boolean,
        tempRoom: number,
        tempWater: number,
        lightSensor: number,
        lightWorkingTime: number,
        lightOffTime: Date,
        pumpTime: number,
        pumpSleep: number,
        date: Date
    }[]
}
const Measurements = ({ measurements }: MeasurementsProp) => {

    return (
        <div className='measurements'>

            <Wrapper isBoxSchadow={true}>

            </Wrapper>

            <Wrapper isBoxSchadow={true}>
                
            </Wrapper>

            <Wrapper isBoxSchadow={true}>
                
            </Wrapper>
        </div>
    );
};

export default Measurements;
