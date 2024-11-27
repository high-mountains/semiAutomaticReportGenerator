import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableHeader = () => {
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState({marginTop: '0rem'});

    useEffect(() => {
        if(pdfFlag) {
            setRenderedPdfFlag({marginTop: '-9rem'});
        } else if(!pdfFlag) {
            setRenderedPdfFlag({marginTop: '0rem'});
        }
    }, [pdfFlag]);
    
    return (
        <tr>
            <th><p style={renderedPdfFlag}>カテゴリー</p></th>
            <th><p style={renderedPdfFlag}>遺伝子</p></th>
            <th><p style={renderedPdfFlag}>変異の大きさ</p></th>
            <th><p style={renderedPdfFlag}>摂取すべきもの</p></th>
            <th><p style={renderedPdfFlag}>避けるべきもの</p></th>
        </tr>
    );
};

export default TableHeader;