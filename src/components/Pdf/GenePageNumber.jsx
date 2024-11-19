import React, { useEffect, useState } from "react";
import pdfJson from "../../utils/dummyPdf.json";

const GenePageNumber = (props) => {
    const [bottom, setBottom] = useState(15);

    useEffect(() => {
        setBottom(props.bottom)
    }, [])
    return (
        <div className="bg-[#F8F8F8]  text-[9rem] text-[#484F51]">
            <p className="absolute bottom-[39rem] ">※本項目は、科学的研究がまだ充分に進んでいない遺伝子に基づく情報であり、参考情報として提供しています。</p>
            <p className="absolute bottom-0 left-2/4 translate-x-[-50%] leading-[1.4477]"
                style={{
                    marginBottom: `${bottom}rem`,
                    // color: `${pdfJson.mainTextColor}` 
            }}>{props.children}</p>
        </div>
    )
}

export default GenePageNumber;
