import React from 'react';
import './wrapper.scss';

interface WrapperProps {
    isBoxSchadow: boolean;
    children: React.ReactElement[] | React.ReactElement
}
const Wrapper = ({isBoxSchadow, children}: WrapperProps) => {
    let className = 'wrapper';

    if (isBoxSchadow) className += ' wrapper--with-schadow'

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Wrapper;
