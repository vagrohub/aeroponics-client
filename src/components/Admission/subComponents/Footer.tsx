interface FooterProps {
    children: JSX.Element | JSX.Element[] | string;
}
const Footer = ({ children }: FooterProps) => {

    return (
        <div className='admission__footer'>
            {children}
        </div>
    );
};

export default Footer;