import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrAchievement } from 'react-icons/gr';
import { GiAchievement } from 'react-icons/gi';
import { TiGroup } from 'react-icons/ti';

import { Container } from './styles';

import person from '../../../Assets/teacher.png';

function Student() {

    const [teacher] = useState([
        {name: "Julia Barcelos"}
    ]);

    return (
        <Container>
            {teacher.map(teacher => (
                <div key={teacher}>
                    <img src={person} alt={person} />
                    <h1>Prof. {teacher.name}</h1>
                </div>
            ))}

            <ul>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Grupo 1
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Grupo 2
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Grupo 3
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Grupo 4
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Grupo 5
                    </button>
                    </Link>
                </li>
            </ul>
        </Container>
    )
};

export default Student;
