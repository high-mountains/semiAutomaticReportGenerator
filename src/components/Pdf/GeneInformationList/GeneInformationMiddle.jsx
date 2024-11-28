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

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState({marginTop: '0rem'});
    const [thirdRenderedPdfFlag, setThirdRenderedPdfFlag] = useState({paddingTop: '8.4rem'});

    useEffect(() => {
        if(pdfFlag) {
            setRenderedPdfFlag({marginTop: '-9rem'});
            setThirdRenderedPdfFlag({paddingTop: '0rem', paddingBottom:'16.8rem'});
        } else if(!pdfFlag) {
            setRenderedPdfFlag({marginTop: '0rem'});
            setThirdRenderedPdfFlag({paddingTop: '8.4rem', paddingBottom:'8.4rem'});
        }
    }, [pdfFlag]);

    return (
        <div className="" style={{ fontSize: '16px', marginBottom: '10rem', color: '#484F51',}}>
            <table className="geneInfo" style={{ marginBottom: '10rem', fontSize: '12rem', width: '535rem'}}>
                <thead>
                    <tr>
                        <th><p style={renderedPdfFlag}>遺伝子</p></th>
                        <th><p style={renderedPdfFlag}>rsID / Gene Type</p></th>
                        <th><p style={renderedPdfFlag}>変異の大きさ</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>{geneName}</p></td>
                        <td style={thirdRenderedPdfFlag}>
                            {datas.map((item, index) => (
                                <p key={index}>
                                    {item} &nbsp; &nbsp; {data[item] || "未定"}
                                </p>
                            ))}
                        </td>
                        <td><p>{level}</p></td>
                    </tr>
                </tbody>
            </table>
            <p style={{width: '525rem', height: '70rem', fontSize: '10rem', lineHeight: 1.448, whiteSpace: 'pre-line'}}>{description}</p>
        </div>
    );
};

export default GeneInformationMiddle;
