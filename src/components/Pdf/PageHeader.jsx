import { useEffect, useState } from "react";
import pdfData from "../../utils/dummyPdf.json"

const PageHeader = (props) => {
    const [subtitleColor, setSubColor] = useState("");
    const [mainTitleColor, setMainTitleColor] = useState("");

    useEffect(() => {
        setSubColor(pdfData.mainColor);
        setMainTitleColor(pdfData.mainTextColor);

        {props.subTitlecolor && setSubColor(props.subTitlecolor)}
        {props.mainTitlecolor && setMainTitleColor(props.mainTitlecolor)}
    }, [])

    return(
        <>
        <div className="flex flex-col font-bold mb-[30rem]">
            <h6
                style={{
                    fontSize: "14rem",
                    lineHeight: 1.25,
                    color: `#${subtitleColor}`
                }}
            >{props.subtitle}</h6>
            <h1 className="font-bold"
                style={{
                    fontSize: "32rem",
                    lineHeight: 1.25,
                    color: `#${mainTitleColor}`
            }}>{props.mainTitle}</h1>
        </div>
        </>
    )
}

export default PageHeader;