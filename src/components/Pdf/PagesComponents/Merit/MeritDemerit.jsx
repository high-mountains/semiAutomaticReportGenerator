import React from "react";
import Rit from "./MeritComponent";

const MeritDemerit = (props) => {
    // if(props.contentStyle) {
    //     console.log("props.contentStyle====>", props.contentStyle)
    // };

    return (
        <div className="flex flex-row items-start gap-[30rem] justify-center">
            <Rit
                tag="メリット"
                data={props.merit}
                commonStyle={props.commonStyle}
                inCommonStyle={props.inCommonStyle}
                titleStyle={props.titleStyle}
                contentStyle={props.contentStyle}
                wrapperStyle={props.wrapperStyle}
            ></Rit>
            <Rit
                tag="デメリット"
                data={props.demerit}
                commonStyle={props.commonStyle}
                inCommonStyle={props.inCommonStyle}
                titleStyle={props.titleStyle}
                contentStyle={props.contentStyle}
                wrapperStyle={props.wrapperStyle}
            ></Rit>
        </div>
    );
};

export default MeritDemerit;
