import React, { useEffect } from 'react';
import AbilityComponent from './AbilityComponent';

const Ability = (props) => {
    return (
        <div
            style={{
                width: `${props.width}rem`, 
                height: `${props.height}rem`,
                marginBottom: '30rem',
                position: 'relative'
            }}
        >
            <img src={props.imageURL} style={{width: '100%', height: '100%', position: 'absolute', top: 0}}/>
            {props.descriptions && props.descriptions.map((data, index) => (
                <AbilityComponent key={index} data={data} />
            ))}
        </div>
    );
};

export default Ability;
