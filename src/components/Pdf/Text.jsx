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
        sidebarHeight: "",
        style: {},
        containerStyle: {}
    });

    useEffect(() => {
        setStyleProps({
            textContent: props.textContent,
            textColor: props.textColor,
            bgColor: props.bgColor,
            fontSize: props.fontSize,
            className: props.className,
            sidebarColor: props.sidebarColor,
            sidebarHeight: props.sidebarHeight,
            style: props.style || {}, // Default to an empty object if props.style is not provided
            containerStyle: props.containerStyle,
        });
    }, [props]); // Listen for changes in the props object

    const { textContent, textColor, bgColor, fontSize, className, sidebarColor, sidebarHeight, style, containerStyle } = styleProps;

    return (
        <>
            {/* Using inline styles for colors */}

            {props.sidebar ? props.sidebar && 
                <>
                    <div className="flex flex-row items-center" style={{...containerStyle}}>
                        <span style={{backgroundColor: `${sidebarColor || "#00C3D0"}`, paddingLeft:"5rem", paddingTop:`${sidebarHeight || "30rem"}`, marginRight:"8rem"}}/>
                        <p
                            style={{
                                backgroundColor: bgColor ? `${bgColor}` : undefined,
                                color: `${textColor || pdfData.mainTextColor}`,
                                fontSize: fontSize ? `${fontSize}rem` : "16rem",
                                ...style, // Spread the incoming style prop
                            }}
                            className={`font font-bold whitespace-pre-line ${styleProps.className}`}
                        >
                            {textContent}
                        </p>
                    </div>
                </> : <p
                        style={{
                            backgroundColor: bgColor ? `${bgColor}` : undefined,
                            color: `${textColor || pdfData.mainTextColor}`,
                            fontSize: fontSize ? `${fontSize}rem` : "16rem",
                            ...style, // Spread the incoming style prop
                        }}
                        className={`font ${styleProps.className}`}
                        dangerouslySetInnerHTML={{ __html: textContent }}
                        >
                        </p>
            }

            {props.children && <div className={`font ${className}`}>{props.children}</div>}
        </>
    );
};

export default Text;
