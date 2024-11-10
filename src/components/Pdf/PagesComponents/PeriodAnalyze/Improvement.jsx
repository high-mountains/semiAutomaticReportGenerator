import React from 'react';
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
                inContainerGap={props.inContainerGap}
                eachUlWidth={props.eachUlWidth}

                ulStyle1={props.ulStyle1}
                liStyle1={props.liStyle1}
                ulStyle2={props.ulStyle2}
                liStyle2={props.liStyle2}
            />
        </div>
    );
};

export default Improvement;