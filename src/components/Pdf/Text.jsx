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
            style: props.style || {},
            containerStyle: props.containerStyle
        });
    }, [props]);

    const { textContent, textColor, bgColor, fontSize, className, sidebarColor, sidebarHeight, style, containerStyle } = styleProps;

    return (
        <>
            {props.sidebar ? props.sidebar && 
                <>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', ...containerStyle}}>
                        <span style={{backgroundColor: `${sidebarColor || "#00C3D0"}`, paddingLeft:"5rem", paddingTop:`${sidebarHeight || "30rem"}`, marginRight:"8rem"}}/>
                        <p
                            style={{
                                backgroundColor: bgColor ? `${bgColor}` : undefined,
                                color: `${textColor || pdfData.mainTextColor}`,
                                fontSize: fontSize ? `${fontSize}rem` : "16rem",
                                fontWeight: 'bold',
                                whiteSpace: 'pre-line',
                                ...style
                            }}
                            className={`font ${styleProps.className}`}
                        >
                            {textContent}
                        </p>
                    </div>
                </> : <p
                        style={{
                            backgroundColor: bgColor ? `${bgColor}` : undefined,
                            color: `${textColor || pdfData.mainTextColor}`,
                            fontSize: fontSize ? `${fontSize}rem` : "16rem",
                            ...style
                        }}
                        className={`font ${styleProps.className}`}
                        dangerouslySetInnerHTML={{ __html: textContent }}
                        >
                        </p>
            }
            {props.children && <div className={`${className}`} style={{fontSize: '16px'}}>{props.children}</div>}
        </>
    );
};

export default Text;
