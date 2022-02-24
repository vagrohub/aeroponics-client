import { useState } from 'react';
import {
    getClassNameWithModifiers,
    toggleBodyClass
} from '../../utils/className';
import { Device, Experimet } from '../../interface/User';
import Container from '../Container';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import Navbar, { NavbarDetails } from '../Navbar';
import Burger from '../Burger';
import './header.scss';

interface HeaderProps {
    windowWidth: number;
    deviceList: Device[];
    setDevice(device: Device): any
    experimentList: Experimet[];
    setExperiment(experiment: Experimet): any
}
const Header = ({
    windowWidth,
    deviceList,
    setDevice,
    experimentList,
    setExperiment
}: HeaderProps) => {
    const isMobile = windowWidth <= 744;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const className = getClassNameWithModifiers({
        className: 'header',
        modifiers: [
            ['header--mobile', isMobile],
            ['header--open-menu', isMobile && isMobileMenuOpen]
        ]
    });

    const onBurgerClickHandler = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        toggleBodyClass('body--overflow');
    };

    const settings = (
        <NavbarDetails.Settings
            isMobile={isMobile}
        />
    );
    const devices = (
        <NavbarDetails.Devices
            isMobile={isMobile}
            deviceList={deviceList}
            setDevice={setDevice}

        />
    );
    const experiments = (
        <NavbarDetails.Experiments
            isMobile={isMobile}
            experimentList={experimentList}
            setExperiment={setExperiment}
        />
    );
    const navbar = (
        <Navbar isMobile={isMobile}>
            {settings}
            {devices}
            {experiments}
        </Navbar>
    );

    return (
        <header className={className}>
            <Wrapper isBoxSchadow>
                <Container>
                    <div className='header__row'>
                        <div className='header__logotype'>
                            <Icon
                                img={require('./logo.png')}
                                isMobile={isMobile}
                                alt='Вятский государственный агротехнологический университет'
                            />
                        </div>

                        <div className='header__desktop-navbar'>
                            {navbar}
                        </div>
                        <div className='header__burger'>
                            <Burger
                                isOpen={isMobileMenuOpen}
                                onClickHandler={onBurgerClickHandler}
                            />
                        </div>
                    </div>
                </Container>
            </Wrapper>

            <div className='header__mobile-navbar'>
                {navbar}
            </div>
        </header>
    );
};

export default Header;
