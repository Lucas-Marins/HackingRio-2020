import React from 'react';

import { Container } from './styles';
import { CgArrowLeft } from 'react-icons/cg';

function Chat() {

    function SendMessage(e) {
        e.preventDefault();
        console.log("Clicou")
    }

    return (
        <Container>
            <ul id="messages"></ul>
            <form action="">
                <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" />
                <input id="m" autocomplete="off" placeholder="Digite sua mensagem" />
                <button onClick={SendMessage}>
                    <CgArrowLeft size="25" />
                </button>
            </form>
        </Container>
    )
};

export default Chat;