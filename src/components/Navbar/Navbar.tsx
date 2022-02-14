import Details from '../Details';
import './navbar.scss';

interface NavbarProps {
    detailsList: {summary: string, render: Function}[];
    isMobile: boolean;
}
const Navbar = ({ detailsList, isMobile }: NavbarProps) => {
    let className = 'navbar';

    if (isMobile) className += ' navbar--mobile'; 

    return (
        <nav className={className}>
            {detailsList.map(details => {
                return <Details
                    summary={details.summary}
                    isMobile={isMobile}
                    render={details.render}
                    key={details.summary}
                />
            })}
        </nav>
    );
};

export default Navbar;
