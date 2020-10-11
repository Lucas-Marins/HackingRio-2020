import React from 'react';

import { Container, Button } from './styles';

import { FiChevronLeft } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';

function NavOptions(props) {
    return (
        <Container>

            <Button to={props.back}>
                <FiChevronLeft size={24} />
                    Voltar
            </Button>
            <p>{props.title}</p>
            <Button to="">
                <BsThreeDots size={24} />
            </Button>
        </Container>
    );
}

export default NavOptions;