import React from 'react';

import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';

import Text from '../../../components/Pdf/Text'

const MethylationPathway = ({deltaPageCount}) => {
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
            <div className='ml-[25.5rem] w-[490.42rem] h-[633rem]'>
                <img src="bg/methylationPathway.svg" alt="methylationPathway.svg" className="w-full h-full" />
            </div>
            <Text
                textContent={
                    "※亜鉛は、水銀・カドミウムによって阻害されます。\n※水色の下線が引かれた栄養素は補酵素をあらわし、グレーで囲われたテキストは酵素/遺伝子をあらわしています。"
                }
                fontSize={9}
                className={"whitespace-pre-wrap my-[20rem] color-[#484F51]"}
            />
            <PageNumber>{144+deltaPageCount}</PageNumber>
        </PageWrapper>
    );
};

export default MethylationPathway;