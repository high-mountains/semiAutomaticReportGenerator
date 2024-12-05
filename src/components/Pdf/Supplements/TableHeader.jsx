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
            <th><p style={renderedPdfFlag}>Category</p></th>
            <th><p style={renderedPdfFlag}>Gene</p></th>
            <th><p style={renderedPdfFlag}>Mutation size</p></th>
            <th><p style={renderedPdfFlag}>What to eat</p></th>
            <th><p style={renderedPdfFlag}>Things to avoid</p></th>
        </tr>
    );
};

export default TableHeader;