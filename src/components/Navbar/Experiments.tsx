import { Experimet } from "../../interface/User";
import Details from "../Details";
import GroupList from "../GroupList";

interface ExperimentsProps {
    experimentList: Experimet[];
    setExperiment(experiment: Experimet): any;
    isMobile: boolean;
}
const Experiments = ({
    experimentList,
    setExperiment,
    isMobile
}: ExperimentsProps) => {
    return (
        <Details
            summary='Эксперименты'
            isMobile={isMobile}
            render={() => {
                return (
                    <GroupList list={[
                        experimentList.map(experiment => {
                            return (
                                <p
                                    className='navbar__select'
                                    onClick={() => setExperiment(experiment)}
                                >
                                    {experiment.title}
                                </p>
                            );
                        })
                    ]} />
                );
            }}
        />
    );
};

export default Experiments;