import React from 'react';

import People from '../../components/people';

const PeopleScreen = ({ people }) => {

    return (
        <div className={'page__container'}>
            <h1>The People of the People page</h1>
            <People people={people} />
        </div>
    )
}

export default PeopleScreen;
