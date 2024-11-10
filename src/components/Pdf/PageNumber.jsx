import React, { useEffect, useState } from "react";
import pdfJson from "../../utils/dummyPdf.json";

const PageNumber = (props) => {
    const [bottom, setBottom] = useState(15);

    useEffect(() => {
        setBottom(props.bottom)
    }, [])
    return (
        <div className="bg-[#F8F8F8]">
            <p className="absolute bottom-0 left-2/4 translate-x-[-50%] text-[9rem] leading-[1.4477]"
                style={{
                    marginBottom: `${bottom}rem`,
                    color: `${pdfJson.mainTextColor}` 
            }}>{props.children}</p>
        </div>
    )
}

export default PageNumber;
