import React from "react";

const Table = (props) => {
    return (
        <div className="mt-[10rem] w-[535rem]">
            <table className="w-full font supplement pt-[10rem]">
                <thead>
                    <tr>
                        {props.tHeader.headerContent.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.tBody.map((item, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`h-[${item.trHeight || 31}rem] text-[9rem]`}
                        >
                            {/* Conditional rendering for first cell if thContent exists */}
                            {item.thContent && (
                                <td rowSpan={item.rowSpan || 1}>
                                    <span className="font-bold">
                                        {item.thContent.main}
                                    </span>
                                    <br />
                                    <span>{item.thContent.content}</span>
                                </td>
                            )}
                            {item.tdContent.map((tdItem, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={colIndex === 0 || colIndex === 1 ? "text-center" : ""}
                                    style={{
                                        color:
                                            colIndex === 1 && tdItem.tag !== 0
                                                ? "red"
                                                : "inherit"
                                    }}
                                >
                                    {tdItem.tag}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
