import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import pdfData from "../../../../utils/dummyPdf.json";

const QualitySection = (props) => {
    const [mainTextColor, setMainTextColor] = useSelector(
        (store) => store.pdfData.mainTextColor
    );

    // Styles previously handled by styled-components
    const qualitySectionWrapperStyle = {
        width: props.oneColumn ? "100%" : props.eachUlWidth || "250rem",
        gap: props.inContainerGap || "10rem",
        display: "flex", // Assuming flex display based on usage of 'gap'
        flexDirection: "column", // Adjust as needed (e.g., 'row' if meant for horizontal layout)
        ...props.wrapperStyle, // Merging any additional styles passed via props
    };

    const ulStyle = {
        marginTop: "10rem",
        fontSize: "14rem",
        lineHeight: "1.42857",
        ...props.ulStyle,
    };

    return (
        <div style={qualitySectionWrapperStyle} className={`text-[${pdfData.mainTextColor}]`}>
            <ul style={ulStyle} className={`text-[${mainTextColor}] list-none list-inside`}>
              {props.qualityArray.length && props.qualityArray.map((item, index) => (
                <ListItem key={index} data={item} />
              ))}
            </ul>
        </div>
    );
};

QualitySection.propTypes = {
    oneColumn: PropTypes.bool,
    eachUlWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inContainerGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wrapperStyle: PropTypes.object,
    ulStyle1: PropTypes.object,
    ulStyle2: PropTypes.object,
    qualities1: PropTypes.array,
    qualities2: PropTypes.array,
};

export default QualitySection;
