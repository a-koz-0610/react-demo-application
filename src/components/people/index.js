import React from 'react';
import Person from '../person';

const People = ({ people }) => {

    return (
        people.map(person => {
            return (
                <Person person={person} key={person.personId} />
            )
        })
    )
}

export default People;
