import React from 'react';

import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';

import Text from '../../../components/Pdf/Text'

const MitochondriaPathway = ({deltaPageCount}) => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Mitochondria Pathway"}
                mainTitle={"ミトコンドリア経路"}
                subTitleStyle={{
                    marginBottom:"5rem",
                    fontSize: "14rem"
                }}
                mainTitleStyle={{
                    fontSize:"32rem",
                    marginBottom: "0rem"
                }}
            />
            <div className='ml-[-13rem]w-[561rem] h-[633rem]'>
                <img src="bg/MitochondriaPathway.svg" alt="MitochondriaPathway.svg" className="w-full h-full" />
            </div>
            <Text
                textContent={
                    "※グレーで囲われたテキストは酵素/遺伝子をあらわしています。"
                }
                fontSize={9}
                className={"whitespace-pre-wrap mt-[25rem] color-[#484F51]"}
            />
            <PageNumber>{154+deltaPageCount}</PageNumber>
        </PageWrapper>
    );
};

export default MitochondriaPathway;