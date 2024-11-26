import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);
    return (
        <>
            {props.sidebar ? props.sidebar && 
                <>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start', ...containerStyle}}>
                        <span style={{backgroundColor: `${sidebarColor || "#00C3D0"}`, paddingLeft:"5rem", paddingTop:`${sidebarHeight || "30rem"}`, marginRight:"8rem"}}></span>
                        <p
                            style={{
                                backgroundColor: bgColor ? `${bgColor}` : undefined,
                                color: `${textColor || pdfData.mainTextColor}`,
                                fontSize: fontSize ? `${fontSize}rem` : "16rem",
                                fontWeight: 'bold',
                                whiteSpace: 'pre-line',
                                marginTop: `${ renderedPdfFlag ? '-4' : '3.415' }rem`,  //here is for jspdf module
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
