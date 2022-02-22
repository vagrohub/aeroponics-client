import Container from '../Container';
import './main.scss';

interface MainProps {
    children: JSX.Element[] | JSX.Element;
}
const Main = ({ children }: MainProps) => {
    return (
        <main className='main'>
            <Container>
                <div className='main__row'>
                    {children}
                </div>
            </Container>
        </main>
    )
};

export default Main;