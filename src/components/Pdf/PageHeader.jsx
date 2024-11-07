import { useEffect, useState } from "react";
import pdfData from "../../utils/dummyPdf.json";
import { useSelector } from "react-redux";

const PageHeader = (props) => {
    const [subtitleColor, setSubColor] = useState(useSelector(state => state.pdfData.mainColor));
    const [mainTitleColor, setMainTitleColor] = useState(useSelector(state => state.pdfData.mainTextColor));

    return(
        <>
            <div className="flex flex-col font-bold mb-[30rem]">
                <h6
                    style={{
                        fontSize: "14rem",
                        lineHeight: 1.44785,
                        color: `${subtitleColor}`,
                    }}
                >{props.subtitle}</h6>
                <h1 className="font-bold"
                    style={{
                        fontSize: "32rem",
                        lineHeight: 1.25,
                        marginBottom: "-3rem",
                        color: `${mainTitleColor}`
                }}>{props.mainTitle}</h1>
        </div>
        </>
    )
}

export default PageHeader;