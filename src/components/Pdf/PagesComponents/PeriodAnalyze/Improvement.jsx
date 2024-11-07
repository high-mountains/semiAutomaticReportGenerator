import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Quality from '../Concept/Quality';

const Improvement = (props) => {
    // const [mainColor, setMainColor] = useState(useSelector((state) => state.pdfData.glutamateColor))
    return ( 
        <div>
            <Quality
                sidebarColor={props.mainColor}
                description={props.description}
                qualities1={props.qualities1}
                qualities2={props.qualities2}
                improveGap={props.improveGap}
                oneColumn={props.oneColumnStatus} //Here is up to the column range the whole width(ture) or half one(no code(ignore) or false).
                wrapperStyle={props.wrapperStyle && props.wrapperStyle} //Here is up to the control over the width of a unit contain "merit(demerit)" header and content in the merit componet || In the case if merit column you have to use the  one column with fixed width.(one column and fixed and control the width)    
                liStyle={props.liStyle && props.liStyle}  
                liClassName={props.liClassName && props.liClassName}
                ulStyle={props.ulStyle && props.ulStyle}
            />
        </div>
    );
};

export default Improvement;