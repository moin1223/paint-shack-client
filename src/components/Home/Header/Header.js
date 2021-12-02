import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div className="header" style={{height: '700px'}}>
            <Navigation />
            <HeaderMain />
        </div>
    );
};

export default Header;