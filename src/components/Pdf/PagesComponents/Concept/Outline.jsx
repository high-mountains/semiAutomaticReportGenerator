import React from 'react';
import Text from '../../Text';

function Outline(props) {
    return (
        <div className='flex flex-row gap-[13rem] my-[30rem] items-center justify-center' >
            <div className='w-[150rem] h-[150rem]'>
                <img src={props.imageURL} alt="" className='w-full h-full'/>
            </div>
            <div className='w-[360rem] flex flex-col justify-center'>
                <Text
                    textContent={props.concept}
                    className={"text-justify mb-[1em]"}
                />
                <Text
                    textContent={props.description}
                    className={"text-justify"}
                />
            </div>
        </div>
    );
}

export default Outline;