import React from 'react';
import Text from '../../../Text'

const MeritComponent = (props) => {
    return (
        <div className='w-[247.5rem] flex flex-col gap-[8rem] mt-[15rem]'>
            {/* {props.data.title} */}
            <div className='bg-[#F8F8F8] w-full h-[29rem] rounded-[5rem]'><p className='font-bold text-[16rem] text-center'>{props.tag}</p></div>
            <div className='w-full flex flex-col gap-[8rem]'>
                {props.data.map((item, index) => {
                    return <>
                        <div className='w-full flex flex-col gap-[3rem] pl-[5rem] pr-[2.5rem]' key={index}>
                            <Text
                                textContent={item.title}
                                fontSize={12}
                                className={"font-bold"}
                            />
                            <Text
                                textContent={item.content}
                                fontSize={12}
                            />
                        </div>
                    </>
                })}
            </div>
        </div>
    );
};

export default MeritComponent;