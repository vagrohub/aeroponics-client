import { useContext } from 'react';
import ModalFromContext from './subComponents/ModalForFormContext';

const useModalForFromContext = () => useContext(ModalFromContext);

export {
    useModalForFromContext
}