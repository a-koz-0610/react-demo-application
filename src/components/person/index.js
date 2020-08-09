import React from 'react';

const Person = ({ person }) => {

    return (
        <div>
            <h3>Name: {person.name}</h3>
            <h4>Age: {person.age}</h4>
        </div>
    )
}

export default Person;
