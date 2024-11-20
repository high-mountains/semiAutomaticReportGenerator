import React, { useEffect, useState } from "react";

const Table = (props) => {
    const [headerData, setHeaderData] = useState(props.headerData);
    const [bodyData, setBodyData] = useState(props.bodyData);
    useEffect(() => {
        setBodyData(props.bodyData)
    }, [props]);
    
    return (
        <div className="mt-[15rem]">
            <table style={{ width: "100%", textAlign: "center", color:"#484F51"}} className="whitespace-pre-wrap">
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
                            <td className="border-[1rem]">{item.Lifestyle}</td>
                            <td className="border-[1rem]" >{item.When}</td>
                            <td className="border-[1rem]" >{item.Explanation}</td>
                            <td className="border-[1rem]" >{item.Categories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
