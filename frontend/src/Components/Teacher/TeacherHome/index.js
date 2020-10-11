import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function TeacherHome() {

    const [teachers] = useState([
        { name: "Lucas", matter: "Matemática" },
    ]);

    return (
        <Container>
            {teachers.map(teacher => (
                <div key={teacher}>
                    <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" />
                    <h2>Bem Vindo,</h2>
                    <h1>{teacher.name}</h1>
                    <p>{teacher.matter}</p>
                </div>
            ))}

            <ul>
                <li>
                    <Link to="/profile">
                        <button>
                            <FaUser /> Perfil
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/create-class">
                        <button>
                            <BsFillPersonPlusFill /> Criar Turma
                        </button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <button>
                            <RiLogoutBoxRLine /> Sair
                        </button>
                    </Link>
                </li>
            </ul>
        </Container>
    )
};

export default TeacherHome;
