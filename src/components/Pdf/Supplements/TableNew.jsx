import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";

const TableNew = (props) => {
    const [tBody, setTBody] = useState(props.tBody || {});
    useEffect(() => {
        setTBody(props.tBody)
    },[props.tBody])

    return (
        <div className="mt-[10rem] w-[535rem] font">
            <table className="w-full font supplement pt-[10rem]">
                <thead>
                    <TableHeader/>
                </thead>
                <tbody>
                    {tBody.map((item, rowIndex) => (
                        <tr key={rowIndex} className={`h-[${item.trHeight || 30}rem] text-[9rem]`}>
                            {item.thContent && (<td rowSpan={item.rowSpan && item.rowSpan}>
                                <span className="font-bold">{item.thContent.main}</span>
                                <br/>
                                <span>{item.thContent.sub}</span>
                            </td>)}
                            <td className="text-center">{item.tdContent.gen}</td>
                            <td className="text-center flexs" style={{
                                        color:
                                        item.tdContent.danger !== 0
                                                ? "red"
                                                : "inherit"
                                    }}>{item.tdContent.danger}</td>
                            <td>{item.tdContent.description}</td>
                            <td className={`${item.tdContent.etcClassName && item.tdContent.etcClassName}`}>{item.tdContent.etc || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableNew;
