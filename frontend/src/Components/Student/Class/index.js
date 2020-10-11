import React, { useState } from 'react';
import { GrAchievement } from 'react-icons/gr';
import { GiAchievement } from 'react-icons/gi';
import { ImBook } from 'react-icons/im';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Student() {

    const [students] = useState([
        {
            name: "Henrique",
            matter: "Publicidade e Propaganda",
            achievement: [<GiAchievement size="20" />, <GrAchievement size="20" />],
            schoolSubjects: [
                { 1: 'Portuguese' },
                { 2: 'Spanish' },
                { 3: 'Biology' },
                { 4: 'Science' },
                { 5: 'Technology' },
                { 6: 'History' }
            ]
        },
    ]);

    return (
        <Container>
            {students.map(student => (
                <div key={student}>
                    <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="" />
                    <h1>{student.name}</h1>
                    <p>{student.achievement}</p>
                </div>
            ))}

            <ul>
                <li>
                    <Link to="/student-group">
                        <button>
                            <ImBook />
                        Portugueses
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/student-group">
                        <button>
                            <ImBook />
                        Spanish
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/student-group">
                        <button>
                            <ImBook />
                        Spanish
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/student-group">
                        <button>
                            <ImBook />
                        Spanish
                    </button>
                    </Link>
                </li>
                <li>
                    <Link to="/student-group">
                        <button>
                            <ImBook />
                        Spanish
                    </button>
                    </Link>
                </li>
            </ul>
        </Container>
    )
};

export default Student;
