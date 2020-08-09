import React from 'react';
import Person from '../../components/person';

//React router can pass 2 props to all components...match and location
//console.log(match) for example to see what info comes back
const PersonPage = ({ match }) => {

    //mock the data that needs to be fetched from an api
    const people = [
        {
            name: 'Alan',
            age: 38,
            personId: 0
        },
        {
            name: 'Joe',
            age: 35,
            personId: 1
        }

    ]

    return (
        <div>
            <h1>Welcome to the Person Page</h1>
            <Person person={people[match.params.personId]} />
        </div>
    )
}

export default PersonPage;
