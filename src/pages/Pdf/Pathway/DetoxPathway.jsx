import React from 'react';

import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';

const DetoxPathway = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Detoxification Pathway"}
                mainTitle={"デトックス経路"}
                subTitleStyle={{
                    marginBottom:"5rem",
                    fontSize: "14rem"
                }}
                mainTitleStyle={{
                    fontSize:"32rem",
                    marginBottom: "0rem"
                }}
            />
            <div className='w-[535rem] h-[565rem]'>
                <img src="bg/detoxPathway.png" alt="" className="w-full h-full" />
            </div>
            <PageNumber>160</PageNumber>
        </PageWrapper>
    );
};

export default DetoxPathway;