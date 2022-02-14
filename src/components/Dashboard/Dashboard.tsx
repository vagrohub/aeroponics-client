import './dashboard.scss';
import Header from '../Header';
import Main from '../Main';
import Greeting from '../Greeting';
import { DashboardProps, User } from './interfaces';
import { detailsList } from './configuration/header';


const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    const greeting = user.deviceList.length === 0
        ? <Greeting username={user.username} windowWidth={windowWidth} />
        : null; 
    const main = user.deviceList.length === 0 
        ? null
        : <Main user={user} windowWidth={windowWidth} />

    return (
        <div className='dashboard'>
            <Header detailsList={detailsList} windowWidth={windowWidth} />

            <div className='dashboard__main'>
                {greeting}
                {main}
            </div>
        </div>
    );
};

export default Dashboard;
export type { User }
