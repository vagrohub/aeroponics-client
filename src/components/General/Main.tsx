import Container from '../Container';
import Desciption from '../Desciption';
import PerformanceIndicators from '../PerformanceIndicators';
import { MainProps } from './interfaces';

const Main = ({ user, windowWidth }: MainProps) => {
    const isMobile = windowWidth <= 526;

    const selectedDevice = user.deviceList[0];
    const selectedExperiment = selectedDevice.currentExperiment;

    return (
        <main className='main'>
            <Container>
                <div className='main__row'>
                    <div className='main__description'>
                        <Desciption
                            selectedDevice={selectedDevice}
                            selectedExperiment={selectedExperiment}
                            isMobile={isMobile}
                        />
                    </div>

                    <div className='main__performance-indicators'>
                        <PerformanceIndicators
                            currentExperiment={selectedExperiment}
                            isMobile={isMobile}
                        />
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Main;