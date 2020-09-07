import React from 'react'

const Background = ({children, className}) => {
    return (
        <header className={className}>
            {children}
        </header>
    );
}

export default Background;

Background.defaultProps = {
    className: 'defaultHero'
}