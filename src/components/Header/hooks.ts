import { useContext } from 'react';
import HeaderContext from './HeaderContext';

const useHeaderContext = () => useContext(HeaderContext);

export {
    useHeaderContext
}