import React, { useEffect } from 'react';
import AbilityComponent from './AbilityComponent';

const Ability = (props) => {
    // useEffect(() => {
    //     console.log("props.description==>", props.descriptions);
    // }, []);

    return (
        <div
            className="relative mb-[30rem]"
            style={{
                width: `${props.width}rem`, 
                height: `${props.height}rem`
            }}
        >
            <img src={props.imageURL} alt="" className="w-full h-full absolute top-0" />
            {props.descriptions && props.descriptions.map((data, index) => (
                <AbilityComponent key={index} data={data} />
            ))}
        </div>
    );
};

export default Ability;
