import React from "react";

const ListItem = (props) => {
    const textContent = props.data?.content || "No content";

    return (
        <li className="list-disc whitespace-pre-wrap" style={props.data.liStyle || {}} dangerouslySetInnerHTML={{ __html: textContent }}>
        </li>
    );
};

export default ListItem;