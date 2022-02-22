import { Experimet } from '../../interface/User';
import PerformanceIndicators from '../PerformanceIndicators';

interface MeasurementProps {
    selectedExperiment: Experimet;
    isMobile: boolean;
}
const Measurement = ({ selectedExperiment, isMobile }: MeasurementProps) => {
    return (
        <div className='main__performance-indicators'>
            <PerformanceIndicators
                currentExperiment={selectedExperiment}
                isMobile={isMobile}
            />
        </div>
    );
};

export default Measurement;