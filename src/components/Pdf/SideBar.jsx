import React from "react";
import Text from "./Text";

const SideBar = (props) => {
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
