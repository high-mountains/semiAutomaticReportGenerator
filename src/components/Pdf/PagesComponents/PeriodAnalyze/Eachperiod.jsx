import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import Text from '../../Text';

const Eachperiod = (props) => {
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    return (
        <div className='flex flex-row items-start gap-[10rem] py-[10rem] px-[4.5rem]'
            style={props.style && props.style}>
            <div className={`w-[60rem] h-[70rem] ${renderedPdfFlag ? "mt-[7rem]" : ' '}mt-[7rem]`}>
                <img src={props.imgURL} alt=""  className="w-full h-full"/>
            </div>
                <Text
                    textContent={props.sentences}
                    fontSize={12}
                    className={"text-justify w-[456rem]"}
                    style={{
                        lineHeight:1.448
                    }}
                />
        </div>
    );
};

export default Eachperiod;