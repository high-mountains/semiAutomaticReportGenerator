import React from 'react';
import QualitySection from './QualitySection.jsx';
import Text from '../../Text';

const Quality = (props) => {
    return (
        <div className={`w-[${props.wrapperWidth}]`}>
            <Text
                sidebar={1}
                sidebarColor={props.sidebarColor}
                textContent={props.description}
            />
            <div className='flex flex-row justify-center gap-[10rem]'>
                <QualitySection
                    qualityArray={props.qualities1}
                    oneColumn={props.oneColumn}
                    className={props.className && props.className} // This is the className of li lists
                    liClassName={props.liClassName && props.liClassName}  
                    inContainerGap={props.inContainerGap && props.inContainerGap}
                    eachUlWidth={props.eachUlWidth && props.eachUlWidth}
                    ulStyle={props.ulStyle1 && props.ulStyle1}
                    liStyle={props.liStyle1 && props.liStyle1}
                    />
                
                {props.qualities2 && <QualitySection
                    qualityArray={props.qualities2}
                    oneColumn={props.oneColumn}
                    className={props.className && props.className} // This is the className of li lists
                    liClassName={props.liClassName && props.liClassName}  
                    inContainerGap={props.inContainerGap && props.inContainerGap}
                    eachUlWidth={props.eachUlWidth && props.eachUlWidth}
                    ulStyle={props.ulStyle2 && props.ulStyle2}
                    liStyle={props.liStyle2 && props.liStyle2}
                />}
            </div>
        </div>
    );
}

export default Quality;