import React from 'react';
import { Link } from 'react-router-dom';

const Person = ({ person }) => {
    return (
        <div>
            <Link to={`/people/${person.slug}`}>{person.name}</Link>
            <h4>Age: {person.age}</h4>
        </div>
    )
}

export default Person;
