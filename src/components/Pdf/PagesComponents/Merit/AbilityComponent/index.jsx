import React, { useState, useEffect } from 'react';
import Text from '../../../Text';
import pdfData from "../../../../../utils/dummyPdf.json";

// cos

const AbilityComponent = (props) => {
    
    // const [data, setData] = useState(initialData);
    const [textColor, setTextColor] = useState(pdfData.mainTextColor);

    // useEffect(() => {
    //     setData({...props.data});
    // }, [props.data]);

    
    
    return (
        <>
            <div
                className={`absolute w-[${props.data.wrapperWidth}] ${props.data.etcClassName ? props.data.etcClassName : ""}`}
                style={{ ...props.data.etcStyle, ...props.data.posInfo }}
            >
                <Text
                    textContent={props.data.heading}
                    fontSize={16}
                    className={"font-bold"}
                    textColor={textColor}
                />
                {/* {data.heading} */}
                <Text
                    textContent={props.data.content}
                    textColor={textColor}
                    fontSize={props.data.fontSize}
                    className={`whitespace-pre-line leading-[${props.data.contentLineHeight}]`}
                />
            </div>
        </>
    );
};

export default AbilityComponent;