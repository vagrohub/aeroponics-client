import { Device, Experimet } from '../../interface/User';
import Desciption from '../Desciption';

interface DesciptionProps {
    selectedDevice: Device;
    selectedExperiment: Experimet;
    isMobile: boolean;
}
const Description = ({
    selectedDevice,
    selectedExperiment,
    isMobile
}: DesciptionProps) => {
    return (
        <div className='main__description'>
            <Desciption
                selectedDevice={selectedDevice}
                selectedExperiment={selectedExperiment}
                isMobile={isMobile}
            />
        </div>
    );
};

export default Description;