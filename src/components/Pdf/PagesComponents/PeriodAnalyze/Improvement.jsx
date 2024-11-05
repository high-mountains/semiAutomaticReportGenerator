import React from 'react';
import Text from "../../Text"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Quality from '../Concept/Quality';

const Improvement = (props) => {
    const [mainColor, setMainColor] = useState(useSelector((state) => state.pdfData.glutamateColor))
    return (
        <div>
            <Quality
                sidebarColor={mainColor}
                description={props.description}
                qualities1={props.qualities1}
                oneColumn={1} //Here is up to the column range the whole width(ture) or half one(no code(ignore) or false).
                wrapperStyle={props.wrapperStyle && props.wrapperStyle} //Here is up to the control over the width of a unit contain "merit(demerit)" header and content in the merit componet || In the case if merit column you have to use the  one column with fixed width.(one column and fixed and control the width)    
            />
        </div>
    );
};

export default Improvement;