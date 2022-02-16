import { getClassNameWithModifiers } from '../../utils/className';
import GroupList from '../GroupList';
import Wrapper from '../Wrapper';
import './report.scss';

interface ReportProps {
    isMobile: boolean;
}
const Report = ({ isMobile }: ReportProps) => {
    const className = getClassNameWithModifiers({
        className: 'report',
        modifiers: [
            ['report--mobile', isMobile]
        ]
    });

    return (
        <div className={className}>
            <Wrapper isBoxSchadow={true}>
                <GroupList
                    list={[
                        [
                            <p>За день</p>
                        ],
                        [
                            <p>За неделю</p>
                        ],
                        [
                            <p>За месяц</p>
                        ],
                        [
                            <p>За все время</p>
                        ]
                    ]}
                />
            </Wrapper>
        </div>
    );
};

export default Report;
