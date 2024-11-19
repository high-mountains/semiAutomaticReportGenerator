import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene114 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"ADHD"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"HTR1B"}
                datas={["rs6296"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、神経伝達やシナプス可塑性に影響を与える可能性があります。HTR1Bは、セロトニン1B受容体をコードしており、神経細胞でのセロトニンのシグナル伝達を調整します。この受容体は、主に脳の中枢神経系で発現し、神経伝達物質の放出や抑制に関与し、行動、感情、攻撃性の調整をサポートします。"
                }
            />
            <GeneInformationMiddle
                geneName={"SLC6A3"}
                datas={["rs27072"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、脳内のドーパミン再取り込みと調節が影響を受ける可能性があります。SLC6A3は、ドーパミントランスポーター（DAT）をコードしており、シナプス間隙からドーパミンを再取り込みすることで神経伝達を調整します。このトランスポーターは、特に脳の報酬系や運動制御に関連する領域で発現が高く、ドーパミンシグナルの終了を促し、感情、学習、運動に影響を与えます。"
                }
            />
            <GeneInformationMiddle
                geneName={"SNAP25"}
                datas={["rs3746544", "rs6296", "rs27072"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、神経伝達の効率や神経回路の機能に影響を与える可能性があります。SNAP25は、シナプス小胞の膜と細胞膜が融合する際に必要なタンパク質で、神経伝達物質の放出を調節します。このタンパク質は、特に中枢神経系で発現しており、シナプス伝達の効率や精度を向上させます。"
                }
            />

            <GenePageNumber>155</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene114;
