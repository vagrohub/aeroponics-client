import Info from '../Info';
import LastUpdate from '../LastUpdate';
import { Experimet } from '../General/interfaces';
import { Device } from '../General/interfaces';
import './desciption.scss';

interface DesciptionProps {
    selectedExperiment: Experimet;
    selectedDevice: Device;
    isMobile: boolean;
}
const Desciption = ({
    selectedExperiment,
    selectedDevice,
    isMobile
}: DesciptionProps) => {

    return (
        <section className='desciption'>
            <div className='desciption__last-update'>
                <LastUpdate
                    dateLastUpdate={selectedExperiment.lastUpdate}
                />
            </div>

            <div className='desciption__selected-device'>
                <Info
                    img={require('./device.png')}
                    title={selectedDevice.name}
                    description={selectedDevice.description}
                    isMobile={isMobile}
                />
            </div>

            <div className='desciption__selected-experiment'>
                <Info
                    img={require('./experiment.png')}
                    title={selectedExperiment.title}
                    description={selectedExperiment.description}
                    isMobile={isMobile}
                />
            </div>
        </section>
    );
};

export default Desciption;