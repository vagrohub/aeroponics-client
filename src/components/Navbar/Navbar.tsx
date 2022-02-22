import { getClassNameWithModifiers } from '../../utils/className';
import './navbar.scss';

interface NavbarProps {
    isMobile: boolean;
    children: JSX.Element[] | JSX.Element
}
const Navbar = ({ isMobile, children }: NavbarProps) => {
    const className = getClassNameWithModifiers({
        className: 'navbar',
        modifiers: [
            ['navbar--mobile', isMobile],
        ]
    });

    return (
        <nav className={className}>
            {children}
        </nav>
    );
};

export default Navbar;
