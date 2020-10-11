import React from 'react';

import logo from '../../../Assets/logo.svg';

import { Container } from './styles';

    function Header() {
        return (
            <Container>
                <img src={logo} alt={logo}/>
            </Container>
        )
    };

export default Header;