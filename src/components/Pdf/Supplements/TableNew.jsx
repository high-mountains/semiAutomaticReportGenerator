import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TableHeader from "./TableHeader";

const TableNew = (props) => {
    const [tBody, setTBody] = useState(props.tBody || {});
    useEffect(() => {
        setTBody(props.tBody)
    },[props.tBody])

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState({marginTop: '0rem'});

    useEffect(() => {
        if(pdfFlag) {
            setRenderedPdfFlag({marginTop: '-13rem', paddingTop:'7.5rem', paddingBottom: '6rem'});
        } else if(!pdfFlag) {
            setRenderedPdfFlag({marginTop: '0rem', paddingTop:'0rem', paddingBottom: '0rem'});
        }
    }, [pdfFlag]);

    return (
        <div className="mt-[10rem] w-[535rem] font">
            <table className="supplement" style={{
                width: "100%",
                color: "#34495E",
                paddingTop: "10rem"
            }}>
                <thead>
                    <TableHeader/>
                </thead>
                <tbody>
                    {tBody.map((item, rowIndex) => (
                        <tr key={rowIndex} className={`h-[${item.trHeight || 30}rem] text-[9rem]`}>
                            {item.thContent && (<td rowSpan={item.rowSpan && item.rowSpan}>
                                <p style={renderedPdfFlag}>
                                    <span className="font-bold">{item.thContent.main}</span>
                                    <br/>
                                    <span>{item.thContent.sub}</span>
                                </p>
                            </td>)}
                            <td className="text-center"><p style={renderedPdfFlag}>{item.tdContent.disGen ?item.tdContent.disGen : item.tdContent.gen}</p></td>
                            <td className="text-center flexs" style={{
                                        color:
                                        item.tdContent.danger !== 0
                                                ? "red"
                                                : "inherit"
                                    }}><p style={renderedPdfFlag}>{item.tdContent.danger}</p></td>
                            <td><p style={renderedPdfFlag}>{item.tdContent.description}</p></td>
                            <td className={`${item.tdContent.etcClassName && item.tdContent.etcClassName}`}><p style={renderedPdfFlag}>{item.tdContent.etc || "-"}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableNew;
