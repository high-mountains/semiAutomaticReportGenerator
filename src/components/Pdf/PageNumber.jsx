import React, { useEffect, useState } from "react";
import pdfJson from "../../utils/dummyPdf.json";

const PageNumber = (props) => {
    const [bottom, setBottom] = useState(15);

    useEffect(() => {
        setBottom(props.bottom);
    }, []);
    return (
        <div style={{ backgroundColor: "#F8F8F8" }}>
            <p
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "9rem",
                    lineHeight: "1.4477",
                    marginBottom: `${bottom}rem`,
                    color: `${pdfJson.mainTextColor}`,
                }}
            >
                {props.children}
            </p>
        </div>
    );
};

export default PageNumber;
