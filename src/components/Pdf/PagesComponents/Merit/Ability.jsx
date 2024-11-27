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
            {
                props.detoxStatus ? <img src={props.imageURL} style={{width: '258rem', height: '315rem', position: 'absolute', top: 0, left: '125rem'}}/> : <img src={props.imageURL} style={{width: '100%', height: '100%', position: 'absolute', top: 0}}/>
            }
            {props.descriptions && props.descriptions.map((data, index) => (
                <AbilityComponent key={index} data={data} />
            ))}
        </div>
    );
};

export default Ability;
