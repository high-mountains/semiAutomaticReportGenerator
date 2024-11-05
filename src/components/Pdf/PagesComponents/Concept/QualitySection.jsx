import React from 'react';

function QualitySection(props) {

    return (
        <div className={props.oneColumn ? 'w-full' : 'w-[250rem]'} style={props.wrapperStyle && props.wrapperStyle}>
            <ul className='list-disc list-inside' >
                {props.qualityArray.map((item, index)=> {
                    return <li key={index} className={`text-[14rem] ${props.className}`} style={props.liStyle && props.liStyle}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default QualitySection;