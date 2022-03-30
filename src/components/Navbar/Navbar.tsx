import Devices from './Devices';
import Experiments from './Experiments';
import Settings from './Settings';
import NavbarContext from './NavbarContext';

interface NavbarProps {
    children: JSX.Element | JSX.Element[];
    isMobile: boolean;
}
const Navbar = ({ children, isMobile }: NavbarProps) => {

    return (
        <nav>
            <NavbarContext.Provider value={{ isMobile }}>
                {children}
            </NavbarContext.Provider>
        </nav>
    );
};

Navbar.Devices = Devices;
Navbar.Experiments = Experiments;
Navbar.Settings = Settings;

export default Navbar;