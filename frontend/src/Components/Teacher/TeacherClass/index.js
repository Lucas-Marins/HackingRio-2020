import React, { useState } from 'react';
import { GrAchievement } from 'react-icons/gr';
import { GiAchievement } from 'react-icons/gi';
import { TiGroup } from 'react-icons/ti';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Student() {

    const [teacher] = useState([
        {
            name: "Lucas",
            matter: "Matemática",
            achievement: [<GiAchievement size="20" />, <GrAchievement size="20" />],
        },
    ]);

    return (
        <Container>
            {teacher.map(teacher => (
                <div key={teacher}>
                    <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" />
                    <h1>{teacher.name}</h1>
                </div>
            ))}

            <ul>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Turma 1
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Turma 2
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Turma 3
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Turma 4
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher-group">
                        <button>
                            <TiGroup />
                        Turma 5
                    </button>
                    </Link>
                </li>
            </ul>
        </Container>
    )
};

export default Student;
