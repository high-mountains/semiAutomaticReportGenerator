import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const GeneInformationMiddle = (props) => {
    const { datas, geneName, level, description } = props;
    const initialData = datas.reduce((acc, key) => ({ ...acc, [key]: "" }), {});
    const [data, setData] = useState(initialData);
    const flag = useSelector((state) => state.pdfData.geneInformationListData);
    
    const tempData = useMemo(() => {
        const geneInformation = {};
        datas.forEach((key) => {
          geneInformation[key] = flag[key] || "";
        });
        return geneInformation;
      }, [datas, flag]);

    useEffect(() => {
        setData(tempData);
    }, [flag]);

    return (
        <div className="" style={{ fontSize: '16px', marginBottom: '10rem', color: '#484F51',}}>
            <table className="geneInfo" style={{ marginBottom: '10rem' , fontSize: '12rem', width: '535rem'}}>
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
                                    {item} &nbsp; &nbsp; {data[item] || "未定"}
                                </p>
                            ))}
                        </td>
                        <td>{level}</td>
                    </tr>
                </tbody>
            </table>
            <p style={{width: '525rem', height: '70rem', fontSize: '10rem', lineHeight: 1.448, whiteSpace: 'pre-line'}}>{description}</p>
        </div>
    );
};

export default GeneInformationMiddle;
