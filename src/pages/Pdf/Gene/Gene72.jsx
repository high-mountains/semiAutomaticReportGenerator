import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene72 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"BDNF"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"CAT"}
                datas={["rs56164415", "rs7103411", "rs6265", "rs11030101"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、神経細胞の成長や生存、シナプス可塑性が影響を受ける可能性があります。BDNF（Brain-Derived Neurotrophic Factor）は、神経細胞の成長、分化、維持、そしてシナプスの可塑性を促進する脳由来神経栄養因子をコードしています。BDNFは、中枢神経系における記憶や学習、気分の調整において重要で、特に脳の海馬で高い発現を示します。"
                }
            />

            <GenePageNumber>113</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene72;
