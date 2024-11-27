import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cell = (props) => {
    const [borderColor, setBorderColor] = useState("border-[#C5C5C5]");

    useEffect(() => {
        if (props.borderStatus === 0) {
            setBorderColor("");
        } else if (props.borderStatus === 2) {
            setBorderColor("border-[#f00] border-[2rem]");
        } else {
            setBorderColor("border-[#C5C5C5] border-[1rem]");
        }
    }, [props]);

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    return (
        <div
            className={`${borderColor}`}
            style={{
                width: "82.5rem", // Equivalent to w-[82.5rem]
                height: "40rem", // Equivalent to h-[40rem]
                display: "flex", // Equivalent to flex
                alignItems: "center", // Equivalent to items-center
                justifyContent: "center", // Equivalent to justify-center
              }}
        >
            <p
                style={{
                    color: "#484F51",
                    fontSize: "12rem",
                    textAlign: "center",
                    lineHeight: "1.44833",
                    display: "inline-grid",
                    marginTop: `${renderedPdfFlag ? "-13" : "0"}rem`,
                }}
            >
                {props.content && props.content}
                <span
                    style={{
                        fontSize: "10rem", // Equivalent to text-[10rem]
                        lineHeight: "1.448", // Equivalent to leading-[1.448]
                        display: "inline-block", // Equivalent to inline-block
                        marginTop: "-1rem", // Equivalent to my-[-1rem]
                        marginBottom: "-1rem", // Equivalent to my-[-1rem]
                    }}
                >
                    {props.subContent1 && props.subContent1}
                </span>
                <span
                style={{
                    fontSize: "10rem", // Equivalent to text-[10rem]
                    lineHeight: "1.448", // Equivalent to leading-[1.448]
                    display: "inline-block",
                }}>
                    {props.subContent2 && props.subContent2}
                </span>
            </p>
        </div>
    );
};

export default Cell;
