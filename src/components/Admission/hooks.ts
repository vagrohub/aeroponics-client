import { useContext } from 'react';
import AdmissionContext from './AdmissionContext';

const useAdmissionContext = () => useContext(AdmissionContext);

export default useAdmissionContext;