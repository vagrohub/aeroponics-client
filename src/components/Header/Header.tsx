import { useState } from 'react';
import {
    getClassNameWithModifiers,
    toggleBodyClass
} from '../../utils/className';
import Container from '../Container';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import Navbar from '../Navbar';
import Burger from '../Burger';
import './header.scss';

interface HeaderProps {
    windowWidth: number;
    detailsList: { summary: string, render: Function }[];
}
const Header = ({ windowWidth, detailsList }: HeaderProps) => {
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
    }

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
                            <Navbar detailsList={detailsList} isMobile={isMobile} />
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
                <Navbar detailsList={detailsList} isMobile={isMobile} />
            </div>
        </header>
    );
};

export default Header;
