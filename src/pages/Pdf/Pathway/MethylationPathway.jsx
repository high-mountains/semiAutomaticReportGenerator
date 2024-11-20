import React from 'react';

import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';

const MethylationPathway = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Methylation Pathway"}
                mainTitle={"メチレーション経路"}
                subTitleStyle={{
                    marginBottom:"5rem",
                    fontSize: "14rem"
                }}
                mainTitleStyle={{
                    fontSize:"32rem",
                    marginBottom: "0rem"
                }}
            />
            <div className='w-[535rem] h-[314rem]'>
                <img src="bg/methylationPathway.png" alt="" className="w-full h-full" />
            </div>
            <PageNumber>161</PageNumber>
        </PageWrapper>
    );
};

export default MethylationPathway;