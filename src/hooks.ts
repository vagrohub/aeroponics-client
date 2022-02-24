import { useState } from 'react';

const useSelectFromArray = (array: any[], index: number = 0) => {
    return useState(
        array[index] !== undefined ? array[index] : null
    );
};

export {
    useSelectFromArray
}