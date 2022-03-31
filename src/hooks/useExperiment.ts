import { useState, useEffect } from 'react';
import ResponseError from '../serverServices/basic/ResponseError';
import ExperimentService, { Experiments, IExperiment } from '../serverServices/Experiment';

const extractExperimentFromResponse = (response: Experiments | ResponseError) => {
    let experimentList: IExperiment[];
    let currentExperiment: IExperiment | null;

    if (response instanceof ResponseError) {
        experimentList = [];
        currentExperiment = null;
    } else {
        experimentList = [
            response.currentExperiment,
            ...response.experimentsInCycle
        ];
        currentExperiment = response.currentExperiment;
    }

    return {
        experimentList,
        currentExperiment
    }
}

const useExperiment = async (selectDevice: string) => {
    const experimentService = new ExperimentService();
    const response = await experimentService.getListByDeviceName(selectDevice);

    const [experimentList, setExperimentList] = useState<IExperiment[]>()
    const [selectExperiment, setExperiment] = useState<IExperiment | null>();

    const experimentDate = extractExperimentFromResponse(response);
    setExperimentList(experimentDate.experimentList);
    setExperiment(experimentDate.currentExperiment);


    useEffect(() => {
        const getExperimentData = async () => {
            const response = await experimentService.getListByDeviceName(selectDevice);
            const experimentDate = extractExperimentFromResponse(response);
            setExperimentList(experimentDate.experimentList);
            setExperiment(experimentDate.currentExperiment);
        };

        getExperimentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectDevice]);

    return {
        experimentList,
        selectExperiment,
        setExperiment
    }
}

export default useExperiment;