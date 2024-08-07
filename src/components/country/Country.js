import React from 'react';

const Country = ({country, capital}) => {
    return (
        <div>
            <p>country: {country}</p>
            <p>capital: {capital}</p>
        </div>
    );
};

export default Country;