import React, { useEffect, useState } from "react";

const Table = (props) => {
    const [headerData, setHeaderData] = useState(props.headerData);
    const [bodyData, setBodyData] = useState(props.bodyData);
    useEffect(() => {
        setBodyData(props.bodyData)
    }, [props]);
    
    return (
        <div style={{marginTop: '15rem'}}>
            <table style={{ width: "100%", textAlign: "center", color:"#484F51",  whiteSpace: 'pre-wrap' }}>
                <thead style={{ backgroundColor: '#F8F8F8', height: '39rem', lineHeight: '1.44833', fontSize: '12rem' }}>
                    <tr style={{borderTopWidth:'1rem', borderTopColor: '#C5C5C5', borderBottomWidth:'1rem', borderBottomColor: '#C5C5C5', borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5'}}>
                        {headerData.map((item, index)=> (
                            <th key={index} style={{ fontWeight: 'normal', borderRightWidth: '1rem', borderRightColor: '#C5C5C5', width: `${item.width}`}}>{item.content}</th>
                        ))}
                    </tr>
                </thead>
                <tbody style={{fontSize: '14rem'}}>
                    {bodyData.map((item, index) => (
                        <tr key={index} style={{height: '40rem', borderLeftWidth: '1rem', borderLeftColor: '#C5C5C5', borderBottomWidth: '1rem', borderBottomColor: '#C5C5C5'}}>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}}>{item.Lifestyle}</td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}} >{item.When}</td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}} >{item.Explanation}</td>
                            <td style={{borderRightWidth: '1rem', borderRightColor:'#C5C5C5'}} >{item.Categories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;