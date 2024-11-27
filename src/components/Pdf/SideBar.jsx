import React from "react";
import Text from "./Text";

const SideBar = ({ bgColor, textColor, fontSize, textContent, className, style }) => {

    const styles = {
        container: {
            width: "5rem",
            height: "30rem",
        },
    };

    return (
        <div style={styles.container}>
            <div className="sideBar"></div>
            <Text
                bgColor={bgColor}
                textColor={textColor}
                fontSize={fontSize}
                textContent={textContent}
                className={className}
                style={style}
            />
        </div>
    );
};

export default SideBar;
