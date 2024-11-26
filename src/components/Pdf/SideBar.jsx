import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Text from "./Text";

const SideBar = (props) => {
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
        console.log("pdfFlag===>", pdfFlag);
    }, [pdfFlag]);

    useEffect(() => {
        console.log("sidebar");
    },[])

    return (
        <div style={{ width: "5rem", height: "30rem" }}>
            <div className="sideBar"></div>
            <Text
                bgColor={props.bgColor}
                textColor={props.textColor}
                fontSize={props.fontSize}
                textContent={props.textContent}
                className={props.className}
                style={props.style}
            />
        </div>
    );
};

export default SideBar;
