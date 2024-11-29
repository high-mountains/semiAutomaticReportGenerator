import React, { useEffect, useState } from "react";
import Cell1 from "./Cell1";

const CategoryRow = ({bgColor, data}) => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        setCategoryData(data);
        
    }, [data]);
    
    return (
        <div
            style={{
                width: "100%",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "5rem",
                backgroundColor: `${bgColor}` 
            }}
        >
            {categoryData.map(
                ({ borderstatus, text, subContent1, subContent2 }, index) => (
                    <Cell1
                        key={index}
                        borderStatus={borderstatus && borderstatus}
                        content={text && text}
                        subContent1={subContent1 && subContent1}
                        subContent2={subContent2 && subContent2}
                    />
                )
            )}
        </div>
    );
};

export default CategoryRow;
