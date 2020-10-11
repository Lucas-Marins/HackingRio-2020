import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { GrAchievement } from 'react-icons/gr';


import { Container } from './styles';

function StudentHome() {

    const [students] = useState([
        { name: "Henrique", matter: "Publicidade e Propaganda", },
    ]);

    return (
        <Container>
            {students.map(student => (
                <div key={student}>
                    <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" />
                    <h2>Bem Vindo.</h2>
                    <h1>{student.name}</h1>
                    <p>{student.matter}</p>
                </div>
            ))}

            <ul>
                <li>
                    <button>
                        <FaUser /> Perfil
                    </button>
                </li>
                <li>
                    <button>
                        <GrAchievement /> Conquistas
                    </button>
                </li>
            </ul>
        </Container>
    )
};

export default StudentHome;