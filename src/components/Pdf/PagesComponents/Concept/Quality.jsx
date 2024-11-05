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
            <div className='flex flex-row gap-[10rem]'>
                <QualitySection
                    qualityArray={props.qualities1}
                    oneColumn={props.oneColumn}
                    liStyle={props.liStyle && props.liStyle}       // This is the inline style of li lists
                    className={props.className && props.className} // This is the className of li lists

                />
                {props.qualities2 && <QualitySection
                    qualityArray={props.qualities2}
                />}
            </div>
        </div>
    );
}

export default Quality;