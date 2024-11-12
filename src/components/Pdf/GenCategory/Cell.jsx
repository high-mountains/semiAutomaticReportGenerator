import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cell = (props) => {
    const [color, setColor] = useState(useSelector((store) => store.pdfData.mainTextColor))
    const [borderColor, setBorderColor] = useState("border-[#C5C5C5]");
    
    useEffect(() => {
        if (props.borderStatus === 0) {
            setBorderColor("")
        } else if (props.borderStatus === 2) {
            setBorderColor("border-[#f00] border-[2rem]")
        } else {
            setBorderColor("border-[#C5C5C5] border-[1rem]")
        }
    }, [props]);
    
    return (
        <div className={`w-[82.5rem] h-[40rem] flex items-center justify-center ${borderColor} text-[${color}]`}>
            <p className={`text-[${color}] text-[12rem] text-center leading-[1.44833] inline-grid`}>
                {props.content && props.content}
                <span className='text-[10rem] leading-[1.448] inline-block my-[-1rem]'>
                    {props.subContent1 && props.subContent1}
                </span>
                <span className='text-[10rem] leading-[1.448] inline-block'>
                    {props.subContent2 && props.subContent2}
                </span>
            </p>
        </div>
    );
};

export default Cell;