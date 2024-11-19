import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene80 = () => {
    return (
        <PageWrapper>
            

            <GeneInformationMiddle
                geneName={"ZO-2(TJP2)"}
                datas={["rs121918299", "rs587777521", "rs746830415"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸壁の透過性が増加する可能性があります。ZO-2（Tight Junction Protein 2）は、タイトジャンクションと呼ばれる細胞間接着構造において重要なタンパク質で、腸や血管などの組織でバリア機能を維持します。TJP2は、細胞間の密着性を高め、分子が細胞間を通過しないようにすることで、組織の選択的透過性を調節します。"
                }
            />

            <GenePageNumber>121</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene80;
