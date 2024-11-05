import { useEffect, useState } from "react";
import pdfData from "../../utils/dummyPdf.json";
import "./sidebarStyle.css";

const Text = (props) => { 
    const [styleProps, setStyleProps] = useState({
        bgColor: "",
        textColor: "",
        fontSize: "",
        textContent: "",
        className: "",
        sidebarColor: "",
        style: {},
    });

    useEffect(() => {
        setStyleProps({
            textContent: props.textContent,
            textColor: props.textColor,
            bgColor: props.bgColor,
            fontSize: props.fontSize,
            className: props.className,
            sidebarColor: props.sidebarColor,
            style: props.style || {}, // Default to an empty object if props.style is not provided
        });
        // console.log("sidebarCOlor in Final==>", sidebarColor);
    }, []); // Listen for changes in the props object

    const { textContent, textColor, bgColor, fontSize, className, sidebarColor, style } = styleProps;

    return (
        <>
            {/* Using inline styles for colors */}

            {props.sidebar ? props.sidebar && 
                <>
                    <div className="flex flex-row items-center">
                        <span style={{backgroundColor: `${sidebarColor}`, paddingLeft:"5rem", paddingTop:"30rem", marginRight:"8rem"}}/>
                        <p
                            style={{
                                ...style, // Spread the incoming style prop
                                backgroundColor: bgColor ? `${bgColor}` : undefined,
                                color: `${textColor || pdfData.mainTextColor}`,
                                fontSize: fontSize ? `${fontSize}rem` : "16rem",
                            }}
                            className={`font font-bold ${className}`}
                        >
                            {textContent}
                        </p>
                    </div>
                </> : <p
                        style={{
                            ...style, // Spread the incoming style prop
                            backgroundColor: bgColor ? `${bgColor}` : undefined,
                            color: `${textColor || pdfData.mainTextColor}`,
                            fontSize: fontSize ? `${fontSize}rem` : "16rem",
                        }}
                        className={`font ${className}`}
                        >
                            {textContent}
                        </p>
            }

            {/* {props.sidebar && <span style={{backgroundColor: `${sidebarColor}`, paddingLeft:"5rem", paddingTop:"30rem"}}/>} */}

            {props.children && <div className={`font ${className}`}>{props.children}</div>}
        </>
    );
};

export default Text;
