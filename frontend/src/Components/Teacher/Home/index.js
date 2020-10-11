import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { GrAchievement } from 'react-icons/gr';

import { Container } from './styles';
import { Link } from 'react-router-dom';

import person from '../../../Assets/teacher.png';

function Home() {

    const [teachers] = useState([
        { name: "Julia Barcelos"},
    ]);

    return (
        <Container>
            {teachers.map(teacher => (
                <div key={teacher}>
                    <img src={person} alt="" />
                    <h2>Bem Vindo,</h2>
                    <h1>Prof. {teacher.name}</h1>
                </div>
            ))}

            <ul>
                <li>
                    <Link to="/teacher">
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
                    <Link to="/teacher">
                        <button>
                        <GrAchievement /> Conquistas
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

export default Home;
