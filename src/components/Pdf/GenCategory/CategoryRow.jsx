import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const CategoryRow = ({bgColor, data}) => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        setCategoryData(data);
        
    }, [data]);
    
    return (
        <div
            style={{
                width: "100%", // Equivalent to w-full
                paddingTop: "2.5rem", // Equivalent to py-[5rem]
                paddingBottom: "2.5rem", // Equivalent to py-[5rem]
                display: "flex", // Equivalent to flex
                flexWrap: "wrap", // Equivalent to flex-wrap
                alignItems: "center", // Equivalent to items-center
                justifyContent: "flex-start", // Equivalent to justify-start
                gap: "5rem", // Equivalent to gap-[5rem]
                backgroundColor: `${bgColor}`
            }}
        >
            {categoryData.map(
                ({ borderstatus, text, subContent1, subContent2 }, index) => (
                    <Cell
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
