import React, { useState } from "react";
import { useSelector } from "react-redux";

const Table = (props) => {
    const [headerData, setHeaderData] = useState(props.headerData);
    const [bodyData, setBodyData] = useState(props.bodyData);
    const [mainTextColor, setMainTextColor] = useState(useSelector((store) => store.pdfData.mainTextColor))

    return (
        <div className="mt-[15rem]">
            <table style={{ width: "100%", textAlign: "center", color:`${mainTextColor}`}} className="whitespace-pre-wrap">
                <thead className="bg-[#F8F8F8] h-[39rem] leading-[1.44833] text-[12rem]">
                    <tr>
                        {headerData.map((item, index)=> (
                            <th key={index} style={{ width: `${item.width}`}} className="font-normal border-[1rem]">{item.content}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-[14rem]">
                    {bodyData.map((item, index) => (
                        <tr key={index} className="h-[40rem]">
                            <td className="border-[1rem]">{item.habit}</td>
                            <td className="border-[1rem]" >{item.time}</td>
                            <td className="border-[1rem]" >{item.detail}</td>
                            <td className="border-[1rem]" >{item.referCategory}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
