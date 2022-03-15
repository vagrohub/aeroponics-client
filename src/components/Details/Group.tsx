interface GroupProps {
    children: JSX.Element | JSX.Element[];
}
const Group = ({ children }: GroupProps) => {
    return (
        <li className='details__item'>
            <ul className='details__group'>
                {children}
            </ul>
        </li>
    );
};

export default Group;