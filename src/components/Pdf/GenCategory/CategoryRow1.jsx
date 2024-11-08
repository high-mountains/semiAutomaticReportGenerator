import React, { useState } from "react";
import Cell1 from "./Cell1";

const CategoryRow1 = (props) => {

    return (
        <div
            className={`w-full py-0 flex flex-wrap items-center justify-start gap-[5rem]`}
            style={{ backgroundColor: `${props.bgColor}` }}
        >
            {props.data.map(
                ({ borderstatus, text, subContent1, subContent2 }, index) => (
                    <Cell1
                        kye={index}
                        borderStatus={borderstatus}
                        content={text}
                        subContent1={subContent1}
                        subContent2={subContent2}
                    />
                )
            )}
        </div>
    );
};

export default CategoryRow1;
