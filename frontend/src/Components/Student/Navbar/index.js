import React from 'react';

import { Container, Button } from './styles';

function Navbar() {
    return (
        <Container>
            <Button to="/student">
                Home
            </Button>
            <Button to="/student-classes">
                Grupos
            </Button>
        </Container>
    )
};

export default Navbar;
