import './groupList.scss';

interface GroupListProps {
    list: string[][];
}
const GroupList = ({ list }: GroupListProps) => {
    const grouList = list.map(group => {
        return (
            <ul className='group-list__group' key={group[0] + 'g'}>
                {group.map(item => <li key={item}>{item}</li>)}
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
