import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Quality from '../Concept/Quality';

const Improvement = (props) => {
    return ( 
        <div>
            <Quality
                wrapperWidth={props.wrapperWidth}
                sidebarColor={props.mainColor}
                description={props.description}
                
                gap={props.gap}
                qualities1={props.qualities1}
                qualities2={props.qualities2}
                oneColumn={props.oneColumnStatus} //Here is up to the column range the whole width(ture) or half one(no code(ignore) or false).
                // improveGap={props.improveGap}
                inContainerGap={props.inContainerGap}
                eachUlWidth={props.eachUlWidth}
                ulStyle1={props.ulStyle1}
                liStyle1={props.liStyle1}
                ulStyle2={props.ulStyle2}
                liStyle2={props.liStyle2}

                // wrapperStyle={props.wrapperStyle && props.wrapperStyle} //Here is up to the control over the width of a unit contain "merit(demerit)" header and content in the merit componet || In the case if merit column you have to use the  one column with fixed width.(one column and fixed and control the width)    
                // liStyle={props.liStyle && props.liStyle}  
                // liClassName={props.liClassName && props.liClassName}
                // ulStyle={props.ulStyle && props.ulStyle}
            />
        </div>
    );
};

export default Improvement;