import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const GeneInformationMiddle = (props) => {
    const { datas, geneName, level, description } = props;

    // Initial state setup for the data object
    const initialData = datas.reduce((acc, key) => ({ ...acc, [key]: "" }), {});
    const [data, setData] = useState(initialData);

    const flag = useSelector((state) => state.pdfData.geneInformationListData);

    // Fetch data from Redux store dynamically
    // const tempData = useSelector((state) => {
    //     const geneInformation = {};
    //     datas.forEach((key) => {
    //         geneInformation[key] = state.pdfData.geneInformationListData[key] || ""; // Default to empty string if not found
    //     });
    //     return geneInformation;
    // },  [datas, flag]);

    const tempData = useMemo(() => {
        const geneInformation = {};
        datas.forEach((key) => {
          geneInformation[key] = flag[key] || ""; // Default to empty string if not found
        });
        return geneInformation;
      }, [datas, flag]);

    useEffect(() => {
        // Update state whenever tempData changes
        setData(tempData);
    }, [flag]); // Dependency on the flag to trigger updates when the Redux store changes

    return (
        <div className="font text-[#484F51] mb-[10rem]">
            <table className="geneInfo text-[12rem] w-[535rem] mb-[10rem]">
                <thead>
                    <tr>
                        <th>遺伝子</th>
                        <th>rsID / Gene Type</th>
                        <th>変異の大きさ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{geneName}</td>
                        <td>
                            {datas.map((item, index) => (
                                <p key={index}>
                                    {item} &nbsp; &nbsp; {data[item] || "Not defined"} {/* Safely access data */}
                                </p>
                            ))}
                        </td>
                        <td>{level}</td>
                    </tr>
                </tbody>
            </table>

            <p className="w-[525rem] h-[70rem] text-[10rem] leading-[1.448] whitespace-pre-line">{description}</p>
        </div>
    );
};

export default GeneInformationMiddle;
