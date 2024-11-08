import React from 'react';
import QualitySection from './QualitySection.jsx';
import Text from '../../Text';

const Quality = (props) => {
    return (
        <div>
            <Text
                sidebar={1}
                sidebarColor={props.sidebarColor}
                textContent={props.description}
                // oneColumn={props.oneColumn}
            />
            <div className='flex flex-row justify-center gap-[10rem]'>
                <QualitySection
                    qualityArray={props.qualities1}
                    oneColumn={props.oneColumn}
                    // liStyle={props.liStyle && props.liStyle}       // This is the inline style of li lists
                    className={props.className && props.className} // This is the className of li lists
                    liClassName={props.liClassName && props.liClassName}  
                    // ulStyle={props.ulStyle && props.ulStyle} 
                    // improveGap={props.improveGap}
                    inContainerGap={props.inContainerGap && props.inContainerGap}
                    eachUlWidth={props.eachUlWidth && props.eachUlWidth}
                    ulStyle={props.ulStyle1 && props.ulStyle1}
                    liStyle={props.liStyle1 && props.liStyle1}
                    // ulStyle2={props.ulStyle2 && props.ulStyle2}
                    // liStyle2={props.liStyle2 && props.liStyle2}
                    />
                
                {props.qualities2 && <QualitySection
                    qualityArray={props.qualities2}
                    oneColumn={props.oneColumn}
                    // liStyle={props.liStyle && props.liStyle}       // This is the inline style of li lists
                    className={props.className && props.className} // This is the className of li lists
                    liClassName={props.liClassName && props.liClassName}  
                    // ulStyle={props.ulStyle && props.ulStyle} 
                    // improveGap={props.improveGap}
                    inContainerGap={props.inContainerGap && props.inContainerGap}
                    eachUlWidth={props.eachUlWidth && props.eachUlWidth}
                    // ulStyle1={props.ulStyle1 && props.ulStyle1}
                    // liStyle1={props.liStyle1 && props.liStyle1}
                    ulStyle={props.ulStyle2 && props.ulStyle2}
                    liStyle={props.liStyle2 && props.liStyle2}
                />}
            </div>
        </div>
    );
}

export default Quality;