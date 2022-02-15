import './groupList.scss';

interface GroupListProps {
    list: JSX.Element[][];
}
const GroupList = ({ list }: GroupListProps) => {
    const grouList = list.map(group => {
        return (
            <ul className='group-list__group' key={Math.random() * 1000}>
                {group.map(item => <li key={Math.random() * 1000}>{item}</li>)}
            </ul>
        );
    });

    return (
        <div className='group-list'>
            {grouList}
        </div>
    );
};

export default GroupList;
