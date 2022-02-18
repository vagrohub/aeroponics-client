const convertMsToMinute = (ms: number): number => {
    return ms / 60_1000;
};

const getTimeElapsedSince = (date: Date): number => {
    return Math.round(convertMsToMinute(Date.now() - date.getTime()));
};

const getDateDifference = (
    dateOne: Date | number,
    dateSecond: Date | number
): Date => {
    const dateOneToMs = typeof dateOne === 'number'
        ? dateOne
        : dateOne.getTime();
    const dateSecondToMs = typeof dateSecond === 'number'
        ? dateSecond
        : dateSecond.getTime();

    return new Date(dateOneToMs - dateSecondToMs);
};

export {
    convertMsToMinute,
    getTimeElapsedSince,
    getDateDifference
}