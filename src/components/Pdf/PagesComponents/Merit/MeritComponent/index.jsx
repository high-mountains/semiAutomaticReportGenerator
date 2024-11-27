import React, { useState, useEffect } from "react";
import Text from "../../../Text";
import { useSelector } from "react-redux";

const MeritComponent = (props) => {
    const [textColor, setTextColor] = useState(
        useSelector((store) => store.pdfData.mainTextColor)
    );

    const [commonStyle, setCommonStyle] = useState(props.commonStyle || {});
    const [inCommonStyle, setInCommonStyle] = useState(
        props.inCommonStyle || {}
    );
    const [titleStyle, setTitleStyle] = useState(props.titleStyle || {});
    const [contentStyle, setContentStyle] = useState(props.contentStyle || {}); // Here means that ***child*** of data object in merit component not ***Descendants***
    // That's different from the Text component's style object

    const [wrapperStyle, setWrapperStyle] = useState(props.wrapperStyle || {});

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    return (
        <div
            className="w-[247.5rem] flex flex-col gap-[8rem] mt-[15rem]"
            style={wrapperStyle}
        >
            <div className="bg-[#F8F8F8] w-full h-[29rem] rounded-[5rem] flex flex-col items-center justify-start">
                <Text
                    textContent={props.tag}
                    className={"font-bold text-[16rem] text-center"}
                    style={{
                        marginTop: `${renderedPdfFlag ? "-5" : "3"}rem`,
                    }}
                />
            </div>

            {/* The commonStyle is for control the gap instead of defaul value 8rem as in 5rem */}
            {/* <div className='w-full flex flex-col gap-[8rem]' style={commonStyle || {}}>   */}
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8rem",
                    ...commonStyle,
                }}
                // className="w-full flex flex-col gap-[8rem]"
            >
                {props.data.map((item, index) => (
                    <div
                        key={index}
                        style={inCommonStyle}
                        className="w-full flex flex-col gap-[3rem] pl-[5rem] pr-[2.5rem]"
                    >
                        <Text
                            textContent={item.title}
                            textColor={textColor}
                            fontSize={12}
                            className={"font-bold leading-[1.44833]"}
                            style={{
                                ...(item.titleStyle || {}),
                                ...titleStyle,
                            }}
                        />
                        <Text
                            textContent={item.content}
                            textColor={textColor}
                            fontSize={12}
                            className={"leading-[1.44833]"}
                            style={{
                                ...(item.contentStyle || {}),
                                ...contentStyle,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeritComponent;
