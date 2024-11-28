import React from "react";

const ListItem = (props) => {
    const textContent = props.data?.content || "No content";

    return (
        <li
            className="whitespace-pre-wrap flex flex-row items-start"
            style={{ color: "#484F51", ...props.data.liStyle }}
            dangerouslySetInnerHTML={{ __html: textContent }}
        >
        </li>
    );
};

export default ListItem;
