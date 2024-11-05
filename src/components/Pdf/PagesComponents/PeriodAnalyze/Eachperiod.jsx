import React from 'react';
import Text from '../../Text';

const Eachperiod = (props) => {
    return (
        <div className='flex flex-row items-start gap-[10rem] py-[10rem] px-[4.5rem]'
            style={props.style && props.style}>
            <div className="w-[60rem] h-[70rem]">
                <img src={props.imgURL} alt=""  className="w-full h-full"/>
            </div>
            {/* <div> */}
                <Text
                    textContent={props.sentences}
                    fontSize={10}
                    className={"text-justify w-[456rem]"}
                    style={{
                        lineHeight:1.448
                    }}
                />
            {/* </div> */}
        </div>
    );
};

export default Eachperiod;