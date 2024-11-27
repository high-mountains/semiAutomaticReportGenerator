import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pdfData from "../../../utils/dummyPdf.json"

const Cell = (props) => {
    const color = pdfData.mainTextColor;
    const [borderColor, setBorderColor] = useState("border-[#C5C5C5]");
    
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

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
        <div className={`w-[82.5rem] h-[50rem] flex items-center justify-center ${borderColor} text-[${color}]`}>
            <p
            style={{
                color: "#484F51",
                fontSize: "12rem",
                textAlign: "center",
                lineHeight: "1.44833",
                display: "inline-grid",
                marginTop: `${renderedPdfFlag ? "-13" : "0"}rem`,
            }}
            >
                {props.content && props.content}
                <span className='text-[10rem] leading-[1.448] inline-block my-[-1rem]'>
                    {props.subContent1 && props.subContent1}
                </span>
                <span className='text-[10rem] leading-[1.448] inline-block tracking-[-0.3rem]'>
                    {props.subContent2 && props.subContent2}
                </span>
            </p>
        </div>
    );
};

export default Cell;