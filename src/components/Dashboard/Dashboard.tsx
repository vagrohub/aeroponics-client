import Header from '../Header';
import General from '../General/General';
import { DashboardProps, User } from './interfaces';
import { detailsList } from './configuration/header';
import './dashboard.scss';


const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    return (
        <div className='dashboard'>
            <Header detailsList={detailsList} windowWidth={windowWidth} />

            <div className='dashboard__main'>
                <General
                    user={user}
                    windowWidth={windowWidth}
                />
            </div>
        </div>
    );
};

export default Dashboard;
export type { User }
