const convertMsToMinute = (ms: number): number => {
    return ms / 60_1000;
};

const getTimeElapsedSince = (date: Date): number => {
    return Math.round(convertMsToMinute(Date.now() - date.getTime()));
}

export {
    convertMsToMinute,
    getTimeElapsedSince
}