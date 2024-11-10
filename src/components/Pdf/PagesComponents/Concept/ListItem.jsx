import React from "react";

const ListItem = (props) => {
    return (
        <li className="list-disc whitespace-pre-wrap" style={props.data.liStyle || {}}>
                {props.data?.content || "No content"}
        </li>
    );
};

export default ListItem;