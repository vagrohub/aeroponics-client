import {
    getClassNameWithModifiers
} from '../../utils/className';
import Container from '../Container';
import Wrapper from '../Wrapper';
import Collapse from './Collapse';
import Toggle from './Toggle';
import Brand from './Brand';
import HeaderContext from './HeaderContext';
import './header.scss';

interface HeaderProps {
    isMobile: boolean,
    children: JSX.Element | JSX.Element[];
}
const Header = ({
    isMobile,
    children,
}: HeaderProps) => {
    const className = getClassNameWithModifiers({
        className: 'header',
        modifiers: [
            ['header--mobile', isMobile]
        ]
    });

    return (
        <header className={className}>
            <Wrapper isBoxSchadow>
                <Container>
                    <div className='header__row'>
                        <HeaderContext.Provider value={{ isMobile }}>
                            {children}
                        </HeaderContext.Provider>
                    </div>
                </Container>
            </Wrapper>
        </header>
    );
};

Header.Brand = Brand;
Header.Toggle = Toggle;
Header.Collapse = Collapse;

export default Header;
