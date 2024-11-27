import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Table = (props) => {
    const [headerData, setHeaderData] = useState(props.headerData);
    const [bodyData, setBodyData] = useState(props.bodyData);
    useEffect(() => {
        setBodyData(props.bodyData)
    }, [props]);

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
    
    return (
        <div style={{marginTop: '15rem'}}>
            <table style={{ width: "100%", textAlign: "center", color:"#484F51",  whiteSpace: 'pre-wrap' }}>
                {/* <thead style={{ backgroundColor: '#F8F8F8', height: '39rem', lineHeight: '1.44833', fontSize: '12rem' }}> */}
                <thead style={{ backgroundColor: '#F8F8F8', height: '39rem', fontSize: '12rem' }}>
                    <tr style={{borderTopWidth:'1rem', borderTopColor: '#C5C5C5', borderBottomWidth:'1rem', borderBottomColor: '#C5C5C5', borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5'}}>
                            {headerData.map((item, index)=> (
                            <th key={index} style={{ fontWeight: 'normal', borderRightWidth: '1rem', borderRightColor: '#C5C5C5', marginTop:'-15rem',  width: `${item.width}`}}><p style={renderedPdfFlag}>{item.content}</p></th>
                        ))}
                    </tr>
                    {/* {bodyData.map((item, index) => (
                        <tr key={index} style={{height: '40rem', borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5', borderBottomWidth: '1rem', borderBottomColor: '#C5C5C5'}}>
                            <th style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem'}}><span style={renderedPdfFlag}>{item.Lifestyle}</span></th>
                            <th style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem'}}><span style={renderedPdfFlag}>{item.When}</span></th>
                            <th style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem'}}><span style={renderedPdfFlag}>{item.Explanation}</span></th>
                            <th style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem'}}><span style={renderedPdfFlag}>{item.Categories}</span></th>
                        </tr>
                    ))} */}
                </thead>
                <tbody style={{fontSize: '14rem', height: 'auto'}}>
                    {bodyData.map((item, index) => (
                        <tr key={index} style={{borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5', borderBottomWidth: '1rem', borderBottomColor: '#C5C5C5', height:'auto'}}>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Lifestyle}</p></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.When}</p></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Explanation}</p></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}><p style={secondRenderedPdfFlag}>{item.Categories}</p></td>
                            {/* <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem', paddingBottom:'10rem', paddingTop:'-10rem'}}><span style={{marginTop:'-10rem'}}>{item.Lifestyle}</span></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem', paddingBottom:'10rem', paddingTop:'-10rem'}}><span style={{marginTop:'-10rem'}}>{item.When}</span></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem', paddingBottom:'10rem', paddingTop:'-10rem'}}><span style={{marginTop:'-10rem'}}>{item.Explanation}</span></td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5', marginTop:'-14rem', paddingBottom:'10rem', paddingTop:'-10rem'}}><span style={{marginTop:'-10rem'}}>{item.Categories}</span></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;