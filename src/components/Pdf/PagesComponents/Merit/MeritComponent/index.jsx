import React from 'react';
import Text from '../../../Text'

const MeritComponent = (props) => {
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
            <div className='w-full flex flex-col gap-[8rem]'>
                {props.data.map((item, index) => (
                        <div key={index} className={`w-full flex flex-col pl-[5rem] pr-[2.5rem] ${props.gap ? "gap-[2rem]": "gap-[3rem]"}`}>
                            <Text
                                textContent={item.title}
                                fontSize={12}
                                className={"font-bold"}
                            />
                            <Text
                                textContent={item.content}
                                fontSize={item.fontSize ? item.fontSize : 12}
                                className={`${item.className}`}
                            />
                        </div>
                ))}
            </div>
        </div>
    );
};

export default MeritComponent;