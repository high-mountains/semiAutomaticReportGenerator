import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene83 = () => {
    return (
        <PageWrapper>
            

            <GeneInformationMiddle
                geneName={"TP53"}
                datas={["rs3758391"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞周期の制御やDNA損傷応答が影響を受ける可能性があります。TP53は、がん抑制遺伝子として知られ、細胞のDNA損傷応答、細胞周期の制御、アポトーシス（プログラム細胞死）の促進に重要な役割を果たします。TP53は、DNAに損傷が生じた際に細胞周期を停止させ、修復の機会を与えるか、修復不能な場合はアポトーシスを誘導します。"
                }
            />

            <GenePageNumber>124</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene83;
