// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const Table = (props) => {
//     const [headerData, setHeaderData] = useState(props.headerData);
//     const [bodyData, setBodyData] = useState(props.bodyData);
//     useEffect(() => {
//         setBodyData(props.bodyData)
//     }, [props]);

//     const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
//     const [renderedPdfFlag, setRenderedPdfFlag] = useState({marginTop: '0rem'});
//     const [secondRenderedPdfFlag, setSecondRenderedPdfFlag] = useState({marginTop: '0rem', paddingBottom: '5rem'});

//     useEffect(() => {
//         if(pdfFlag) {
//             setRenderedPdfFlag({marginTop: '-13rem'});
//             setSecondRenderedPdfFlag({marginTop: '-9rem', paddingBottom: '10rem'});
//         } else if(!pdfFlag) {
//             setRenderedPdfFlag({marginTop: '0rem'});
//             setSecondRenderedPdfFlag({marginTop: '0rem', paddingBottom: '0rem'});
//         }
//     }, [pdfFlag]);
    
//     return (
//         <div style={{marginTop: '15rem'}}>
//             <table style={{ width: "100%", textAlign: "center", color:"#484F51",  whiteSpace: 'pre-wrap' }}>
//                 <thead style={{ backgroundColor: '#F8F8F8', height: '39rem', fontSize: '12rem' }}>
//                     <tr style={{borderTopWidth:'1rem', borderTopColor: '#C5C5C5', borderBottomWidth:'1rem', borderBottomColor: '#C5C5C5', borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5'}}>
//                             {headerData.map((item, index)=> (
//                             <th key={index} style={{ fontWeight: 'normal', borderRightWidth: '1rem', borderRightColor: '#C5C5C5', marginTop:'-15rem',  width: `${item.width}`}}><p style={renderedPdfFlag}>{item.content}</p></th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody style={{fontSize: '14rem', height: 'auto'}}>
//                     {bodyData.map((item, index) => (
//                         <tr key={index} style={{borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5', borderBottomWidth: '1rem', borderBottomColor: '#C5C5C5', height:'auto'}}>
//                             <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Lifestyle}</p></td>
//                             <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.When}</p></td>
//                             <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Explanation}</p></td>
//                             <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Categories}</p></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Table;

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Table = ({ headerData, bodyData, onHeightExceed, isFirstPage }) => {
    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState({marginTop: '0rem'});
    const [secondRenderedPdfFlag, setSecondRenderedPdfFlag] = useState({marginTop: '0rem', paddingBottom: '5rem'});

    useEffect(() => {
        if(pdfFlag) {
            setRenderedPdfFlag({marginTop: '-13rem'});
            setSecondRenderedPdfFlag({marginTop: '-9rem', paddingBottom: '10rem'});
        } else if(!pdfFlag) {
            setRenderedPdfFlag({marginTop: '0rem'});
            setSecondRenderedPdfFlag({marginTop: '0rem', paddingBottom: '0rem'});
        }
    }, [pdfFlag]);

    

        //  Here is for Dynamic Table composition
    const tableRef = useRef(null);
    const [visibleData, setVisibleData] = useState([]);
    const [remainingData, setRemainingData] = useState([]);

    useEffect(() => {
        // Initialize the table data
        setVisibleData(bodyData);
        setRemainingData([]);
    }, [bodyData]);

    useEffect(() => {
        const comparingHeight = isFirstPage ? 640 : 753;

        const checkHeight = () => {
            if (!tableRef.current) return;

            const rows = Array.from(tableRef.current.querySelectorAll("tbody tr"));
            let currentHeight = 0;
            let lastVisibleIndex = 0;

            for (let i = 0; i < rows.length; i++) {
                currentHeight += rows[i].offsetHeight;
                if (currentHeight > comparingHeight) {
                    break;
                }
                lastVisibleIndex = i + 1;
            }

            if (lastVisibleIndex < visibleData.length) {
                const newVisibleData = visibleData.slice(0, lastVisibleIndex);
                const newRemainingData = visibleData.slice(lastVisibleIndex);

                // Only update state if data has changed
                if (JSON.stringify(newVisibleData) !== JSON.stringify(visibleData)) {
                    setVisibleData(newVisibleData);
                    setRemainingData(newRemainingData);

                    if (onHeightExceed) {
                        onHeightExceed(newRemainingData);
                    }
                }
            }
        };

        checkHeight();
    }, [visibleData, isFirstPage, onHeightExceed]); // Removed `onHeightExceed` dependency to prevent extra calls

    return (
        <div ref={tableRef} style={{ marginTop: "15rem" }}>
            <table style={{ width: "100%", textAlign: "center", color: "#484F51", whiteSpace: "pre-wrap" }}>
                <thead style={{ backgroundColor: '#F8F8F8', height: '39rem', fontSize: '12rem' }}>
                    <tr style={{borderTopWidth:'1rem', borderTopColor: '#C5C5C5', borderBottomWidth:'1rem', borderBottomColor: '#C5C5C5', borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5'}}>
                            {headerData.map((item, index)=> (
                            <th key={index} style={{ fontWeight: 'normal', borderRightWidth: '1rem', borderRightColor: '#C5C5C5', marginTop:'-15rem',  width: `${item.width}`}}><p style={renderedPdfFlag}>{item.content}</p></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((item, index) => (
                        <tr key={index} style={{borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5', borderBottomWidth: '1rem', borderBottomColor: '#C5C5C5', height:'auto', fontSize:'12rem'}}>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Lifestyle}</p></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.When}</p></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Explanation}</p></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Categories}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
