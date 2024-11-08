import React, { useState } from 'react';
import Text from '../../../Text'

const MeritComponent = (props) => {
    // if(props.contentStyle) {
    //     console.log("props.contentStyle====>", props)
    // };

    const [commonStyle, setCommonStyle] = useState(props.commonStyle);
    const [inCommonStyle, setInCommonStyle] = useState(props.inCommonStyle);
    const [titleStyle, setTitleStyle] = useState(props.titleStyle);
    const [contentStyle, setContentStyle] = useState(props.contentStyle); // Here means that ***child*** of data object in merit component not ***Descendants***
                                                                            // That's different from the Text component's style object
    return (
        <div className='w-[247.5rem] flex flex-col gap-[8rem] mt-[15rem]'>
            {/* {props.data.title} */}
            <div className='bg-[#F8F8F8] w-full h-[29rem] rounded-[5rem] flex flex-col items-center justify-center'>
                {/* <p className='font-bold text-[16rem] text-center'>{props.tag}</p> */}
                <Text
                    textContent={props.tag}
                    className={"font-bold text-[16rem] text-center"}
                />
            </div>

            {/* The commonStyle is for control the gap instead of defaul value 8rem as in 5rem */}
            <div className='w-full flex flex-col gap-[8rem]' style={commonStyle}>  
                {props.data.map((item, index) => (
                        <div key={index} className="w-full flex flex-col pl-[5rem] pr-[2.5rem] gap-[3rem]" style={inCommonStyle}>
                            <Text
                                textContent={item.title}
                                fontSize={12}
                                className={"font-bold"}
                                // style={item.titleStyle && item.titleStyle}
                                style={{ ...(item.titleStyle || {}), ...titleStyle }}
                            />
                            <Text
                                textContent={item.content}
                                // fontSize={item.fontSize ? item.fontSize : 12}
                                fontSize={12}
                                // style={item.contentStyle && item.contentStyle}
                                style={{ ...(item.contentStyle || {}), ...contentStyle }}
                                // style={{color: "red"}}
                            />
                        </div>
                ))}
            </div>
        </div>
    );
};

export default MeritComponent;