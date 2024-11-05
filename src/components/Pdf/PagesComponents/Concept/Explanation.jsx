import React, { useEffect, useState } from 'react';
import Text from "../../Text"

const Explanation = (props) => {
    const [gap, setGap] = useState(10);
    
    useEffect(() => {
        {props.gap ? setGap(props.gap * 1.0): setGap(10)}
        // console.log("sidebarColor in Explanation==>", props.sidebarColor)

        // console.log("props.sidebarColor==>", props.sidebarColor);
        
    }, [props]);

    return (
        <div className='flex flex-col my-[30rem] gap-[10rem]'>
            <Text
                sidebar={1}
                sidebarColor={props.sidebarColor}
                textContent={props.question}
            />
            <Text
                textContent={props.answer}
                fontSize={14}
                className={`font-normal whitespace-pre-wrap w-[535rem] ${props.className}`}
            />
        </div>
    );
}

export default Explanation;