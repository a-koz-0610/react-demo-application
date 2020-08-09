import React from 'react';
import People from '../../components/people';

const PeoplePage = () => {

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
        <div className={'page__container'}>
            <h1>The People of the People page</h1>
            <People people={people} />
        </div>
    )
}

export default PeoplePage;
