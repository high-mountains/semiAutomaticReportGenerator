import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PageHeader = (props) => {
    // Retrieve state values using useSelector at the top level
    const mainColor = useSelector(state => state.pdfData.mainColor);
    const mainTextColor = useSelector(state => state.pdfData.mainTextColor);

    // Initialize state with values from Redux
    const [subtitleColor, setSubColor] = useState(mainColor);
    const [mainTitleColor, setMainTitleColor] = useState(mainTextColor);
    const [mainTitleStyle, setMainTitleStyle] = useState(props.mainTitleStyle || {});
    
    return (
        <div className="flex flex-col font-bold mb-[30rem]" style={props.containerStyle}>
            <h6
                className="text-[14rem]"
                style={{
                    lineHeight: 1.44785,
                    color: subtitleColor,
                    fontSize: props.subFontSize ? `${props.subFontSize}rem` : "inherit"
                }}
            >
                {props.subtitle}
            </h6>
            <h1
                className="font-bold"
                style={{
                    fontSize: props.mainFontSize ? `${props.mainFontSize}rem` : "32rem",
                    lineHeight: 1.25,
                    marginBottom: "-3rem",
                    color: mainTitleColor,
                    ...mainTitleStyle
                }}
            >
                {props.mainTitle}
            </h1>
        </div>
    );
}

export default PageHeader;
