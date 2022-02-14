import { useState } from 'react';
import './header.scss';
import Container from '../Container';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import Navbar from '../Navbar';
import Burger from '../Burger';


interface HeaderProps {
    windowWidth: number;
    detailsList: {summary: string, render: Function}[];
}
const Header = ({ windowWidth, detailsList }: HeaderProps) => {
    const isMobile = windowWidth <= 744;
    let className = 'header';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    if (isMobile) className += ' header--mobile';
    if (isMobile && isMobileMenuOpen) {
        className += ' header--open-menu';
        document.body.className = 'open-menu';
    } else {
        document.body.className = '';
    }

    return (
        <header className={className}>
            <Wrapper isBoxSchadow={true}>
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
                                onClickHandler={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
