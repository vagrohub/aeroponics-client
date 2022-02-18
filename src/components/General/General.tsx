import Main from './Main';
import Greeting from './Greeting';
import { User } from './interfaces';
import './general.scss';

interface GeneralProps {
    user: User
    windowWidth: number;
}
const General = ({user, windowWidth}: GeneralProps) => {
    const returnComponent = user.deviceList.length === 0
        ? <Greeting username={user.username} windowWidth={windowWidth}/>
        : <Main windowWidth={windowWidth} user={user}/>

    return returnComponent;
};

export default General;