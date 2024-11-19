import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene9 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"ドーパミン受容体"} />

            <GeneInformationMiddle
                geneName={"DRD1"}
                datas={["rs5326"]}
                level={-1}
                description={"この遺伝子に変異がある場合、認知機能や行動調節に影響を与える可能性があります。DRD1（Dopamine Receptor D1）は、ドーパミンD1受容体をコードしています。この受容体は、中枢神経系におけるGタンパク質共役型受容体の一種で、ドーパミンが結合するとアデニル酸シクラーゼを活性化し、細胞内のcAMP（サイクリックAMP）濃度を増加させます。"}
            />
            <GeneInformationMiddle
                geneName={"DRD2"}
                datas={["rs1076560", "rs6277", "rs1800497"]}
                level={-1}
                description={"この遺伝子に変異がある場合、報酬系の反応や動機づけ、制御機能に影響を与える可能性があります。DRD2（Dopamine Receptor D2）は、ドーパミンD2受容体をコードしており、ドーパミンが結合するとアデニル酸シクラーゼを抑制するGタンパク質共役型受容体です。DRD2は、神経伝達物質の放出や運動調節、報酬系において重要な役割を果たし、行動の調節や意思決定にも関与しています。"}
            />
            
            <GeneInformationMiddle
                geneName={"DRD4"}
                datas={["rs11246226", "rs916455", "rs4331145", "rs180095"]}
                level={-1}
                description={"この遺伝子に変異がある場合、注意力や行動の抑制に影響を与える可能性があります。DRD4（Dopamine Receptor D4）は、ドーパミンD4受容体をコードしており、DRD2と同様にアデニル酸シクラーゼを抑制するGタンパク質共役型受容体です。DRD4は、特に前頭前皮質に高発現しており、認知機能や感情の調節、注意の制御に関連しています。"}
            />
            
            <GenePageNumber>50</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene9;
