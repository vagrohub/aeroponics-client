import Header from '../Header';
import Main from '../Main';
import Greeting from '../Greeting';
import { DashboardProps, User } from './interfaces';
import { detailsList } from './configuration/header';
import './dashboard.scss';


const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    const daschboardBody = user.deviceList.length === 0
        ? <Greeting username={user.username} windowWidth={windowWidth} />
        : <Main user={user} windowWidth={windowWidth} />;  

    return (
        <div className='dashboard'>
            <Header detailsList={detailsList} windowWidth={windowWidth} />

            <div className='dashboard__main'>
                {daschboardBody}
            </div>
        </div>
    );
};

export default Dashboard;
export type { User }
