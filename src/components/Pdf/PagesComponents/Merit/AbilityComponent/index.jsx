import React, { useState, useEffect } from 'react';
import Text from '../../../Text';
import pdfData from "../../../../../utils/dummyPdf.json";
import { color } from 'highcharts';

const AbilityComponent = (props) => {
    
    const [textColor, setTextColor] = useState(pdfData.mainTextColor);

    return (
        <>
            <div
                className={`absolute w-[${props.data.wrapperWidth}] ${props.data.etcClassName ? props.data.etcClassName : ""}`}
                style={{ ...props.data.etcStyle, ...props.data.posInfo }}
            >
                <Text
                    textContent={props.data.heading}
                    textColor={textColor}
                    fontSize={16}
                    className={"font-bold whitespace-pre-wrap"}
                />
                <Text
                    textContent={props.data.content}
                    textColor={textColor}
                    fontSize={props.data.fontSize}
                    className={`whitespace-pre-wrap ${props.data.contentClassName}`}
                    style={{
                        // lineHeight: `${props.contentLineHeight}`
                    }}
                />
            </div>
        </>
    );
};

export default AbilityComponent;