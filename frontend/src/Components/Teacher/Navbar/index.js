import React from 'react';

import { Container, Button } from './styles';

function Navbar() {
    return (
        <Container>
            <Button to="/teacher/">
                Home
            </Button>
            <Button to="/teacher-classes">
                    Turmas
            </Button>
        </Container>
    )
};

export default Navbar;
