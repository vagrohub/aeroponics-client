import GroupList from '../GroupList';
import Wrapper from '../Wrapper';
import './report.scss';

const Report = () => {
    return (
        <div className='report'>
            <Wrapper isBoxSchadow={true}>
                <GroupList
                    list={[
                        [
                            <p>За день</p>,
                            <p>За неделю</p>
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
