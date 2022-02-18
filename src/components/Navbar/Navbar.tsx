import { getClassNameWithModifiers } from '../../utils/className';
import Details from '../Details';
import './navbar.scss';

interface NavbarProps {
    detailsList: {summary: string, render: Function}[];
    isMobile: boolean;
}
const Navbar = ({ detailsList, isMobile }: NavbarProps) => {
    const className = getClassNameWithModifiers({
        className: 'navbar',
        modifiers: [
            ['navbar--mobile', isMobile],
        ]
    });

    return (
        <nav className={className}>
            {detailsList.map(details => {
                return (
                    <Details
                        summary={details.summary}
                        isMobile={isMobile}
                        render={details.render}
                        key={details.summary}
                    />
                );
            })}
        </nav>
    );
};

export default Navbar;
