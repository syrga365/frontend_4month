import React from 'react';

const Course = ({direction, language}) => {
    return (
        <div>
            <p>direction: {direction}</p>
            <p>language: {language}</p>
        </div>
    );
};

export default Course;